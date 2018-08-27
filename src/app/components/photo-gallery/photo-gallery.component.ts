import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {

  @Input() photos: any;
  @Output() clickLeft: EventEmitter<any> = new EventEmitter();
  @Output() clickRight: EventEmitter<any> = new EventEmitter();
  @Output() clickPhoto: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  onClickLeft() {
    this.clickLeft.emit();
  }
  onClickRight() {
    this.clickRight.emit();
  }
  onClickPhoto(photo) {
    this.clickPhoto.emit(photo);
  }

}

