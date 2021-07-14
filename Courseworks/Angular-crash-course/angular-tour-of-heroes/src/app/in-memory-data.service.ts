import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Wacoma' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Joosua' },
      { id: 14, name: "Ki'mi" },
      { id: 15, name: 'Zuntah' },
      { id: 16, name: 'Glueman' },
      { id: 17, name: 'Kulemak' },
      { id: 18, name: 'The egg' },
      { id: 19, name: 'Lump of moat' },
      { id: 20, name: 'Maniel' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
