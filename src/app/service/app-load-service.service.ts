import {Injectable} from '@angular/core';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import {Actions, LoadSetup} from '../actions/setup.actions';
import {SettingsService} from './settings.service';

@Injectable()
export class AppLoadService {

  constructor(private store: Store<AppState>, private settingsService: SettingsService) {}

  getSettings(): void {
    this.store.dispatch(new LoadSetup(this.settingsService) );
  }
}
