import { Component, OnInit, Input } from '@angular/core';

import { FlickrPhoto } from '../../../../models/FlickrPhotoModel';
import { FavouritesFactory } from '../../../../models/factories/FavouritesFactory';

@Component({
  selector: 'flickr-tile',
  templateUrl: './flickr-tile.component.html',
  styleUrls: ['./flickr-tile.component.css']
})
export class FlickrTileComponent implements OnInit {

	@Input() photo: FlickrPhoto;

	constructor(private favouritesFactory: FavouritesFactory) { }

	ngOnInit() {
	}

	/**
	*
	* Toggle Favourite
	* This toggles whether the photo should be saved or not
	* We send this back to the API to save this agaisnt our account for the future
	* @todo this should be saved to the model by the server 
	*
	**/
	toggleFavourite(){

		this.photo.isFavourite = !this.photo.isFavourite;

		if(this.photo.isFavourite){
			this.favouritesFactory.save(this.photo);
			console.log('this.favouritesFactory.photos', this.favouritesFactory.photos);
		}
		else{
			this.favouritesFactory.remove(this.photo);	
			console.log('this.favouritesFactory.photos', this.favouritesFactory.photos);
		}
	}

}
