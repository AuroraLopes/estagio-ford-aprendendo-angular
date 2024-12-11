import { Component, Input } from '@angular/core';
import { Lugar } from 'src/core/models/carousel.model';

@Component({
  selector: 'app-carousel-main-component',
  templateUrl: './carousel-main-component.component.html',
  styleUrls: ['./carousel-main-component.component.css']
})
export class CarouselMainComponentComponent {
 title = 'Carousel';
 
 current = 0;

@Input()
myLugares : Lugar[] = [];

 lugares: Lugar[] = [
  {
    id: 1,
    name:'Nova York - EUA',
    img:'../../assets/images/Lugares/NovaYork.jpg'
  },
  {
    id: 2,
    name:'Deserto de Atacama - Chile',
    img:'../../assets/images/Lugares/DesertoAtacamaPeru.jpg'
  },
  {
    id: 3,
    name:'Huaraz - Peru',
    img:'../../assets/images/Lugares/huarazPeru.jpg'
  },
  {
    id: 4,
    name:'Uyuni - Bolivia',
    img:'../../assets/images/Lugares/UyuniBolivia.jpg'
  }

 ]


 goToNumber( number: number){
  this.current = number
  console.log(number)
 }
}
