import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlickrListComponent } from './components/container/flickr-list/flickr-list.component';
import { FlickrDetailsComponent } from './components/container/flickr-details/flickr-details.component';
import { FlickrSearchComponent } from './components/container/flickr-search/flickr-search.component';
import { FlickrFavouritesComponent } from './components/container/flickr-favourites/flickr-favourites.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'photo', 
		pathMatch: 'full'
	},
	{
		path: 'photo',
		component: FlickrListComponent
	},
	{
		path: 'photo/search',
		component: FlickrSearchComponent
	},
	{
		path: 'photo/favourites',
		component: FlickrFavouritesComponent
	},
	{
		path: 'photo/:photoId',
		component: FlickrDetailsComponent
	},
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule {}