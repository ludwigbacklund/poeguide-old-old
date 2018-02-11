import { createSelector } from 'reselect';

const getActs = state => state.timeline.acts;
const getGemsData = state => state.gems.gemsData;
const getUniquesData = state => state.uniques.uniquesData;
const getChosenItemIds = state => state.timeline.itemIds;

export const getChosenItems = createSelector(
  [getGemsData, getUniquesData, getChosenItemIds],
  (gemsData, uniquesData, chosenItemIds) =>
    [...uniquesData, ...gemsData].filter(item =>
      chosenItemIds.includes(item.id)),
);

export const getTimelineItems = createSelector(
  [getChosenItems, getActs],
  (chosenItems, acts) => {
    const actItems = chosenItems
      .sort((a, b) => parseInt(a.level_req, 10) - parseInt(b.level_req, 10))
      .reduce(
        (acc, item) => {
          Object.entries(acts).map(act => {
            if (
              item.level_req >= act[1].min_lvl &&
              item.level_req <= act[1].max_lvl
            ) {
              acc[act[0]].push(item);
            }
            return act;
          });
          return acc;
        },
        Object.keys(acts).reduce((acc, act) => {
          acc[act] = [];
          return acc;
        }, {}),
      );

    return actItems;
  },
);
