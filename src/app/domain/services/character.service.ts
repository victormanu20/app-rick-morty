import { Character, ResponseHttpCharacters } from '../models/character.model';
import { HttpsService } from 'src/app/core/api/https.service';
import { CharacterClass } from '../view-models/task.viewmodel';
import { NotificationService } from './notification.service';
import { SuccessHttp } from '../models/handle-error.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  public characters: Character [] = [ new CharacterClass()]  ;
  constructor(private apiService: HttpsService, private NotificationService:NotificationService) {}

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
