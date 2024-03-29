import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import { ReactiveFormsModule } from '@angular/forms';

//Angular Material
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import{MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import{MatTableModule} from '@angular/material/table'
import {MatTooltipModule} from '@angular/material/tooltip'; 
import{MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatSelectModule} from '@angular/material/select'; 
import{MatCardModule} from '@angular/material/card'
import {MatGridListModule} from '@angular/material/grid-list'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule
  ],
  exports:[
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class SharedModule { }

