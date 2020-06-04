import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  selectedFile: File;

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.httpClient.post('http://localhost:8080/save', formData, {responseType: 'text'})
      .subscribe((response: String) =>
        alert(response)
      )
    ;
  }

  ngOnInit(): void {
  }
}
