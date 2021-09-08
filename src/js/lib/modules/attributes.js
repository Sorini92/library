import $ from '../core';

$.prototype.addAttr = function (attributeName, value = '') {
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(attributeName, value);
    }

    return this.length;
};

$.prototype.removeAttr = function (attributeName) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(attributeName);
    }

    return this.length;
};

$.prototype.toggleAttr = function (attributeName, value = '') {
    for (let i = 0; i < this.length; i++) {
        if(this[i].hasAttribute(attributeName)) {
            this[i].removeAttribute(attributeName);
        } else {
            this[i].setAttribute(attributeName, value);
        }              
    }

    return this.length;
};