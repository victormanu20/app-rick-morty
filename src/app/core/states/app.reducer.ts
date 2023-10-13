import { AppState } from 'src/app/domain/models/app.state.model';
import {selectCharacterAction}  from './app.actions';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { CharacterClass } from 'src/app/domain/view-models/task.viewmodel';

const initialState: AppState = {
  selectedCharacter: new CharacterClass()
};

const _characterReducer = createReducer(
  initialState,
  on(selectCharacterAction, (state, { character }) => ({...state, selectedCharacter: character,})),

);

export const selectCharacterState = createFeatureSelector<AppState>('selectedCharacter');

export function characterReducer(state:any, action:any) {
  return _characterReducer(state, action);
};

export const selectSelectedCharacter = createSelector(
  selectCharacterState,
  ({selectedCharacter}) => selectedCharacter
);
