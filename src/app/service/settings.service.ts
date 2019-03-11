import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Web} from '../classes/web';
import {Observable} from 'rxjs';
import {IssueOptions} from '../classes/issue-options';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private GET_SETTINGS = 'setup';

  constructor(private http: HttpClient)  { }

  loadSettings(): Observable<IssueOptions> {
    return this.http.get<IssueOptions>(this.getSettingsUrl());
  }

  private getSettingsUrl(): string {
    const result = Web.buildRestUrl(this.GET_SETTINGS);
    console.log('Calling:', result);
    return result;
  }
}
