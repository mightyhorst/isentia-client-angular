import { Injectable, isDevMode } from '@angular/core';
import { environment } from '../../../environments/environment';

import { FlickrPhoto } from '../FlickrPhotoModel';
import { FlickrApiService } from '../../services/flickr-api/flickr-api.service';

/**
*
* Favourites Factory 
* This is used as a facade to get and store all favourites app wide 
* It can also be used to sync with the API 
* and in the future @todo cache to local storage or cookies 

* @todo cache locally 
*
**/
export interface PhotoHashTable {
    [id: string]: FlickrPhoto;
}

@Injectable()
export class FavouritesFactory{
	
	photos: FlickrPhoto[] = [];

	constructor(private flickrApi: FlickrApiService){
		
	}


	/**
	*
	* Save 
	* Saves locally and syncs with API 
	* Acts as a global facade for sharing saved photos
	* @todo Cache locally and save to API 
	**/
	save(photo: FlickrPhoto){
		this.photos.push(photo);

		// this.flickrApi.saveFavourite(photo)
		
	}

	/**
	*
	* Remove 
	* Remove locally and syncs with API 
	* @todo Remove from Cache locally and destroy on API 
	**/
	remove(photo: FlickrPhoto){
		
		let removeIndex = this.photos.map(photoItem => {
			return photoItem.photo_id;
		}).indexOf(photo.photo_id);
		this.photos = this.photos.splice(removeIndex);

		// this.flickrApi.destroyFavourite(photo)
		
	}

	/**
	*
	* Get all cached favuorites  
	* and refresh from API  
	* @todo local cache and API integration 
	**/
	getAll(): FlickrPhoto[]{
		return this.photos;
	}

}