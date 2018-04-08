import { INITIAL_STATE as INITIAL_TIMELINE_STATE } from '../features/timeline/reducers';

const migrations = {
  0: state => state,
  1: state => ({
    ...state,
    timeline: INITIAL_TIMELINE_STATE,
  }),
};

export default migrations;
