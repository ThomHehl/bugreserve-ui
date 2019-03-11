import {Injectable} from '@angular/core';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import {LoadSetup} from '../actions/setup.actions';
import {SettingsService} from './settings.service';
import {IssueOptions} from '../classes/issue-options';

@Injectable()
export class AppLoadService {

  public issueOptions: IssueOptions;

  constructor(private store: Store<AppState>, private settingsService: SettingsService) {}

  loadSettings(): void {
    this.store.dispatch(new LoadSetup(this.settingsService, this.issueOptions) );
  }
}
