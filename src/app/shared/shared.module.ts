import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../primeng.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNgModule
  ],
  exports : [HeaderComponent , FooterComponent]
})
export class SharedModule { }
