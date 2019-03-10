import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Web} from '../classes/Web';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import {AddSetup} from '../actions/setup.actions';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private GET_SETTINGS = 'setup';

  constructor(private http: HttpClient, private store: Store<AppState>)  {
    this.loadSettings();
  }

  loadSettings(): void {
    this.http.get<Map<string, string[]>>(this.getSettingsUrl())
      .subscribe( settings => {
        this.store.dispatch(new AddSetup(settings) );
    });
  }

  private getSettingsUrl(): string {
    const result = Web.buildRestUrl(this.GET_SETTINGS);
    console.log('Calling:', result);
    return result;
  }
}
