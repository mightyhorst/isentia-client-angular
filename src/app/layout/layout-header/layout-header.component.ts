import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'layout-header',
	templateUrl: './layout-header.component.html',
	styleUrls: ['./layout-header.component.css']
})
export class LayoutHeaderComponent implements OnInit {

	@Input() title: string = 'Welcome';
	@Input() imgSrc: string = '/assets/img/flickr.png'; 
	@Input() crumbs = [
		{path:'/', title: 'Dashboard'}
	];

  	constructor() { }

  	ngOnInit() {
  	}

}
