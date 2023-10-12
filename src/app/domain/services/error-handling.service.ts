import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { ErrorHttpProps } from '../models/handle-error.model';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor(public notificationService: NotificationService) { }
  public handleError(objNotification:ErrorHttpProps): void {
    this.notificationService.showNotificationSimple(objNotification)

  }
}
