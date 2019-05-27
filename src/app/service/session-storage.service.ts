import {Inject, Injectable} from '@angular/core';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  saveInSession(key, val): void {
    this.storage.set(key, val);
  }

  getFromSession(key): any {
    return this.storage.get(key);
  }
}
