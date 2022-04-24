import { Episode } from "./episode";

export interface Season {
  numberOfEpisodes: number;
  episodes: Episode[];
}
