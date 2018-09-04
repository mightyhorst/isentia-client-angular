import { async, TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { APP_BASE_HREF } from '@angular/common';
// import { HttpClient, HttpClientModule, HttpRequest, HttpParams } from '@angular/common/http';

import { FlickrApiService } from './flickr-api.service';

describe('FlickrApiService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
		  	providers: [FlickrApiService],
		  	imports: [ 
		  		HttpClientModule,
		  		HttpClientTestingModule
		  	]
		});
	});

	afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
	    backend.verify();
	}));

	it('should be created', inject([FlickrApiService], (service: FlickrApiService) => {
		
		expect(service).toBeTruthy();
	}));



	it('should Get All Photos from the API', async(inject([FlickrApiService, HttpTestingController],
	    (service: FlickrApiService, backend: HttpTestingController) => {
	      
	    	// service.getAll().subscribe();

	      	// @todo 

		})
	));



	it('should Get Photos by Search terms from the API', async(inject([FlickrApiService, HttpTestingController],
	    (service: FlickrApiService, backend: HttpTestingController) => {
	      
	    	// service.getAll('sports music planets').subscribe();

	      	// @todo 

		})
	));



	it('@todo should Get favourites and saved photos from the API', async(inject([FlickrApiService, HttpTestingController],
	    (service: FlickrApiService, backend: HttpTestingController) => {
	      
	    	// service.getFavourites().subscribe();

	      	// @todo 

		})
	));
	  

	it('@todo should save favourite/saved photo to the API', async(inject([FlickrApiService, HttpTestingController],
	    (service: FlickrApiService, backend: HttpTestingController) => {
	      
	    	// service.postFavourite().subscribe();

	      	// @todo 

		})
	));

});
