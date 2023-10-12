import { Component, Input } from '@angular/core';
import { Character } from 'src/app/domain/models/character.model';
import { CharacterClass } from 'src/app/domain/view-models/task.viewmodel';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent {
  @Input() character: Character= new CharacterClass() ;

  constructor(){
  }

}
