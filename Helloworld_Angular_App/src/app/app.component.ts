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

  // Two-way Data Binding Property
  userName: string = ''; 
  userNameError: string = ''; // Error message

  // Method to open BridgeLabz website in a new tab
  openBridgeLabz() {
    window.open('https://www.bridgelabz.com', '_blank');
  }

  // Validate userName
  validateUserName() {
    const namePattern = /^[A-Z][a-zA-Z ]{2,}$/; // Allow spaces between names
    if (!namePattern.test(this.userName)) {
      this.userNameError = "Name is incorrect! It should start with uppercase and have at least 3 letters.";
    } else {
      this.userNameError = ""; // Clear error if valid
    }
  }
  
}
