import { Component } from '@angular/core';
import { ModalService } from 'src/app/domain/services/modal.service';

@Component({
  selector: 'app-character-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.scss']
})
export class CharacterModalComponent {
  constructor(private modalService: ModalService) {}

  closeModal() {
    this.modalService.closeModal();
  }
}
