import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-climatiseurs',
  templateUrl: './climatiseurs.component.html',
  styleUrls: ['./climatiseurs.component.scss']
})
export class ClimatiseursComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor() { }

  ngOnInit() {
    
    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];

  this.galleryImages = [
      {
          small: 'assets/img/flower.jpg',
          medium: 'assets/img/flower.jpg',
          big: 'assets/img/flower.jpg'
      },
      {
          small: 'assets/img/maddocks.png',
          medium: 'assets/img/maddocks.png',
          big: 'assets/img/maddocks.png'
      },
      {
          small: 'assets/img/sky is the limit.jpg',
          medium: 'assets/img/sky is the limit.jpg',
          big: 'assets/img/sky is the limit.jpg'
      }
  ];
  }

}
