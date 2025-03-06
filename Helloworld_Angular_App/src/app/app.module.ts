import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule } from '@angular/forms'; // Imported FormsModule
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgModule,
    CommonModule// Added FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
