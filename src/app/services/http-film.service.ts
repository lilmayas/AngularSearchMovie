import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpFilmService {

  private _apikey: string = '1b0a95d9';// hide
  private _url: string = 'http://www.omdbapi.com';

  constructor(private _client:HttpClient) {}

  public getMoive(title: string, year?: number): Observable<any> {
    var url = `${this._url}/?apikey=${this._apikey}&type=movie&t=${title}`;

    if (year != null) url += `&y=${year}`;

    return this._client.get(url);
  }
}
