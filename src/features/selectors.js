import { createSelector } from 'reselect';

export const getActs = state => state.timeline.acts;
const getGemsData = state => state.gems.gemsData;
const getCharacters = state => state.timeline.characters;
const getUniquesData = state => state.uniques.uniquesData;
const getChosenItemIds = state =>
  state.timeline.itemIds[state.timeline.selectedCharacterId] || [];
export const getSelectedCharacterId = state =>
  state.timeline.selectedCharacterId;

export const getSelectedCharacter = createSelector(
  [getSelectedCharacterId, getCharacters],
  (selectedCharacterId, characters) => characters[selectedCharacterId],
);

export const getChosenItems = createSelector(
  [getGemsData, getUniquesData, getChosenItemIds],
  (gemsData, uniquesData, chosenItemIds) =>
    [...uniquesData, ...gemsData].filter(item =>
      chosenItemIds.includes(item.id)),
);

export const getAnnotatedGemsData = createSelector(
  [getGemsData, getChosenItemIds],
  (gemsData, chosenItemIds) =>
    gemsData.map(gem => {
      const newGem = gem;
      newGem.chosen = chosenItemIds.includes(gem.id);
      return newGem;
    }),
);

export const getAnnotatedUniquesData = createSelector(
  [getUniquesData, getChosenItemIds],
  (uniquesData, chosenItemIds) =>
    uniquesData.map(gem => {
      const newGem = gem;
      newGem.chosen = chosenItemIds.includes(gem.id);
      return newGem;
    }),
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

export const getFirstOccurringAct = createSelector(
  [getActs, getTimelineItems],
  (acts, timelineItems) =>
    Object.keys(acts)
      .filter(act => timelineItems[act].length > 0)
      .reduce((min, act) => Math.min(min, parseInt(act, 10)), 10)
      .toString(),
);

export const getActAttributeRequirements = createSelector(
  [getActs, getTimelineItems],
  (acts, timelineItems) =>
    // { 1: {int: x, str: x, dex: x}, 2: ... }
    Object.keys(acts).reduce((actAttributes, act) => {
      const newActAttributes = actAttributes;

      newActAttributes[act] = timelineItems[act].reduce(
        (maxRequirements, item) => {
          const attributes = ['int', 'str', 'dex'];

          const newRequirements = attributes.map(attribute =>
            Math.max(
              maxRequirements[attribute] || 0,
              parseInt(item[`${attribute}_req`], 10) || 0,
            ));

          return {
            int: newRequirements[0],
            str: newRequirements[1],
            dex: newRequirements[2],
          };
        },
        newActAttributes[act - 1] || {},
      );

      return newActAttributes;
    }, {}),
);
