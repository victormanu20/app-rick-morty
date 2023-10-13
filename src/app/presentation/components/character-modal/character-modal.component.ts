import { selectSelectedCharacter } from 'src/app/core/states/app.reducer';
import { CharacterClass } from 'src/app/domain/view-models/task.viewmodel';
import { ModalService } from 'src/app/domain/services/modal.service';
import { Character } from 'src/app/domain/models/character.model';
import { AppState } from 'src/app/domain/models/app.state.model';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-character-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.scss']
})
export class CharacterModalComponent {
  public character: Character  = new CharacterClass() ; // Variable para almacenar el personaje seleccionado

  constructor(private modalService: ModalService,  private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select(selectSelectedCharacter).subscribe((character) => {
      if(character){
        this.character = character;
      }
    });
  }

  closeModal():void{
    this.modalService.closeModal();
  }
}

