// JavaScript Document
console.log("hi")

document.addEventListener("DOMContentLoaded", function() {
    console.log("hi");
  
    var coll = document.getElementsByClassName("collapsible");
    var i;
  
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  });

  function toggleMenu() {
    const menu = document.querySelector('.side-menu');
    const isOpen = menu.classList.contains('open');
  
    if (isOpen) {
      menu.classList.remove('open');
      menu.setAttribute('aria-hidden', 'true');
    } else {
      menu.classList.add('open');
      menu.setAttribute('aria-hidden', 'false');
    }
  }