import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { StepsModule } from 'primeng/steps';

@NgModule({
    exports: [
        ButtonModule,
        SidebarModule,
        DividerModule,
        AccordionModule,
        TableModule,
        PanelModule,
        MenubarModule,
        InputTextModule,
        CalendarModule,
        PasswordModule,
        CardModule,
        ProgressBarModule,
        ToastModule,
        ConfirmDialogModule,
        BadgeModule,
        DropdownModule,
        DialogModule,
        ConfirmPopupModule,
        ProgressSpinnerModule,
        StepsModule
    ],
})
export class PrimeNgModule { }
