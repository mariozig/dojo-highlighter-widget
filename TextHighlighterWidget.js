define([
    "dojo/_base/declare",
    "dojo/dom-style",
    "dojo/dom"
    //  add imports here
], function(declare, domStyle, dom){ // update imports here
    "use strict";

    var target;

    return declare(null, {
      // add methods here

      init: function(inputText, targetDiv){
        target = dom.byId(targetDiv);


        //target = document.getElementById(targetDiv);
        target.innerHTML = inputText;
      },


      highlight: function(color){
        domStyle.set(target, "background-color", color)

        //target.style.backgroundColor = color;
      }

      /*
      init("Highlight me, bro!!", "mydiv");

      highlight("yellow");
      */
    });
});
