var itemsList = {
    items: [],
    addItem: function(itemName) {
        this.items.push({
            itemName: itemName,
            completed: false
        });
    },
    deleteItem: function(index) {
        this.items.splice(index, 1);
    },
    changeItem: function(index, itemName) {
        this.items[index].itemName = itemName;
    },
    toggleCompleted: function(index) {
        var toggle_status = this.items[index].completed;
        this.items[index].completed = !toggle_status;
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
    }
};

var handlers = {
  toggleAll: function() {
    itemsList.toggleAll();
    view.displayItems();
  },
  addItem: function() { 
    itemsList.addItem(document.getElementById('addItemText').value);
    document.getElementById('addItemText').value = '';
    view.displayItems();    
  },  
  changeItem: function() { 
    itemsList.changeItem(document.getElementById('addPosition').value,document.getElementById('updatedItemText').value );
    document.getElementById('addPosition').value = '';
    document.getElementById('updatedItemText').value = '';
    view.displayItems();    
  },
  deleteItem: function() { 
    itemsList.deleteItem(document.getElementById('deletePosition').value);
    document.getElementById('deletePosition').value = '';
    view.displayItems();    
  },
  toggleCompleted: function() { 
    itemsList.toggleCompleted(document.getElementById('togglePosition').value);
    document.getElementById('togglePosition').value = '';
    view.displayItems();
  }
};

var view = {
  displayItems: function() {
    var itemsUl = document.querySelector('ul');
    itemsUl.innerHTML = '';
    for (var i = 0; i < itemsList.items.length; i++) {
      var itemsLi = document.createElement('li');
      var textCompleted = '';
      if (itemsList.items[i].completed === true) {
        textCompleted = '(x) ';
      } else {
        textCompleted = '( ) ';
      }
      itemsLi.textContent = textCompleted + itemsList.items[i].itemName;
      itemsUl.appendChild(itemsLi);
    }
  }  
};
