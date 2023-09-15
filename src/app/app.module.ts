import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* Prime ng */
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';
import { PrimeNgModule } from './primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule ,
    SharedModule ,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule ,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
