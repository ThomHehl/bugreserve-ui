import {Action} from '@ngrx/store';
import {SettingsService} from '../service/settings.service';
import {IssueOptions} from '../classes/issue-options';


export const LOAD_SETUP =               '[SETUP] Load';

export class LoadSetup implements Action {
  readonly type = LOAD_SETUP;

  constructor(public settingsService: SettingsService, public payload: IssueOptions) {}
}

export type Actions = LoadSetup;
