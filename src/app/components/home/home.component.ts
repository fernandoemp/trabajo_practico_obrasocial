import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  imagenesHome = [
    { urlImagen: '/assets/images/home/carousel/slider1.png' },
    { urlImagen: '/assets/images/home/carousel/slider2.jpg' },
    { urlImagen: '/assets/images/home/carousel/slider3.jpg' },
    { urlImagen: '/assets/images/home/carousel/slider4.jpg' },
    { urlImagen: '/assets/images/home/carousel/slider5.jpg' },
    { urlImagen: '/assets/images/home/carousel/slider6.jpg' }
  ];


  ngOnInit(): void {
  }
  constructor() {

  }
}




