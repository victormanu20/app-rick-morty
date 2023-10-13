import { CharacterService } from 'src/app/domain/services/character.service';
import {  selectCharacterAction } from 'src/app/core/states/app.actions';
import { ModalService } from 'src/app/domain/services/modal.service';
import { Character } from 'src/app/domain/models/character.model';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  public characters: Character[] = [];
  public selectedCharacter: Character | null = null;
  public modalOpen: boolean = false;

  constructor(private taskService: CharacterService, private store: Store,private modalService: ModalService) {
    modalService.modalOpen$.subscribe((open:boolean) => (this.modalOpen = open));
  }

  ngOnInit() {
    this.taskService.getCharacters().subscribe((characters:Character[]) => {
      this.characters = characters
    });
  }

  onCharacterSelected(character:Character ): void{
    this.selectedCharacter = character;
  }

  openCharacterDetails(character: Character ): void {
    this.store.dispatch(selectCharacterAction({character}));
    this.modalService.openModal();
  }

}
