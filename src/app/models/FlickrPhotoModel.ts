import {IFlickrApiItemContract} from './contracts/IFlickrApiItemContract'; 

/**
*
* FlickrPhotoModel 
* represents a photo's meta data used by the Flickr List and Details components 
* it is created by passing a IFlickrApiItem from the flickr api
* I do this so that each response has an interface that can be tarnsformed into a model even if the mappings aren't one to one
* @todo pipes make this more or less redundant, so in the future I will have response models that can self validate using json schema library
*
**/
export class FlickrPhoto{

	title: string;
    link: string;
    media:  string;
    date_taken: string;
    description: string;
    published: string;
    author: string;
    author_id: string;
    tags: string;
    photo_id: string;
    isFavourite:boolean;

    constructor(contract: IFlickrApiItemContract) {

        this.title = contract.title;
        this.link = contract.link;
        this.media = contract.media.m;
        this.date_taken = contract.date_taken;
        this.description = contract.description;
        this.published = contract.published;
        this.author = contract.author;
        this.author_id = contract.author_id;
        this.tags = contract.tags;
        this.photo_id = contract.photo_id;

        /**
        *  set favourite false by default 
        * @todo update the api to send back favourite or not by looking up the image in the DynamoDb table 
        **/
        this.isFavourite = false; 
    }


    authourEmail():string{

        var emails = this.author.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        return emails ? emails[0] : "";
    }

    authourName():string{

        const names = this.author.match(/"(.*?)"/);
        return names ? names[1] : "";
    }

}