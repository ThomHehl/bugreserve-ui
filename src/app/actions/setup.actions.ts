import {Action} from '@ngrx/store';
import {SettingsService} from '../service/settings.service';


export const ADD_SETUP =                '[SETUP] Add';
export const LOAD_SETUP =               '[SETUP] Load';

export class AddSetup implements Action {
  readonly type = ADD_SETUP;

  constructor(settings: Map<string, string[]>) {}
}

export class LoadSetup implements Action {
  readonly type = LOAD_SETUP;

  constructor(settingsService: SettingsService) {}
}

export type Actions = AddSetup | LoadSetup;
