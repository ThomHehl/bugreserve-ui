import { Component, OnInit } from '@angular/core';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import {take} from 'rxjs/operators';
import {IssueOptions} from '../classes/issue-options';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public issueOptions: IssueOptions;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('issueOptions').pipe(take(1))
      .subscribe((issueOptions: IssueOptions) => {
        this.issueOptions = issueOptions;
        console.log('issueOptions', issueOptions);
      });
  }

}
