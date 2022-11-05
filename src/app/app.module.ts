import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DecimalPipe } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { WMOInterpretationPipe } from './wmo-interpretation.pipe';
import { LocationSearchComponent } from './location-search/location-search.component';
import { ToUppercasePipe } from './to-uppercase.pipe';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    WeatherComponent,
    WeatherWidgetComponent,
    WMOInterpretationPipe,
    ToUppercasePipe,
    LocationSearchComponent,
    MapComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
