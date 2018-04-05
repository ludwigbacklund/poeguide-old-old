import removeByKey from '../../helpers/removeByKey';

const INITIAL_STATE = {
  acts: {
    1: { name: 'Act 1', min_lvl: 1, max_lvl: 12 },
    2: { name: 'Act 2', min_lvl: 13, max_lvl: 22 },
    3: { name: 'Act 3', min_lvl: 23, max_lvl: 32 },
    4: { name: 'Act 4', min_lvl: 33, max_lvl: 40 },
    5: { name: 'Act 5', min_lvl: 41, max_lvl: 44 },
    6: { name: 'Act 6', min_lvl: 45, max_lvl: 49 },
    7: { name: 'Act 7', min_lvl: 50, max_lvl: 54 },
    8: { name: 'Act 8', min_lvl: 55, max_lvl: 60 },
    9: { name: 'Act 9', min_lvl: 61, max_lvl: 63 },
    10: { name: 'Act 10', min_lvl: 64, max_lvl: 99 },
  },
  itemIds: [],
  characters: { 0: { name: null, itemIds: [] } },
  selectedCharacterId: 0,
};

let characterId = 0;

const timeline = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.itemIds.includes(action.itemId)
        ? state
        : { ...state, itemIds: [...state.itemIds, action.itemId] };
    case 'REMOVE_ITEM':
      return {
        ...state,
        itemIds: state.itemIds.filter(itemId => itemId !== action.itemId),
      };
    case 'SELECT_CHARACTER':
      return {
        ...state,
        itemIds: state.characters[action.characterId].itemIds,
        selectedCharacterId: action.characterId,
      };
    case 'ADD_CHARACTER':
      return {
        ...state,
        characters: {
          ...state.characters,
          [++characterId]: {
            name: action.characterName,
            itemIds: state.itemIds,
          },
        },
        selectedCharacterId: characterId,
      };
    case 'REMOVE_CHARACTER': {
      const key = [action.characterId];
      const newCharacters = removeByKey(state.characters, key);

      return {
        ...state,
        itemIds: [],
        characters: newCharacters,
      };
    }
    case 'SAVE_ITEMS':
      return {
        ...state,
        characters: {
          ...state.characters,
          [state.selectedCharacterId]: {
            ...state.characters[state.selectedCharacterId],
            itemIds: state.itemIds,
          },
        },
      };
    default:
      return state;
  }
};

export default timeline;
