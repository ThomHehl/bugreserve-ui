import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../service/settings.service';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  private settingsMap: Map<string, string[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('settings').subscribe(settings => {
     this.settingsMap = settings;
     console.log('settings', settings);
    });
  }

}
