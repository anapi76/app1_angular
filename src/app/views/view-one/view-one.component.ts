import { Component } from '@angular/core';
import { ContentComponent } from '../../components/content/content.component';
import { ViewOneData } from './viewOne.interface';


@Component({
  selector: 'app-view-one',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './view-one.component.html',
  styleUrl: './view-one.component.css'
})
export class ViewOneComponent {

  //Declaro las variables con todos los datos
  public data: ViewOneData[] = [{
    images: ['https://i.blogs.es/2cc78a/ordenstarwars/840_560.jpg', 'https://www.lavanguardia.com/files/image_948_465/uploads/2020/05/04/5fa922920d3b5.png'],
    title: 'Grupo Uno'
  }, {
    images: ['https://lumiere-a.akamaihd.net/v1/images/starwars_e58d682b.png',
      'https://i.blogs.es/1da08b/1366_2000-9-/840_560.jpeg'],
    title: 'Grupo Dos'
  }]

  //Declaro las variables que pasaré al componente content con @Input()
  public images: string[] = this.data[0].images;
  public title: string = this.data[0].title;
  public classContainer: string = 'image-container2';
  public test: boolean = true;

  //datos que vienen del componente content con @output
  public onClick(data: { images: string[], title: string, class: string,index:number }): void {
    this.test = (this.test) ? false : true;
    this.images = data.images;
    this.title = data.title;
    this.classContainer = data.class;
  }
}
