'use strict';

var sortable = document.getElementById('sortable');

// THIS IS WHERE COPYING IS ENABLED
dragula([document.getElementById('left-copy'), document.getElementById('right-copy')], {
  copy: true,
  removeOnSpill: true,
  copySortSource: true
})
.on('drop', function (el) {
  el.className += ' ex-moved';
});
