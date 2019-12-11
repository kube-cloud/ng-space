import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rocket } from '../models/rocket.model';
import { Launch } from '../models/launch.model';
import { tap } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class RocketsService {

  constructor(private httpClient: HttpClient) { }

  getRockets(): Observable<Rocket[]> {
    return this.httpClient.get<Rocket[]>('https://api.spacexdata.com/v3/rockets');
  }

  getRocket(id: string): Observable<Rocket> {
    return this.httpClient.get<Rocket>(`https://api.spacexdata.com/v3/rockets/${id}`);
  }

  getRocketLaunches(id: string): Observable<Launch[]> {
    const params = new HttpParams().append(
      'rocket_id', id
    );
    return this.httpClient.get<Launch[]>(`https://api.spacexdata.com/v3/launches`, {
      params
    });
  }
}
