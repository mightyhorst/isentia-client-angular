import { Component, OnInit } from '@angular/core';

import {SidebarItem} from '../../models/SidebarItemModel';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: [
		'./sidebar.component.css',
		'./sidebar.component.responsive.css'
	]
})
export class SidebarComponent implements OnInit {

	sidebarItems: SidebarItem[] = [
		{
			title: 'All Flikr Photos',
			imgSrc: '/assets/img/stag_lines_w.png',
			path: '/photo',
			icon: 'fa fa-chevron-right', 
			isSelected: true
		},
		{
			title: 'Search by Tags',
			imgSrc: '/assets/img/dragon_lines_w.png',
			path: '/photo/search',
			icon: 'fa fa-chevron-right'
		},
		{
			title: 'Favourites', 
			imgSrc: '/assets/img/flower_lines_w.png',
			path: '/photo/favourites',
			icon: 'fa fa-chevron-right'
		}
	];

	constructor() { 
		
	}

	ngOnInit() {
		
	}

}
