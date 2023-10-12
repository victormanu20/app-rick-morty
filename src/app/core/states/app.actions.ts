import {  Character } from 'src/app/domain/models/character.model';
import { createAction } from '@ngrx/store';

export const selectCharacter = createAction('[RickAndMorty] Select Character', (character: Character) => ({ character }));
