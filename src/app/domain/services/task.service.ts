import { Injectable } from '@angular/core';
import { HttpsService } from 'src/app/core/api/https.service';
import { Character, ResponseHttpCharacters } from '../models/character.model';
import { CharacterClass } from '../view-models/task.viewmodel';
import { Observable } from 'rxjs';
import { NotificationService } from './notification.service';
import { SuccessHttp } from '../models/handle-error.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public characters: Character [] = [ new CharacterClass()]  ;
  constructor(private apiService: HttpsService, private NotificationService:NotificationService) {}

  getTasksFromApi() {
  }
  public getCharacters() :Observable<Character []> {
    // return this.apiService.getRickAndMortyCharacters();
    return new Observable((suscribe) => {
      this.apiService.getRickAndMortyCharacters().subscribe((characters:ResponseHttpCharacters) => {
        this.characters = characters.results;
        suscribe.next(this.characters);
        this.NotificationService.showNotificationSimple(new SuccessHttp())
      },
      () => {
        this.characters = []
        suscribe.next(this.characters);
      });
    })
  }
}
