import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent } from './app.component';
import {HomeComponent } from './views/home/home.component';
import {HeaderComponent } from './shared/header/header.component';
import {FooterComponent } from './shared/footer/footer.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {ElementDialogComponent } from './shared/element-dialog/element-dialog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './views/home.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ElementDialogComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
