const addItem = itemId => ({
  type: 'ADD_ITEM',
  itemId,
});

const removeItem = itemId => ({ type: 'REMOVE_ITEM', itemId });

export { addItem, removeItem };
