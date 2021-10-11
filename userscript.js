// ==UserScript==
// @name         Screw Stress
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       DevAidan.com
// @match        https://app.mystudylife.com/tasks
// @icon         https://www.google.com/s2/favicons?domain=mystudylife.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
  //hides every other assignmnet except whats due today
    function fuckStressTodayOnly(){
        let headings = document.evaluate("//p[contains(., 'Due Today')]", document, null, XPathResult.ANY_TYPE, null );
        let thisHeading = headings.iterateNext();

        console.log(thisHeading); // Prints the html element in console
        console.log(thisHeading.textContent); // prints the text content in console

        thisHeading.parentNode.id = "only";
        console.log(thisHeading.parentNode.parentNode.childNodes);
        thisHeading.parentNode.parentNode.childNodes.forEach( child => {
            if(child.nodeName == "LI"){
              if(child.id != "only"){
                child.style.display = "none";
              }
            }
        });

    }
  
    //hides every other assignmnet except whats due tommorow
    function fuckStressTommorowOnly(){
        let headings = document.evaluate("//p[contains(., 'Due Tomorrow')]", document, null, XPathResult.ANY_TYPE, null );
        let thisHeading = headings.iterateNext();

        console.log(thisHeading); // Prints the html element in console
        console.log(thisHeading.textContent); // prints the text content in console

        thisHeading.parentNode.id = "only";
        console.log(thisHeading.parentNode.parentNode.childNodes);
        thisHeading.parentNode.parentNode.childNodes.forEach( child => {
            if(child.nodeName == "LI"){
              if(child.id != "only"){
                child.style.display = "none";
              }
            }
        });

    }
  
    document.addEventListener("keydown", function(event){
       if(event.key == "1"){
           fuckStressTodayOnly();
       }
       if(event.key == "2"){
           fuckStressTommorowOnly();
       }
    });
    // Your code here...
})();
