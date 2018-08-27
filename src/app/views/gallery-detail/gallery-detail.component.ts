import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { GalleryService } from './../../services/gallery/gallery.service'

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss']
})
export class GalleryDetailComponent implements OnInit {

  photo = null;

  constructor(private activatedRoute: ActivatedRoute, private galleryService: GalleryService) {  }

  ngOnInit() {
    this.bindEvents()
  }
  bindEvents() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let photoId = params['id'];
      this.getPhotoById(photoId);
    });
  }
  getPhotoById(photoId) {
    let queryParams = { id: photoId };
    this.galleryService.getPhotoById(queryParams)
      .subscribe(
        (result) => {
          this.photo = result[0];
          console.log(this.photo)
        },
        (error) => console.log(error),
        () => console.log('fin')
      );
  }


}
