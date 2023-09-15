import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';

/* Core ui Module  */
import { ButtonModule } from '@coreui/angular';
import { FormModule } from '@coreui/angular';

import { FooterModule } from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';

/* Prime ng module  */
import { PrimeNgModule } from '../primeng.module';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    FooterModule ,
    IconModule ,
    PrimeNgModule
  ] ,
  providers : [IconSetService] ,
  exports : [SignInComponent]
})
export class AuthModule { }
