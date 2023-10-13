import { NotificationService } from './notification.service';
import { ErrorHttpProps } from '../models/handle-error.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor(public notificationService: NotificationService) { }
  public handleError(objNotification:ErrorHttpProps): void {
    this.notificationService.showNotificationSimple(objNotification)
  }
}
