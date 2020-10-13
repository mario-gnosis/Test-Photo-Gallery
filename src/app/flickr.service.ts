import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { FlickrInterface } from './flickr-interface';


@Injectable()
export class FlickrService {
  key = 'ca370d51a054836007519a00ff4ce59e';

  constructor(private http: Http) { }

  getAllPhotos(): Observable<FlickrInterface> {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&per_page=500&api_key=${this.key}&tags=pessoas&format=json&nojsoncallback=1`;
    return this.http
      .get(url)
      .map(res => res.json())
      .map(val => {
        if (val.stat === 'ok') {
          return val.photos.photo.map((photo: any) => {
            return {
              url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
              title: photo.title,
            };
          });
        } else {
          return [];
        }
      });
  }
}
