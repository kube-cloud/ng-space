import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Memory } from '../models/memory';
import { map } from 'rxjs/operators';
import { MemoryType } from '../models/memory-type.enum';

@Injectable({ providedIn: 'root' })
export class MemoriesService {
  constructor(private httpClient: HttpClient) { }

  getMemories(): Observable<Memory[]> {
    return this.httpClient.get('https://api.spacexdata.com/v3/launches/67').pipe(
      map((launch: { links: { flickr_images: string[] } }) => launch.links.flickr_images.map(image => ({
        name: image.split('/')[4],
        url: image,
        type: MemoryType.IDK
      })))
    );
  }
}
