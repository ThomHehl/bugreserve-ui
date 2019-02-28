import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Web} from '../classes/Web';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private GET_SETTINGS = 'setup';

  private settingsMap: Map<string, string[]>;

  constructor(private http: HttpClient)  {
    this.loadSettings();
  }

  loadSettings(): void {
    this.http.get<Map<string, string[]>>(this.getSettingsUrl())
      .subscribe( settings => {
        this.settingsMap = settings;
        console.log('Settings Map', this.settingsMap);
    });
  }

  private getSettingsUrl(): string {
    const result = Web.buildRestUrl(this.GET_SETTINGS);
    console.log('Calling:', result);
    return result;
  }
}
