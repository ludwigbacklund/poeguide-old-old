import { combineReducers } from 'redux';

import timeline from './timeline/reducers';
import gems from './gems/reducers';
import uniques from './uniques/reducers';

export default combineReducers({ timeline, gems, uniques });
