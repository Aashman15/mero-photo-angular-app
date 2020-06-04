import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mero-photo-angular-app';

  selectedPage: String = 'home';

  getColor(page: String){
    if (page !== this.selectedPage) {
      return 'black';
    } else {
      return '#007ACD';
    }
  }

  selectPage(page: string) {
    this.selectedPage = page;
  }
}
