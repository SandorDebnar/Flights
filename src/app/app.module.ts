import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AnlegenComponent } from './anlegen/anlegen.component';
import { FlightsComponent } from './flights/flights/flights.component';

@NgModule({
  declarations: [
    AppComponent,
    AnlegenComponent,
    FlightsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
