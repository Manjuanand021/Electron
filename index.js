const remote = require('electron').remote,
    main = remote.require('./main.js');
const button = document.createElement('button');
button.textContent = 'Click Me';
button.addEventListener('click', () => {
    main.openYoutube();
}, false);
document.body.appendChild(button);
