document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('epSearch');
  var grid = document.getElementById('epGrid');
  var empty = document.getElementById('epEmpty');
  if (!input || !grid) return;
  var cards = Array.prototype.slice.call(grid.querySelectorAll('.ep-card'));

  input.addEventListener('input', function () {
    var q = input.value.trim().toLowerCase();
    var visibleCount = 0;
    cards.forEach(function (card) {
      var hay = card.getAttribute('data-search') || '';
      var match = hay.indexOf(q) !== -1;
      card.style.display = match ? '' : 'none';
      if (match) visibleCount++;
    });
    empty.style.display = visibleCount === 0 ? 'block' : 'none';
  });
});
