import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  imagenesGaleria = [
    { urlImagen: '/assets/images/galeria/slider7.png' },
    { urlImagen: '/assets/images/galeria/slider8.png' },
    { urlImagen: '/assets/images/galeria/slider9.png' },
    { urlImagen: '/assets/images/galeria/slider10.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
