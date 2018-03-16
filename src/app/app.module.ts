import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { environment } from '../environments/environment';
import { VideoListComponent } from './components/video-list/video-list.component';
import { HeaderComponent } from './components/header/header.component';
import { VideoDataService } from './services/video-data.service';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './components/map/map.component';
import { UserDataService } from './services/user-data.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    HeaderComponent,
    VideoCardComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFzBg6EWivP2e2GR0DmXdosJKqJylV9AQ',
    })
  ],
  providers: [VideoDataService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
