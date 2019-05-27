import {Injectable} from '@angular/core';
import {SettingsService} from './settings.service';

@Injectable()
export class AppLoadService {

  constructor(private settingsService: SettingsService) {}

  loadSettings(): void {
    this.settingsService.loadSettings();
  }
}
