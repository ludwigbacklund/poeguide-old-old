import { action, Action, computed, Computed } from 'easy-peasy';

interface UpdateLevelsInViewPayload {
  level: number;
  inView: boolean;
}

export interface TimelineModel {
  levelsInView: number[];
  updateLevelsInView: Action<TimelineModel, UpdateLevelsInViewPayload>;
  currentLevel?: Computed<TimelineModel, number>;
}

export const timelineModel: TimelineModel = {
  levelsInView: [],
  updateLevelsInView: action((state, { level, inView }) => {
    if (inView) {
      state.levelsInView.push(level);
    } else {
      state.levelsInView = state.levelsInView.filter(
        levelInView => levelInView !== level,
      );
    }
  }),
  currentLevel: computed(state => Math.min(...state.levelsInView)),
};
