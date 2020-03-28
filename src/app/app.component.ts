import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  images = [400, 200, 300].map((n) => `https://picsum.photos/id/${n}/1024/500`);

}
