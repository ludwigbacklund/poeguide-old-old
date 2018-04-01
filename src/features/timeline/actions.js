const addItem = itemId => ({
  type: 'ADD_ITEM',
  itemId,
});

const removeItem = itemId => ({ type: 'REMOVE_ITEM', itemId });

const selectCharacter = characterId => ({
  type: 'SELECT_CHARACTER',
  characterId,
});

const addCharacter = characterName => ({
  type: 'ADD_CHARACTER',
  characterName,
});

const saveItems = () => ({
  type: 'SAVE_ITEMS',
});

export { addItem, removeItem, selectCharacter, addCharacter, saveItems };
