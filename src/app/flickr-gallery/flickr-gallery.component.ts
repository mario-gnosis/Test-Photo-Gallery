import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../flickr.service';
import { FlickrInterface } from '../flickr-interface';

@Component({
  selector: 'app-flickr-gallery',
  templateUrl: './flickr-gallery.component.html',
  styleUrls: ['./flickr-gallery.component.css']
})
export class FlickrGalleryComponent implements OnInit {

 photos: FlickrInterface;
 page = 1;


constructor(private flickr: FlickrService) {}

  ngOnInit()  {
    this.flickr.getAllPhotos().subscribe((resp: FlickrInterface) => {
      this.photos = resp;
    });
  }

}
