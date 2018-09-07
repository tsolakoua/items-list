var itemsList = {
  items: [],
  displayItems: function() {
    console.log('My items', this.items);
  },
  addItem: function(itemName) {
    this.items.push({
      itemName: itemName,
      completed: false
    });
    this.displayItems();
  },
  deleteItem: function(index) {
    this.items.splice(index, 1);
    this.displayItems();
  },
  changeItem: function(index, itemName) {
    this.items[index].itemName = itemName;
    this.displayItems();
  },
  toggleCompleted: function(index) {
    var toggle_status = this.items[index].completed;
    this.items[index].completed = !toggle_status;
  }
};
