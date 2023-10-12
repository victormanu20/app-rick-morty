import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { ErrorHttpProps } from '../models/handle-error.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  showNotificationSimple({icon,title, text}:any){
    Swal.fire({
      icon,
      title,
      text,
    });
  }
}
