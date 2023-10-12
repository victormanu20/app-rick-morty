import { Character, ResponseHttpCharacters } from "./character.model";

export interface AppState {
  selectedCharacter: Character | null;
}
