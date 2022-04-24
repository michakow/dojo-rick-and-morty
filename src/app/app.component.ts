import { Component, OnInit } from '@angular/core';
import { FetchApiService } from './fetch-api.service';
import { Character } from './interfaces/character';
import { Episode } from './interfaces/episode';
import { Season } from './interfaces/season';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  seasons: number[] = [];
  episodes: Episode[] = [];
  characters: Character[] = [];

  constructor(private fetchApiService: FetchApiService) {}

  ngOnInit(): void {
    this.fetchApiService.getSeasons().subscribe(res => {
      this.seasons = Object.values(res)
    });
  }

  showEpisodes(season: number) {
    this.fetchApiService.getEpisodes(season).subscribe((res) => {
      this.episodes = res.episodes
    });
  }
}
