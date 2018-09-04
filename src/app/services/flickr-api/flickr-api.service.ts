import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';


import { environment } from '../../../environments/environment';
import { IFlickrApiContract } from '../../models/contracts/IFlickrApiContract';
import { IFlickrApiItemContract } from '../../models/contracts/IFlickrApiItemContract';
import { FlickrPhoto } from '../../models/FlickrPhotoModel';


@Injectable()
export class FlickrApiService {

	private apiUrl : string = environment.apiUrl;
    private headers : HttpHeaders;
    private queryParams : any;

	constructor(private http: HttpClient) { 
		if (isDevMode()) {
	      	console.log('👋 Development!');
	    } else {
	      	console.log('💪 Production!');
	    }
	    console.log('😀 apiUrl: '+this.apiUrl);


	    this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',                
        });
	}

	/**
	*
	* Get All Photos   
	* represents a photo's meta data used by the Flickr List and Details components 
	* it is created by passing a IFlickrApiItem from the flickr api
	* I do this so that each response has an interface that can be tarnsformed into a model even if the mappings aren't one to one
	*
	* Optional Search terms - If tags are sent, then we will search photos by tags to filter the search critreria by to our backend, which in turn will query the flickr public api 
	*
	* @todo pipes make this more or less redundant, so in the future I will have response models that can self validate using json schema library
	*
	* params {} searchTerms? optional - tags to narrow the search 
	* returns {Observable<FlickrPhoto[]>} an observable with an array of FlickrPhotos
	**/
	getAll(searchTerms?: string): Observable<FlickrPhoto[]>{

		var url = this.apiUrl+'photos';

		if(searchTerms !== undefined){
			url += '?tags='+searchTerms.split(/[ ,]+/).join(',');
		}

		return this.http.get<IFlickrApiContract>(            
				url, 
            	{  
                	headers : this.headers
            	}
			).pipe(
				map(res => {
					
					let flickrFeed = res.flickrFeed.items.map(item => {

						var contract:IFlickrApiItemContract = item;
						// @todo - check if contract is valid using json schema 
						var model:FlickrPhoto = new FlickrPhoto(contract);
						return model;

					});
					return flickrFeed;
				})
			)
	}



	

}
