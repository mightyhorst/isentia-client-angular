import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { FlickrApiService } from '../../../services/flickr-api/flickr-api.service';

import { FlickrPhoto } from '../../../models/FlickrPhotoModel';
import { PhotoHashTable, FavouritesFactory } from '../../../models/factories/FavouritesFactory';

/**
* 
* Favourites component 
* Save local favourites for quick viewing and inspiration!
* @todo splice removed favourites when 'unsaved' 
* @bug tile not removed when 'unsaved'
**/
@Component({
  selector: 'app-flickr-favourites',
  templateUrl: './flickr-favourites.component.html',
  styleUrls: ['./flickr-favourites.component.css']
})
export class FlickrFavouritesComponent implements OnInit {

	/**
	*
	* Layout 
	*
	**/
	layout = {
		title: 'Favourites',
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
	photos: FlickrPhoto[] = [];

	constructor(private route: ActivatedRoute, private flickrApi: FlickrApiService, private favouritesFactory: FavouritesFactory) { 
	}

	ngOnInit() {

		this.photos = this.favouritesFactory.getAll();
		
		/*for (var id in photoTable) {
			this.photos.push(photoTable[id]);
		}*/

	}


}
