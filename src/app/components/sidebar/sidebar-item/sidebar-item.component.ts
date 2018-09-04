import { Component, OnInit, Input } from '@angular/core';


import {SidebarItem} from '../../../models/SidebarItemModel';

@Component({
	selector: 'app-sidebar-item',
	templateUrl: './sidebar-item.component.html',
	styleUrls: ['./sidebar-item.component.css']
})
export class SidebarItemComponent implements OnInit {
	
	@Input() sidebarItem:SidebarItem; 

	constructor() { }

	ngOnInit() {
	}

}
