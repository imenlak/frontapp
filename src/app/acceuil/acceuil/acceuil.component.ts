import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
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
          small: 'assets/daisy.jpg',
          medium: 'assets/daisy.jpg',
          big: 'assets/Cosmos.jpg'
      },
      {
          small: 'assets/Orange.jpg',
          medium: 'assets/Orange.jpg',
          big: 'assets/Orange.jpg'
      },
      {
          small: 'assets/images.jpg',
          medium: 'assets/images.jpg',
          big: 'assets/images.jpg'
      },
    
      {
        small: 'assets/Cosmos.jpg',
        medium: 'assets/Cosmos.jpg',
        big: 'assets/Cosmos.jpg'
    }
    

  ];

  }
  

}
