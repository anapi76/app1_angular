import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgClass],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  //datos que content coge de vista1 y de la vista2
  @Input() images: string[] = [];
  @Input() title: string = 'Grupo Uno';
  @Input() classContainer: string = 'image-container2';

  //Datos que content le pasa a la vista1 para que los modifique al hacer click
  @Output() data = new EventEmitter<{ images: string[], title: string, class: string, index: number }>();
  public onClick(photo: string, index: number): void {
    this.classContainer = (this.classContainer === 'image-container2') ? 'image-container' : 'image-container2';
    this.data.emit({ images: [photo], title: this.title, class: this.classContainer, index: index });
  }

  


}