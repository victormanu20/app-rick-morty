import { Character } from "../models/character.model";

export class CharacterClass implements Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;

  constructor(characterData: Partial<Character> = {}) {
    // Inicializa las propiedades de la clase con los valores proporcionados o valores por defecto
    this.id = characterData.id || 0;
    this.name = characterData.name || '';
    this.status = characterData.status || '';
    this.species = characterData.species || '';
    this.type = characterData.type || '';
    this.gender = characterData.gender || '';
    this.origin = characterData.origin || { name: '', url: '' };
    this.location = characterData.location || { name: '', url: '' };
    this.image = characterData.image || '';
    this.episode = characterData.episode || [];
    this.url = characterData.url || '';
    this.created = characterData.created || '';
  }
}
