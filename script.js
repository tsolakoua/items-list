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
        totalItems = this.items.length;

        this.items.forEach(function(item) {
            if (item.completed === false) {
                count++;
            }
        });

        this.items.forEach(function(item) {
            if (count === totalItems) {
                item.completed = true;
            } else {
                item.completed = false;
            }
        });
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
        itemsList.changeItem(document.getElementById('addPosition').value, document.getElementById('updatedItemText').value);
        document.getElementById('addPosition').value = '';
        document.getElementById('updatedItemText').value = '';
        view.displayItems();
    },
    deleteItem: function(position) {
        itemsList.deleteItem(position);
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
            itemsLi.appendChild(this.createDeleteButton());
            itemsUl.appendChild(itemsLi);
        }
    },
    createDeleteButton: function() {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners: function() {
        var itemsUl = document.querySelector('ul');
        itemsUl.addEventListener('click', function(event) {
            var elementClicked = event.target;
            if (elementClicked.className === 'deleteButton') {
                handlers.deleteItem(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};

view.setUpEventListeners();
