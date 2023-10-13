import {  Character } from 'src/app/domain/models/character.model';
import { createAction, props } from '@ngrx/store';

export const selectCharacterAction = createAction('[character] SelectCharacter', props<{character: Character}>());
