'use strict';

// const path = require('path');

// Get the full path of the current file

const fullPath = document.currentScript.src;
const fileName = fullPath.substring(cheminComplet.lastIndexof('/') + 1);

// Show file name
console.log(" Current file name: " + fileName); // console.log(" Current file name: " ${fullPath})