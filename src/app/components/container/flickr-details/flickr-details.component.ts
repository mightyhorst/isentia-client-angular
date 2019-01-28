import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { FlickrApiService } from '@services/flickr-api/flickr-api.service';
import { PhotoCache } from '@models/factories/PhotoCache';
import { FlickrPhoto } from '@models/FlickrPhotoModel';


/**
*
* Flickr Details Compnent 
* This is used to display all the information about a single flickr photo 
*
* @todo DRY! Layout could be DI 
*
**/
@Component({
  selector: 'app-flickr-details',
  templateUrl: './flickr-details.component.html',
  styleUrls: ['./flickr-details.component.css']
})
export class FlickrDetailsComponent implements OnInit {

	/**
	*
	* Layout 
	*
	**/
	layout = {
		title: 'Loading...',
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
	isLoading = true; 

	/**
	*
	* Models 
	*
	**/
	@Input() photo: FlickrPhoto; 
	photoId: string; 

	constructor(private route: ActivatedRoute, private photoCache: PhotoCache) { 
	}

	ngOnInit(){
		this.getPhoto();
	}

	/**
	*
	* Get Photo Model
	* Grab from the cache first, then from the API if not found
	* @todo the factory should take care of the cache/api refresh strategy , decoupling the component 
	*
	*
	**/
	getPhoto(){
		this.photoId = this.route.snapshot.paramMap.get('photoId');
		this.photo = this.photoCache.getById(this.photoId);
		this.layout.title = this.photo.title;
		this.isLoading = false;

		// @todo temp hack to get it to show while I fix the styles 
		this.photo.isFavourite = true; 
	}

}
