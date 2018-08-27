import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryService } from './../../services/gallery/gallery.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  photos = [];

  queryParams = {
    limit: 5,
    offset: 0,
  }

  constructor(private galleryService: GalleryService, private router: Router) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.galleryService.getPhotos(this.queryParams)
      .subscribe(
        (result) => {
          this.photos = result
        },
        (error) => console.log(error),
        () => console.log('fin')
      );
  }

  onClickLeft() {
    this.queryParams.offset = this.queryParams.offset - 5;
    this.getPhotos();
  }
  onClickRight() {
    this.queryParams.offset = this.queryParams.offset + 5;
    this.getPhotos();
  }
  onClickPhoto(photo) {
    this.router.navigate([`/gallery-detail/${photo.id}`]);
  }
}
