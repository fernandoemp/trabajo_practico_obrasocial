import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  imagenesGaleria = [
    { urlImagen: './../../../assets/images/home/carousel/slider6.png' },
    { urlImagen: './../../../assets/images/home/carousel/slider7.png' },
    { urlImagen: './../../../assets/images/home/carousel/slider8.png' },
    { urlImagen: './../../../assets/images/home/carousel/slider9.png' },
    { urlImagen: './../../../assets/images/home/carousel/slider10.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
