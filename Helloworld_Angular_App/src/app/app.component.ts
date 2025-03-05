import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Helloworld Angular App';

  // Property Binding for Image
  bridgeLabzLogo: string = './assets/BL_logo_square_jpg.jpg';
}
