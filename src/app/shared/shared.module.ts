import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
/* Components */
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
/* Core ui Module  */
import { ButtonModule } from '@coreui/angular';
import { FormModule } from '@coreui/angular';


import { IconModule, IconSetService } from '@coreui/icons-angular';

/* Prime ng module  */
import { PrimeNgModule } from '../primeng.module';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNgModule ,
    ButtonModule ,
    FormModule ,
    IconModule,


  ],
  providers : [IconSetService],
  exports : [HeaderComponent , FooterComponent , SearchbarComponent]
})
export class SharedModule { }
