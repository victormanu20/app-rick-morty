// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { mergeMap, map } from 'rxjs/operators';
// import { charactersLoaded, loadCharacters } from './app.actions';
// import { HttpsService } from '../api/https.service';
// import { ResponseHttpCharacters } from 'src/app/domain/models/character.model';
// import { TaskService } from 'src/app/domain/services/task.service';

// @Injectable()
// export class RickAndMortyEffects {
//   loadCharacters$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(loadCharacters),
//       mergeMap(() =>
//         this.rickAndMortyService.getCharacters().pipe(
//           map((responseHttpCharacters:ResponseHttpCharacters) => charactersLoaded(responseHttpCharacters))
//         )
//       )
//     )
//   );

//   constructor(
//     private actions$: Actions,
//     private rickAndMortyService: TaskService
//   ) {}
// }
