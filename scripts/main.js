// import { cardBookmark } from './selectors.js';
// import { bookmarkToggle } from './card.js';

// import { initializeNavigation } from './navigation.js';

const cardBookmarks = document.querySelectorAll('[data-js="card--bookmark"]');

console.log(cardBookmarks);

cardBookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    const bookmarkOutline = bookmark.querySelector('img:nth-of-type(1)');
    bookmarkOutline.classList.toggle('hidden');
    const bookmarkFilled = bookmark.querySelector('img:nth-of-type(2)');
    bookmarkFilled.classList.toggle('hidden');
    // bookmark  + data-js="card--chosen"
  });
});

// cardBookmarks.forEach(bookmark => {
//   bookmark.addEventListener('click', () => {
//     bookmark.classList.add('card--bookmark-hide');
//   });
// });

// initializeNavigation();
