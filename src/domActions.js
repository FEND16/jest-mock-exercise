require('isomorphic-fetch');

/**
 * Ignore for now, not working
 */
document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3005/comments')
    .then(response => response.json())
    .then(data => {
      document.getElementById('output').textContent = data;
    })
});

