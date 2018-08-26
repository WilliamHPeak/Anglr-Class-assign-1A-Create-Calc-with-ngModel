import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';// whp must add for two binding ngModel
import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,CommonModule ], //< added FormsModule here for two way binding for textbox
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
