import { Component } from '@angular/core';
import { ContentComponent } from '../../components/content/content.component';
import { ViewTwoData } from './viewTwo.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-view-two',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './view-two.component.html',
  styleUrl: './view-two.component.css'
})
export class ViewTwoComponent {

  //Llamo al servicio que he creado
  public constructor(public service: DataService) { }

  //Declaro las variables con la información que necesito
  public data: ViewTwoData = {
    images: ['https://www.nosolorol.com/img/nbp/1/7/9/5/1795-large.jpg', 'https://i.blogs.es/8c50c2/rick-morty/840_560.jpeg'],
    title: 'Rick and Morty'
  }

  //datos que pasa content a la vista2
  public images: string[] = [];
  public classContainer: string = 'image-container2';
  public title: string = '';

  //url de la API
  public urlApi: string = 'https://rickandmortyapi.com/api/character/?name=';
  //variable booleana para modificar la vista
  public test: boolean = true;
  //array para meter la información que necesito de los personajes
  public characters: ViewTwoData[] = [];

  //Función que se conecta con la API para obtener los personajes
  public getCharacters(url: string): void {
    this.service.getApiResponse(url).subscribe(response => {
      response.results.map((element => {
        this.characters.push({ images: [element.image], title: element.name })
      })
      );
      //para que muestre todas las páginas
      if(response.info.next !==null){
        this.getCharacters(response.info.next);
      }
    });
  }

  // función que recibe del componente hijo los datos que hay que modificar en la vista
  public onClick(data: { images: string[], title: string, class: string, index: number }): void {
    //vacío el array de personajes
    this.characters=[];
    if(data.index==0){
      this.getCharacters(this.urlApi + 'rick');
    }else if(data.index==1){
      this.getCharacters(this.urlApi + 'morty');
    }
    this.test = (this.test) ? false : true;
    this.classContainer = data.class;
  }
}
