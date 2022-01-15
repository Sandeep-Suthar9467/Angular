import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogOverviewExampleComponent } from './dialog-overview-example/dialog-overview-example.component';
import {MatDialogModule} from '@angular/material/dialog';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleComponent,
    GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, HttpClientModule,
    MatIconModule,MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: 'API_KEY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
