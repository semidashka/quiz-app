export function bookmarkToggle() {
  const cardBookmarks = document.querySelectorAll('[data-js="card--bookmark"]');

  cardBookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      const bookmarkOutline = bookmark.querySelector('img:nth-of-type(1)');
      bookmarkOutline.classList.toggle('hidden');
      const bookmarkFilled = bookmark.querySelector('img:nth-of-type(2)');
      bookmarkFilled.classList.toggle('hidden');
      // bookmark  + data-js="card--chosen"
    });
  });
}
