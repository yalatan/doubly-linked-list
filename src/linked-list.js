const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {

        let node = new Node(data);
        // List is currently empty
        if (this.length == 0) {
            this._head = node;
            this._tail = node;
            this.length++;
            return this;
        }
        // append at head
        if (this.length == 0) {
            node.prev = null;
            node.next = null;
            this._head = node;
            this._tail = node;
        } else {
            let last = this._tail;
            this._tail = node;
            last.next = node;
            node.prev = last;
            node.next = null;
            this.length++;
        }

        this.tail = function() {
            return this._tail.data;
        };
        this.head = function() {
            return this._head.data;
        };
    }


    head() { return this._head.data; }

    tail() { return this._tail.data; }

    at(index) {
        let current = this._head;
        let l = 0;

        while (index > l) {
            current = current.next;
            l++;
        }
        return current.data;
    }

    insertAt(index, data) {
        let current = this._head;
        let l = 0;

        while (index > l) {
            current = current.next;
            l++;
        };
        let node = new Node(data);
        if (current == null) {
            this._head = node;
            this._tail = node;
            node.prev = null;
            node.next = null;
            this.length = 1;
        } else {
            node.prev = current.prev;
            node.next = current;
            current.prev = node;
            node.prev.next = node;
            this.length++;
        }

        return this;
    }


    isEmpty() {
        if (this.length == 0) { return true; } else { return false; }
    }

    clear() {
        this.length = 0;
        this._tail = null;
        this._head = null;
        this.tail = function() {
            return null;
        };
        this.head = function() {
            return null;
        };
        return this;
    }

    deleteAt(index) {
        let current = this._head;
        let l = 0;


        if (index == 0) {
            this.length = 0;
            this._tail = null;
            this._head = null;
        } else {
            while (index > l) {
                current = current.next;
                l++;
            };
            current.prev.next = current.next;
            current.next.prev = current.prev;
            this.length--;
        }

        return this;
    }

    reverse() {
        let current = this._head;
        for (let i = 0; i < this.length; i++) {
            let a = current.next;
            current.next = current.prev;
            current.prev = a;
            current = current.prev;
        }
        let last = this._tail;
        this._tail = this._head;
        this._head = last;
        this.tail = function() {
            return this._tail.data;
        };
        this.head = function() {
            return this._head.data;
        };

        return this;

    }

    indexOf(data) {
        let l = -1;
        let current = this._head;
        if (current.data == data) {
            l = 0;
        }

        for (let i = 1; i < this.length; i++) {
            current = current.next;
            if (current.data == data) {
                l = i;
            }
        };

        return l;

    }
}





module.exports = LinkedList;