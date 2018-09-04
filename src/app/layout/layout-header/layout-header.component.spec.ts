import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';

/**
*
* Routes
*
**/
import { AppRoutingModule }     from '../../app-routing.module';

/**
*
* Components
*
**/
import { LayoutHeaderComponent } from './layout-header.component';
import { FlickrListComponent } from '../../components/container/flickr-list/flickr-list.component';
import { FlickrSearchComponent } from '../../components/container/flickr-search/flickr-search.component';
import { FlickrFavouritesComponent } from '../../components/container/flickr-favourites/flickr-favourites.component';
import { FlickrDetailsComponent } from '../../components/container/flickr-details/flickr-details.component';
import { FlickrTileComponent } from '../../components/container/flickr-list/flickr-tile/flickr-tile.component';

describe('LayoutHeaderComponent', () => {
    let component: LayoutHeaderComponent;
    let fixture: ComponentFixture<LayoutHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ 
                LayoutHeaderComponent,
                FlickrListComponent,
                FlickrSearchComponent,
                FlickrFavouritesComponent,
                FlickrDetailsComponent,
                FlickrTileComponent
            ],
            imports: [
                AppRoutingModule
            ],
            providers: [
                {provide: APP_BASE_HREF, useValue : '/' },
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
