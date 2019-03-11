import {Actions, LOAD_SETUP, LoadSetup} from '../actions/setup.actions';
import {take} from 'rxjs/operators';
import {IssueOptions} from '../classes/issue-options';

const issueOptions: IssueOptions = {issueType: [] };

export function reducer(state: IssueOptions = issueOptions, action: Actions) {

  switch (action.type) {
    case LOAD_SETUP:
      console.log('LOAD_SETUP');
      const loadAction: LoadSetup = (action as LoadSetup);
      loadAction.settingsService.loadSettings().pipe(take(1))
        .subscribe((options: IssueOptions) => {
          console.log('options', options);
          console.log('payload', loadAction.payload);
          if (loadAction.payload) {
            Object.assign(loadAction.payload, options);
            console.log('payload', loadAction.payload);
          }
          console.log('state', state);
          Object.assign(state, options);
          Object.assign(issueOptions , options);
          console.log('issueOptions', issueOptions);
      });
      return issueOptions;
    default:
      return state;
  }
}
