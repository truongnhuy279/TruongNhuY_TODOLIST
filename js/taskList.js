function TaskList() {
    this.arr = [];

    this.addTask = function (task) {
        this.arr.push(task);
    };

    this._findIndex = function (id) {
        return this.arr.findIndex(function (item) {
            return item.id === id;
        });
    };

    this.deleteTask = function (id) {
        var index = this._findIndex(id);
        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    };

    this.getTaskById = function (id) {
        return this.arr.find(function (item) {
            return item.id === id;
        });
    };

    this.updateTask = function (task) {
        var index = this._findIndex(task.id);
        if (index !== -1) {
            this.arr[index] = task;
        }
    };
}
