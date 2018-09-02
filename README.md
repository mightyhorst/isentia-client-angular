# Overview 
* [Online Demo]()
* [Code Docs](https://mitni455.github.io/isentia-client-angular/overview.html)

# Quick Start 
Install and run 
1. Clone: `git clone https://github.com/mitni455/isentia-client-angular.git`
2. Install dependencies: `npm i`
3. Run tests 
* Install the CLI (if not installed) `npm i -g @angular/cli` 
* `ng test`
* `ng e2e`
4. Serve locally: `ng serve`

Please raise a `pull request` for any developments, and use the `issues` for issues and feature requests. 


# Architecture 

<!-- ![Architecture](https://mitni455.github.io/isentia-client-angular/images/architecture.png) -->
![Architecture](https://s3-ap-southeast-2.amazonaws.com/isentia.flickr.angular.assets/images/architecture.png)

| Application | Description |
| -------- | ----------- |
| `Angular6` | *Angular6* is used as the simple SPA framework.  |
| `ExpressJs` | The app is served by *ExpressJs*. We could also use this as a simple resourceful API too, however we have chosen to use microservices on *Lambda*   |
| `Docker` | *Docker* is probably overkill here, but is used as a simple container to quickly setup the Angular/Express app on all environments (dev/test/staging)  |

| Platform | Description |
| -------- | ----------- |
| `Beanstalk` | Angular App is served using *ExpressJs* inside a *Docker* container |
| `AWS Gateway` | The Angular App calls the AWS Gateway  |
| `Lambda` | A serveless microservice for handling Flickr and user management  |
| `Cognito` | *not used* Used for User IAM and AAA  |
| `DynamoDb` | Used for saving user favourites.  |


| Tools | Description |
| -------- | ----------- |
| `Travis CI` | Continuous Integration and Deployment |
| `CompoDoc` | Documentation |
| `Agile` | Github Projects |
| [`BackstopJS 3`](https://garris.github.io/BackstopJS/) | Visual regression testing for responsive CSS |
| `Mocha` | Integration and API Testing (used for backend repo. I prefer it to Jasmine/Karma)   |
| `Jasmine + Karma` | Built in ng unit testing  |
| `Protractor` | Built in ng e2e testing with PhantomJs and Chrome Web Driver |

# CI/CD

<!-- ![cicd](https://mitni455.github.io/isentia-client-angular/images/ci_cd.png) -->
![cicd](https://s3-ap-southeast-2.amazonaws.com/isentia.flickr.angular.assets/images/ci_cd.png)

### Environments
| Environment | Description |
| -------- | ----------- |
| `Test` | Because this is AWS we need to deploy to a test environment online before we can run the integration tests. If these pass then the *master* branch will be deployed to the staging environment.  |
| `Staging` | The *master* branch will be deployed to the *staging* environment after all tests pass on the *test* environment.  |
| `Production` | The *production* branch will be deployed to the *production* environment after all tests pass on the *test* environment. This is not setup for our simple example |


### Pipeline
*TravisCi* is used as our Continuous Integration service. 

# Development Lifecycle
Depending on the client tradeoffs between time, cost and quality I would follow the following development lifecycle including agile approach, extreme programming and BDD. 

<!-- ![Architecture](https://mitni455.github.io/isentia-client-angular/images/dev-lifecycle.png) -->
![Architecture](https://s3-ap-southeast-2.amazonaws.com/isentia.flickr.angular.assets/images/dev-lifecycle.png)

Depending on the project, I typically have stagered design + development sprints 

| Sprint      | Description |
| ----------- | ----------- | 
| Design      | `Plan > UX > UI > Backlog` | 
| Development | `Plan > User Stories > Test > Code > Deploy ` | 

| SCRUM | Time | Phase Description |
| ------| ---- | ----------------- | 
| `Plan` | 4 hours | Refine and reorder `product backlog`  and `planning poker` | 
| `Plan` | Refine and reorder `product backlog`  and `planning poker` | 

| User Story | Lifecycle |
| --------- | ------- | 
| `User Story` | Create `issue` for each `user story` | 
| `UX + UI` | If no Design phase, create wireframes and PSD/Sketch designs if applicable  | 
| `Failing Test` | Design e2e test and unit test that fail | 
| `Code` | Create new `branch` for each user story.  | 
| `Passing Test` | Write code to pass tests | 
| `Commit` | Refactor to pass all tests and `pull request` for merge to `master` branch | 
| `Test Env` | Push to test environment | 
| `Staging` | If tests pass, push to staging  | 
| `Review` | Business owner to review then push to `production` branch | 
| `Production` | If passes tests, push to production | 
| `Retrospective` | Collect feedback for sprint retrospective or add to product backlog | 


### Plan 
We will use *SCRUM* as our agile methodology. Before the *sprint* starts we need to source the Product Backlog from the Business Owner and the roles we will be serving as our customer. 

We will use Trello, Jira or Github Projects as our agile tool. 

The *roles* are simple, we have one user. Optionally, it is typically helpful and improves enaggement with the client or business owner to source a *persona* for our roles rather than just saying "user" in our stories. This helps us focus on delivering value for the customer. 

e.g. *Kayla as "User"*
<!-- ![Example Persona](https://mitni455.github.io/isentia-client-angular/images/persona.jpg) -->
![Example Persona](https://s3-ap-southeast-2.amazonaws.com/isentia.flickr.angular.assets/images/persona.jpg)

The *epics* for this sprint include: 

| ID 		| Epic 		|
| --------- | --------- | 
| `Epic 1:` | As a user, I want to view the public feed from Flickr, so that I can save my favourites |
| `Epic 2:` |  As a user, I want to search for topics from the flickr feed, so that I can save time looking for topics I like |
| `Epic 3:` |  As a user, I want to save my favourites, so that I can view them quickly when I return to the app |
| `Epic 4:` | As a user, I want a simple sidebar, so that I can navigate between Flickr, searches and favourites |


### UX and UI 
These epics can be further broken down into the following *user stories* by creating *wireframes* for the *UX (User Experience)*

<!-- ![UX](https://mitni455.github.io/isentia-client-angular/images/ux.png)  -->
![UX](https://s3-ap-southeast-2.amazonaws.com/isentia.flickr.angular.assets/images/ux.png)


| Parent ID | UI Epic |
| --------- | ------- | 
| `Epic 1:`  | As a user, I want a Flickr list page |
| `Epic 1:`  | As a user, I want a Flickr details page |
| `Epic 2:`  | As a user, I want a search page |
| `Epic 3:` | As a user, I want a favourites page |



###### BDD - e2e Tests
Following *BDD* we already have enough for some *e2e tests* using protractor: 


`As a user, I want a Flickr list page`  
```
* Go to the home page at '/'
* Expect to see 'Flickr Angular App'
* Expect the 'All Photos' sidebar to be active 
```


`As a user, I want a Flickr details page` 
```
* Go to the details page at /flickr/{mockImageId}
* Expect to see the title 'Mock Title'
* Expect to see the image 
* Expect to see the the authour 'Mock Authour'
* Expect to see the image description 'Mock Description' 
```

`As a user, I want a search page` 
```
* Go to the search page at '/flickr/search'
* Enter the search term 'mock term' to a list of mock images
* Expect the 'Search' sidebar to be active 
```

`As a user, I want a simple sidebar` 
```
* Expect to see a sidebar with the 'All Images'
* Expect to see a sidebar with the 'Search'
* Expect to see a sidebar with the anchor 'Favourites' 
```


### User Stories 
A `User Story` as issues 

| Boilerplate User Story | Boiler Plate Tests |
| ---------------------- | ------------------ |
| `Components` | *DI <br> *Elements on Dom <br> * HTML for Mock Model <br> *Inputs() <br> *Outputs() <br> *Events triggered <br> *Events received <br> *Test for state: loading, success, warning, error <br> *Test lifecycle hooks <br> * BackstopJs CSS tests for responsive |
| `Models` | * DI <br>  *Key /values set <br> * JSON Schema validation |
| `Services` | * DI <br> * Observable subscribe <br> * Get set <br> * Integration test for API |
#| `` |  |
#| `` |  |
#| `` |  |

# Components 
`As a user, I want a Flickr list page`  

###### BDD - Unit Tests
```
* should create the page
* should show the mock images 
```

`As a user, I want a Flickr details page` 

###### BDD - Unit Tests
```
* 
* 
```

`As a user, I want a search page` 

###### BDD - Unit Tests
```
* 
* 
```

`As a user, I want a simple sidebar` 

###### BDD - Unit Tests
```
* 
* 
```





# Code Docs

See the published [code docs here](https://mitni455.github.io/isentia-client-angular/overview.html)


_________________________________________

# Angular Development 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
