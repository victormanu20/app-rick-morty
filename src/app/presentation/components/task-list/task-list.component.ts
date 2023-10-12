import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {  selectCharacter } from 'src/app/core/states/app.actions';
import { Character, ResponseHttpCharacters } from 'src/app/domain/models/character.model';
import { ModalService } from 'src/app/domain/services/modal.service';
import { TaskService } from 'src/app/domain/services/task.service';
import { TaskViewModel } from 'src/app/domain/view-models/task.viewmodel';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  public characters: Character[] = [];
  public selectedCharacter: Character | null = null;
  public modalOpen: boolean = false;

  constructor(private taskService: TaskService, private store: Store,private modalService: ModalService) {
    modalService.modalOpen$.subscribe((open) => (this.modalOpen = open));
  }

  ngOnInit() {

    this.taskService.getCharacters().subscribe((characters:Character[]) => {
      this.characters = characters
    });
  }

  onCharacterSelected(character:Character ) {
    this.store.dispatch(selectCharacter(  character  )); // Despacha la acción al seleccionar un personaje
    this.selectedCharacter = character; // Actualiza el personaje seleccionado localmente
  }

  openCharacterDetails(character: any) {
    // Abre el modal y pasa el personaje al componente del modal
    this.modalService.openModal();
    // También puedes almacenar el personaje en una propiedad para pasarlo al modal
    // this.selectedCharacter = character;
  }

}
