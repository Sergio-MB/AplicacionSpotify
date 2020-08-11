import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor(private _spotifyService: SpotifyService) { }

  buscar = (termino: string) => {
    this.loading = true;
    this._spotifyService.getArtists(termino).subscribe((data:any) => {
      this.artistas = data;
      console.log('this.artistas: ', this.artistas)
      this.loading = false;
    });
  }
}
