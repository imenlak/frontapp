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
          small: 'assets/img/acceuil/1.jpg',
          medium: 'assets/img/acceuil/1.jpg',
          big: 'assets/img/acceuil/1.jpg'
      },
      {
          small: 'assets/img/acceuil/2.jpg',
          medium: 'assets/img/acceuil/2.jpg',
          big: 'assets/img/acceuil/2.jpg'
      },
      {
          small: 'assets/img/acceuil/3.jpg',
          medium: 'assets/img/acceuil/3.jpg',
          big: 'assets/img/acceuil/3.jpg'
      }
  ];

  }


}
