import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FlickrPhoto } from '../../../models/FlickrPhotoModel';
import { FlickrApiService } from '../../../services/flickr-api/flickr-api.service';
import { PhotoCache } from '../../../models/factories/PhotoCache';


@Component({
	selector: 'flickr-list',
	templateUrl: './flickr-list.component.html',
	styleUrls: ['./flickr-list.component.css']
})
export class FlickrListComponent implements OnInit {

	/**
	*
	* Layout 
	*
	**/
	layout = {
		title: 'Flickr Feed',
		imgSrc: '/assets/img/flickr.png',
		crumbs: [
			{  
				path: '/',
				title: 'Dashboard'
			}
		]
	}

	/**
	*
	* States 
	*
	**/
	isLoading = true; 

	/**
	*
	* Models 
	*
	**/
	photos: FlickrPhoto[];

	constructor(private route: ActivatedRoute, private flickrApi: FlickrApiService, private photoCache: PhotoCache) { 
	}

	ngOnInit() {

		this.getAllPhotos();

	}

	/**
	*
	* Get All Photos
	* Grab all the photos from our backend and display them as tiles  
	*
	**/
	getAllPhotos(){

		this.isLoading = true; 

		let getAllPhotos = this.flickrApi.getAll();

		getAllPhotos.subscribe(
			photos => this.getAllSuccess(photos),
			err  => this.getAllError(err)
		)
	}

	/**
	*
	* Get All Photos Success
	* Once we have all the photos, display them as tiles and hide the loading message 
	* Cache the photos locally for quick viewing from the details view 
	**/
	getAllSuccess(photos: FlickrPhoto[]){

		this.isLoading = false;
		this.photos = photos;
		
		// -- cache the photos for details view 
		this.photoCache.saveAll(this.photos);
	}

	/**
	*
	* Get All Photos Failed
	* @todo If loading the photos failed, we want to alert the user and give them an option so self solve or escalate by contacting us 
	*
	**/
	private getAllError(error: HttpErrorResponse | any){

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
