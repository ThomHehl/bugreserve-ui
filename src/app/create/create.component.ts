import { Component, OnInit } from '@angular/core';
import {ConfigOptions} from '../models/config-options';
import {SettingsService} from '../service/settings.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public configOptions: ConfigOptions;
  public issueType: string;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
      this.configOptions = this.settingsService.getSettings();
  }

}
