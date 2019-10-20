import { action, Action, computed, Computed } from 'easy-peasy';

interface UpdateTimelineLevelsInViewPayload {
  level: number;
  inView: boolean;
}

export interface BuildModel {
  timelineLevelsInView: number[];
  updateTimelineLevelsInView: Action<
    BuildModel,
    UpdateTimelineLevelsInViewPayload
  >;
  currentTimelineLevel: Computed<BuildModel, number>;
}

export const buildModel: BuildModel = {
  timelineLevelsInView: [],
  updateTimelineLevelsInView: action((state, { level, inView }) => {
    if (inView) {
      state.timelineLevelsInView.push(level);
    } else {
      state.timelineLevelsInView = state.timelineLevelsInView.filter(
        levelInView => levelInView !== level,
      );
    }
  }),
  currentTimelineLevel: computed(({ timelineLevelsInView: levelsInView }) =>
    levelsInView.length > 0 ? Math.min(...levelsInView) : 1,
  ),
};
