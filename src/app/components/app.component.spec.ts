import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

/**
*
* Core 
*
**/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

/**
*
* Routes
*
**/
import { AppRoutingModule }     from '../app-routing.module';


/**
*
* Components
* 
**/
import { AppComponent } from './app.component';
import { LayoutHeaderComponent } from '../layout/layout-header/layout-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { ContainerComponent } from './container/container.component';
import { FlickrListComponent } from './container/flickr-list/flickr-list.component';
import { FlickrTileComponent } from './container/flickr-list/flickr-tile/flickr-tile.component';
import { FlickrDetailsComponent } from './container/flickr-details/flickr-details.component';
import { FlickrSearchComponent } from './container/flickr-search/flickr-search.component';
import { FlickrFavouritesComponent } from './container/flickr-favourites/flickr-favourites.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ConfirmEmailComponent } from './auth/confirm-email/confirm-email.component';
import { ProfileComponent } from './auth/profile/profile.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                SidebarComponent,
                SidebarItemComponent,
                ContainerComponent,
                FlickrListComponent,
                FlickrTileComponent,
                FlickrDetailsComponent,
                FlickrSearchComponent,
                FlickrFavouritesComponent,
                LayoutHeaderComponent,
            ],
            imports: [
                BrowserModule,
                FormsModule, 
                AppRoutingModule,
                HttpClientModule
            ],
            providers: [
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    }));

    it(`should have as title 'Flickr Sample App'`, async(() => {
        
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Flickr Sample App');

    }));

    it('should have  Flickr App ', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain(' Flickr App ');
    }));

    it('should have a sidebar ', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;
        var lookForEl = compiled.querySelector('app-sidebar');

        expect(lookForEl).toBeTruthy();
    });


    it('should have a container ', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;
        var lookForEl = compiled.querySelector('app-container');

        expect(lookForEl).toBeTruthy();
    });
});
