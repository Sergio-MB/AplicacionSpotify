import { Component } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service"
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {


  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  errorMsg: boolean;

  constructor(private _spotifyService: SpotifyService) {

    this.loading = true;
    this.error = false;

    this._spotifyService.getNewReleases()
      .subscribe(data => {   // caso exito
        this.nuevasCanciones = data;
        this.loading = false;
      }, (err) => {      // caso error
        this.error = true;
        this.loading = false;
        this.errorMsg = err.error.error.message;
      });

  }


}
