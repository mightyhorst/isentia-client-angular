import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { FlickrListComponent } from './container/flickr-list/flickr-list.component';
import { FlickrDetailsComponent } from './container/flickr-details/flickr-details.component';
import { FlickrTileComponent } from './container/flickr-list/flickr-tile/flickr-tile.component';
import { FlickrSearchComponent } from './container/flickr-search/flickr-search.component';
import { FlickrFavouritesComponent } from './container/flickr-favourites/flickr-favourites.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ConfirmEmailComponent } from './auth/confirm-email/confirm-email.component';
import { ProfileComponent } from './auth/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContainerComponent,
    SidebarItemComponent,
    FlickrListComponent,
    FlickrDetailsComponent,
    FlickrTileComponent,
    FlickrSearchComponent,
    FlickrFavouritesComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ConfirmEmailComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
