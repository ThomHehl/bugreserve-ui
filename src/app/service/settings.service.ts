import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Web} from '../models/web';
import {Observable} from 'rxjs';
import {ConfigOptions} from '../models/config-options';
import {SessionStorageService} from './session-storage.service';
import {take} from 'rxjs/operators';

const CONFIG_OPTIONS = 'ConfigOptions';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private GET_SETTINGS = 'setup';

  constructor(private http: HttpClient, private sessionStorageService: SessionStorageService)  { }

  private loadSettingsFromServer(): Observable<ConfigOptions> {
    return this.http.get<ConfigOptions>(this.getSettingsUrl());
  }

  getSettings(): ConfigOptions {
    const result: ConfigOptions = this.sessionStorageService.getFromSession(CONFIG_OPTIONS);
    return result;
  }

  loadSettings(): void {
    if (!this.sessionStorageService.getFromSession(CONFIG_OPTIONS)) {
      this.loadSettingsFromServer().pipe(take(1))
        .subscribe((options: ConfigOptions) => {
          this.sessionStorageService.saveInSession(CONFIG_OPTIONS, options);
        });
    }
  }

  private getSettingsUrl(): string {
    const result = Web.buildRestUrl(this.GET_SETTINGS);
    console.log('Calling:', result);
    return result;
  }
}
