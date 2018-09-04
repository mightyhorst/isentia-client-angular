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
import { AppRoutingModule }     from './app-routing.module';

/**
*
* Components
* 
**/
import { AppComponent } from './components/app.component';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar/sidebar-item/sidebar-item.component';
import { ContainerComponent } from './components/container/container.component';
import { FlickrListComponent } from './components/container/flickr-list/flickr-list.component';
import { FlickrTileComponent } from './components/container/flickr-list/flickr-tile/flickr-tile.component';
import { FlickrDetailsComponent } from './components/container/flickr-details/flickr-details.component';
import { FlickrSearchComponent } from './components/container/flickr-search/flickr-search.component';
import { FlickrFavouritesComponent } from './components/container/flickr-favourites/flickr-favourites.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { ConfirmEmailComponent } from './components/auth/confirm-email/confirm-email.component';
import { ProfileComponent } from './components/auth/profile/profile.component';

/**
*
* Services
*
**/
import { FlickrApiService } from './services/flickr-api/flickr-api.service';


/**
*
* Factories
*
**/
import { FavouritesFactory } from './models/factories/FavouritesFactory';
import { PhotoCache } from './models/factories/PhotoCache';

@NgModule({
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

        /**
        *
        * TODO Authentication
        *
        **
        AuthComponent,
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        ConfirmEmailComponent,
        ProfileComponent
        **/
    ],
    imports: [
        BrowserModule,
        FormsModule, 
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        FlickrApiService,
        FavouritesFactory,
        PhotoCache
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
