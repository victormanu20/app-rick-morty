import { ResponseHttpCharacters } from 'src/app/domain/models/character.model';
import { urlManager } from 'src/app/shared/commons/url-manager';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpsService {

  private apiUrl = new urlManager();

  constructor(private http: HttpClient) {}

  getRickAndMortyCharacters(): Observable<ResponseHttpCharacters> {
    return this.http.get<ResponseHttpCharacters>(this.apiUrl.apiRickAndMorty);
  }

}
