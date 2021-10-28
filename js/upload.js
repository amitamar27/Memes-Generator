'use strict'

function downloadCanvas(link) {
    const data = gCanvas.toDataURL();
    link.href = data;
    link.download = 'meme';
}