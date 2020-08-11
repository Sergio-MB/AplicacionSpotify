import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {


  artista: any = {};
  topTracks: any = {};
  loadingArtista: boolean;
  loadingTopTracks: boolean;


  constructor(private route: ActivatedRoute,
    private _spotifyService: SpotifyService) {

    this.route.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist = (id: string) => {
    this.loadingArtista = true;
    this._spotifyService.getArtist(id)
      .subscribe(artista => {
        this.artista = artista;
        this.loadingArtista = false;
      });
  }

  getTopTracks = (id: string) => {
    this._spotifyService.getTopTracks(id)
      .subscribe(topTracks => {
        this.topTracks = topTracks;
      });
  }


}
