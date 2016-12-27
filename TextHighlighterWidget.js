define([
    "dojo/_base/declare",
    "dojo/dom",
    "dojo/dom-style"
], function(declare, dom, domStyle){
    "use strict";

    var target;

    return declare(null, {
        init: function (text, targetId) {
            target = dom.byId(targetId);
            target.innerHTML = "<p>" + text + "</p>";
        },

        highlight: function (color) {
            domStyle.set(target, "background-color", color);
        }
    });
});
