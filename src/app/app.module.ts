import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { CreateComponent } from './create/create.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {reducer} from './reducers/setup.reducer';
import {AppLoadService} from './service/app-load-service.service';

export function load_settings(appLoadService: AppLoadService) {
  return () => appLoadService.loadSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotificationsComponent,
    CreateComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    StoreModule.forRoot({
      issueOptions: reducer
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [
    AppLoadService,
    { provide: APP_INITIALIZER, useFactory: load_settings, deps: [AppLoadService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
