import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { LoginComponent } from './views/login/login.component';
import { GalleryDetailComponent } from './views/gallery-detail/gallery-detail.component';


import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { UserComponent } from './views/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    LoginComponent,
    PhotoGalleryComponent,
    GalleryDetailComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
