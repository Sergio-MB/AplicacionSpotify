import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service listo!')
  }

  getQuery = (query: string) => {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer QAtwphRdawYNA2At0twYLQmLEb0j_rm_nfWw95koOp1aXLxIZpX5lbafVkScfuIWX0YHu2f_QTEpUR07pUm_Fs7hvgy1ZjiEnJIxufIMcNvk1wThyDULcnBI2NCt5SdgyzV1x5leZV4'
    });

    return this.http.get(url, { headers });
  }
  getNewReleases = () => this.getQuery('browse/new-releases')
    .pipe(map(data => data['albums'].items));


  getArtists = (termino: string) => this.getQuery(`search?query=${termino}+s&type=artist&offset=0&limit=20`)
    .pipe(map(data => data['artists'].items));

  getArtist = (id: string) => this.getQuery(`artists/${id}`);

  getTopTracks = (id: string) => this.getQuery(`artists/${id}/top-tracks?country=es`)
    .pipe(map(data => data['tracks']));


}
