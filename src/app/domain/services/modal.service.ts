import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalOpen = new BehaviorSubject<boolean>(false);
  modalOpen$ = this.modalOpen.asObservable();

  openModal():void{
    this.modalOpen.next(true);
  }

  closeModal():void{
    this.modalOpen.next(false);
  }

}
