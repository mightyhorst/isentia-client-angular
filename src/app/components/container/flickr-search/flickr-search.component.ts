import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import {environment} from '../../../../environments/environment';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { FlickrApiService } from '../../../services/flickr-api/flickr-api.service';
import { PhotoCache } from '../../../models/factories/PhotoCache';
import { FlickrPhoto } from '../../../models/FlickrPhotoModel';

/**
*
* Flickr Search Component
* This component allows the user to search for tags seperated by spaces 
* This is repeating most of what the Flickr List page is doing thus it should be refactored so we dont repeat ourselves 
* @todo DRY! Refactor into the List page as a small search component, not an entire repeated component  
*
**/
@Component({
	selector: 'app-flickr-search',
	templateUrl: './flickr-search.component.html',
	styleUrls: ['./flickr-search.component.css']
})
export class FlickrSearchComponent implements OnInit {

	/**
	*
	* Layout 
	*
	**/
	layout = {
		title: 'Search by Tags',
		imgSrc: '/assets/img/flickr.png',
		crumbs: [
			{  
				path: '/',
				title: 'Dashboard'
			},
			{  
				path: '/photo',
				title: 'Flickr Feed'
			}
		]
	}

	/**
	*
	* States 
	*
	**/
	isLoading = false; 


	/**
	*
	* Models 
	*
	**/
	photos: FlickrPhoto[];

	/**
	* @todo to be used for observable streams 
	*
	photos$: Observable<FlickrPhoto[]>;
	*/

	/**
	*
	* Search Terms 
	* These are used to push search terms into an observable stream which will be looked up via the api after a predefined timeout   
	*
	**/
	private searchTimeout = environment.searchTimeout;

	/**
	* @todo to be used for observable streams 
	*
	private searchTags = new Subject<string>();
	*/


	constructor(private route: ActivatedRoute, private flickrApi: FlickrApiService, private photoCache: PhotoCache) { 
	}


	/**
	*
	* @todo Observable Stream 
	* On init we setup the search terms as an observable stream 
	* after waiting for a configurable interval, we'll ask the api for the search terms 
	* we'll also filter any duplicate search terms  
	* 
	**/
	ngOnInit() {

		/**
		* @todo to be used for observable streams 
		*
		this.photos$ = this.searchTags.pipe(

			// wait a predefined period before searching the api 
			debounceTime(this.searchTimeout),

			// ignore new term if same as previous term
			distinctUntilChanged(),

			// switch to new search observable each time the tags change
			switchMap((term: string) => {
				this.flickrApi.getAll(term)
			}),

		);
		*
		**/
	}

	delay = (() => {
		var timer = 0;
		return (callback, ms) => {
			clearTimeout (timer);
			timer = setTimeout(callback, ms);
		};
	})();


	search(tags: string): void {

		/**
		* @todo to be used for observable streams 
		*
		this.searchTags.next(tags);
		**/

		this.delay(() => {
		   
			this.searchPhotosByTags(tags);

		}, this.searchTimeout );
	}

	/**
	*
	* Search Photos by Tags
	* Grab all the photos from our backend that match the comma seperated list from the search box 
	*
	**/
	searchPhotosByTags(tags){

		this.isLoading = true; 

		let searchPhotos = this.flickrApi.getAll(tags);

		searchPhotos.subscribe(
			photos => this.searchPhotosSuccess(photos),
			err  => this.searchPhotosError(err)
		)
	}

	/**
	*
	* Search Photos Success
	* Once we have all the photos, display them as tiles and hide the loading message 
	* Cache the photos locally for quick viewing from the details view 
	* 
	**/
	searchPhotosSuccess(photos: FlickrPhoto[]){

		this.isLoading = false;
		this.photos = photos;
		
		// -- cache the photos for details view 
		this.photoCache.saveAll(this.photos);

	}

	/**
	*
	* Search Photos Failed
	* @todo If loading the photos failed, we want to alert the user and give them an option so self solve or escalate by contacting us 
	*
	**/
	private searchPhotosError(error: HttpErrorResponse | any){

		this.isLoading = false;

		let errMsg: string;
		if (error instanceof HttpErrorResponse) {                
			errMsg = `${error.status} - ${error.statusText || ''} - ${error.message}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.log(errMsg);

	}

}
