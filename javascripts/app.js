(function(window, document) {

  function toggleClass(el, className) {
    var classList = el.classList;
    if (classList.contains(className)) {
      classList.remove(className);
    } else {
      classList.add(className);
    }
  }

  function removeClass(el, className) {
    var classList = el.classList;
    if (classList.contains(className)) {
      classList.remove(className);
    }
  }

  var menuBtn = document.querySelector('#menu-btn');
  menuBtn.addEventListener('touchstart', function(e) {
    toggleClass(e.currentTarget.parentElement, 'active');
    e.preventDefault();
  });
  var menuItems = document.querySelectorAll('#main-nav-menu > li > a');
  Array.prototype.map.call(menuItems, function(menuItem) {
    menuItem.addEventListener('touchstart', function(e) {
      var parent = e.currentTarget.parentElement;
      toggleClass(parent, 'active');
      if (parent.classList.contains('dropdown')) {
        e.preventDefault();
      }
    });
  });

  window.addEventListener('touchend', function(e) {
    var el = e.target;
    var parent = el.parentElement;
    while (parent) {
      if (parent.classList.contains('page-nav')) {
        return;
      }
      parent = parent.parentElement;
    }
    removeClass(menuBtn.parentElement, 'active');
    var menuItems = document.querySelectorAll('#main-nav-menu > li > a');
    Array.prototype.map.call(menuItems, function(menuItem) {
      removeClass(menuItem.parentElement, 'active');
    });
  });

  var works = document.querySelectorAll('a.cf');
  Array.prototype.map.call(works, function(work) {
    work.addEventListener('touchstart', function(e) {
      toggleClass(e.currentTarget.parentElement, 'active');
      for (var idx = 0; idx < works.length; idx ++) {
        var otherWork = works[idx];
        if (otherWork === work) {
          continue;
        }
        removeClass(otherWork, 'active');
      }
    });
  });
})(window, document);
