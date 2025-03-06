import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, CommonModule]
  
})
export class AppComponent {
  title = 'Helloworld Angular App';

  // Property Binding for Image
  bridgeLabzLogo: string = './assets/BL_logo_square_jpg.jpg';

<<<<<<< HEAD
=======
  // Two-way Data Binding Property
  userName: string = ''; // Added this line

>>>>>>> UC5
  // Method to open BridgeLabz website in a new tab
  openBridgeLabz() {
    window.open('https://www.bridgelabz.com', '_blank');
  }
}
