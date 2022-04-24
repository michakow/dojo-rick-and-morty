import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './interfaces/character';
import { EpisodesResponse } from './interfaces/api-general-response';
import { Season } from './interfaces/season';

@Injectable({
  providedIn: 'root',
})
export class FetchApiService {
  constructor(private http: HttpClient) {}

  getSeasons(){
    return this.http.get<Season[]>('https://rickandmorty864.herokuapp.com/season/');
  }

  getEpisodes(season: number) {
    return this.http.get<EpisodesResponse>(`https://rickandmorty864.herokuapp.com/season/${season}`);
  }

  getCharacters(characters: string) {
    return this.http.get<Character[]>(`https://rickandmortyapi.com/api/character/${characters}`);
  }
}
