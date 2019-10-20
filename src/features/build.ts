import { action, Action, computed, Computed } from 'easy-peasy';
import { StoreModel } from './model';

interface BuildUnique {
  level: number;
  slot: string;
  name: string;
  iconUrl: string;
}

interface UpdateBuildUniquesPayload {
  buildUniques: BuildUnique[];
}

interface UpdateTimelineLevelsInViewPayload {
  level: number;
  inView: boolean;
}

export interface BuildModel {
  buildUniques: BuildUnique[];
  updateBuildUniques: Action<BuildModel, UpdateBuildUniquesPayload>;
  buildUniquesForCurrentLevel: Computed<BuildModel, BuildUnique[], StoreModel>;
  timelineLevelsInView: number[];
  updateTimelineLevelsInView: Action<
    BuildModel,
    UpdateTimelineLevelsInViewPayload
  >;
  currentTimelineLevel: Computed<BuildModel, number>;
}

export const buildModel: BuildModel = {
  buildUniques: [],
  updateBuildUniques: action((state, { buildUniques }) => {
    state.buildUniques = buildUniques;
  }),
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
  buildUniquesForCurrentLevel: computed(
    [state => state.buildUniques, state => state.currentTimelineLevel],
    (buildUniques, currentLevel) => {
      const buildUniquesForCurrentlevel = buildUniques.filter(
        buildUnique => buildUnique.level <= currentLevel,
      );

      return buildUniquesForCurrentlevel.filter(buildUnique => {
        const buildUniquesWithSameSlot = buildUniquesForCurrentlevel.filter(
          otherBuildUnique => otherBuildUnique.slot === buildUnique.slot,
        );
        if (buildUniquesWithSameSlot.length === 1) {
          return true;
        } else if (
          buildUniquesWithSameSlot.some(
            otherBuildUnique => otherBuildUnique.level > buildUnique.level,
          )
        ) {
          return false;
        }
        return true;
      });
    },
  ),
};
