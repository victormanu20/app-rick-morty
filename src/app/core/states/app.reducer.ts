import { AppState } from 'src/app/domain/models/app.state.model';
import * as RickAndMortyActions  from './app.actions';
import { createReducer, on } from '@ngrx/store';

const initialState: AppState = {
  selectedCharacter: null,
};

export const characterReducer = createReducer(
  initialState,
  on(RickAndMortyActions.selectCharacter, (state, { character }) => ({
    ...state,
    selectedCharacter: character,
  }))
);
