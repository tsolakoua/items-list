var itemsList = {
    items: [],
    displayItems: function() {
        console.log('My items');
        if (this.items.length === 0) {
            console.log('The list is empty');
        } else {}
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].completed === false) {
                console.log('( )', this.items[i].itemName);
            } else {
                console.log('(x)', this.items[i].itemName);
            }
        }
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
        this.displayItems();
    },
    toggleAll: function() {
        var count = 0;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].completed === false) {
                count++;
            }
        }
        if (count === this.items.length) {
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].completed = true;
            }
        } else {
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].completed = false;
            }
        }
        this.displayItems();
    }
};

var handlers = {
  displayItems: function() {
    itemsList.displayItems();
  },
  toggleAll: function() {
    itemsList.toggleAll();
  },
  addItem: function() { 
    itemsList.addItem(document.getElementById('addItemText').value);
    document.getElementById('addItemText').value = '';
  },  
  changeItem: function() { 
    itemsList.changeItem(document.getElementById('addPosition').value,document.getElementById('updatedItemText').value );
    document.getElementById('addPosition').value = '';
    document.getElementById('updatedItemText').value = '';
  },
  deleteItem: function() { 
    itemsList.deleteItem(document.getElementById('deletePosition').value);
    document.getElementById('deletePosition').value = '';
  },
  toggleAll: function() {
    itemsList.toggleAll();
  },
  toggleCompleted: function() { 
    itemsList.toggleCompleted(document.getElementById('togglePosition').value);
    document.getElementById('togglePosition').value = '';
  }
};
