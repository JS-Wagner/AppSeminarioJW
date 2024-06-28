import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vinil-about',
  standalone: true,
  imports: [
    NgbModule,
  ],
  providers: [NgbCarouselConfig],
  templateUrl: './vinil-about.component.html',
  styleUrl: './vinil-about.component.scss'
})
export class VinilAboutComponent implements OnInit{
  counter = 0;
  slideWidth = 0;

  constructor(private renderer: Renderer2, config: NgbCarouselConfig) {
    //Valores para el carrousel 
    config.interval = 2000; //Imagen cambia en 2sec
    config.wrap = true; //Automaticamente redirecciona a la primer imagen
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  public images = [

    '../assets/carousel1.jpg',
   
    '../assets/qs-carrousel.png',
   
    '../assets/carousel3.jpg',
   
    ];
   
   title = [ '**','Nosotros','**'];
   

  ngOnInit(): void {
    this.checkDocument();
  }

  checkDocument(): void {
    if (typeof document !== 'undefined') {
      const slideElement = document.querySelector('.carousel-slide');
      this.slideWidth = slideElement?.clientWidth || 0;
    }
  }
  
  prevSlide(): void {
    if (this.counter <= 0) return;
    this.counter--;
    this.moveCarousel();
  }

  nextSlide(): void {
    if (this.counter >= 4 - 1) return;
    this.counter++;
    this.moveCarousel();
  }

  moveCarousel(): void {
    const carouselContainer = document.querySelector('.carousel-container') as HTMLElement;
    carouselContainer.style.transform = `translateX(-${this.counter * this.slideWidth}px)`;
  }
}
