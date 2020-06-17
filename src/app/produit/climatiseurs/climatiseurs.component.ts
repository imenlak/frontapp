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

  ngOnInit(): void {

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
            small: 'assets/images.jpg',
            medium: 'assets/images.jpg',
            big: 'assets/images.jpg'
        },
        {
            small: 'assets/unnamed.jpg',
            medium: 'assets/unnamed.jpg',
            big: 'assets/unnamed.jpg'
        }
    ];
}

}
