import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

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
          thumbnailsColumns: 2,
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
          small: 'assets/img/gallery/103261564_3559347044094562_3508325126177773659_o.jpg',
          medium: 'assets/img/gallery/103261564_3559347044094562_3508325126177773659_o.jpg',
          big: 'assets/img/gallery/103261564_3559347044094562_3508325126177773659_o.jpg'
        },
        {
          small: 'assets/img/gallery/103261564_3559347044094562_3508325126177773659_o.jpg',
          medium: 'assets/img/gallery/103261564_3559347044094562_3508325126177773659_o.jpg',
          big: 'assets/img/gallery/103261564_3559347044094562_3508325126177773659_o.jpg'
        }
      ];
   
  }
  

}
