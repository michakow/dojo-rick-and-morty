import { Episode } from "./episode";
import { Info } from "./info";
import { Result } from "./result";

export interface ApiGeneralResponse {
  info: Info;
  results: Result[];
}

export interface EpisodesResponse {
  episodes: Episode[];
}
