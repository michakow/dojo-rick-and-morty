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
  seasons: Season[] = [];
  episodes: Episode[] = [];
  characters: Character[] = [];
  showEpisodesLoader: boolean = false;

  constructor(private fetchApiService: FetchApiService) {}

  ngOnInit(): void {
    this.fetchApiService.getSeasons().subscribe(res => {
      this.seasons = res
    });
  }

  showEpisodes(season: number) {
    this.episodes = [];
    this.showEpisodesLoader = true;
    this.fetchApiService.getEpisodes(season).subscribe((res) => {
      this.episodes = res.episodes;
      this.showEpisodesLoader = false;
    });
  }
}
