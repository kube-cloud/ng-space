import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rocket } from '../models/rocket.model';

@Injectable({ providedIn: 'root' })
export class RocketsService {
    constructor(private httpClient: HttpClient) { }

    getRockets(): Observable<Rocket[]> {
        return this.httpClient.get<Rocket[]>('https://api.spacexdata.com/v3/rockets');
    }
}