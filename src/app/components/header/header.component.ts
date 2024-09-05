import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderData } from './header.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  //creo las variables que voy a necesitar
  public image: string = 'url(https://static.eldiario.es/clip/0a1ee554-bcf7-4c32-9c2a-37e76297ef6f_16-9-discover-aspect-ratio_default_0.jpg)';
  public titleBanner: string = 'Vista 1';
  public classTitle: string = 'nav-link';
  public j: number = 0;

  public data: HeaderData[] = [{
    classTitle: ['nav-link logo', 'nav-link'],
    title: 'Vista 1',
    image: 'url(https://static.eldiario.es/clip/0a1ee554-bcf7-4c32-9c2a-37e76297ef6f_16-9-discover-aspect-ratio_default_0.jpg)',
    view: 'view-one'
  }, {
    classTitle: ['nav-link', 'nav-link logo'],
    title: 'Vista 2',
    image: 'url(https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/series-television/11-cosas-que-no-sabias-de-rick-y-morty/137666502-1-esl-ES/11-cosas-que-no-sabias-de-Rick-y-Morty.jpg?crop=1xw:0.5xh;center,top&resize=1200:*)',
    view: 'view-two'
  }
  ]
 
  //función que al clickar en las rutas, cambia la imagen de la vista y el formato del título
  public onClick(i: number): void {
    if (i == 0) {
      this.j = 0;
    } else {
      this.j = 1
    }
    this.titleBanner = this.data[i].title;
    this.image = this.data[i].image;
  }
 
}