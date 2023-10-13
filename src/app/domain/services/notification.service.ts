import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

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
