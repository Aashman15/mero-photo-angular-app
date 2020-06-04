import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './model/Photo';

@Component({
  selector: 'app-list-of-photos',
  templateUrl: './list-of-photos.component.html',
  styleUrls: ['./list-of-photos.component.css']
})
export class ListOfPhotosComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  photos: Photo[];

  getPhotos(){
    this.httpClient.get('http://localhost:8080/photos')
    .subscribe((response: Photo[]) =>
    this.photos = response
    );
  }



  ngOnInit(): void {
  }

}
