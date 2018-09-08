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

var displayAllButton = document.getElementById('displayAllButton');
displayAllButton.addEventListener('click', function(){
  itemsList.displayItems();
});

var toggleAll = document.getElementById('toggleAll');
toggleAll.addEventListener('click', function(){
  itemsList.toggleAll();
});
