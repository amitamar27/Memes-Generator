'use strict'

var gCanvas;
var gCtx;

function onInit(){
    gCanvas = document.getElementById('canvas');
    gCtx = gCanvas.getContext('2d');
  
    var elClose = document.querySelector('.close')
    elClose.style.display = 'none'

    createImgs()
    renderGallery()
    renderKeyWords()

}


function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    // Note: changing the canvas dimension this way clears the canvas
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
}


function renderGallery(){
    var elGalleryContainer = document.querySelector('.gallery-container')

    var controlPanel = document.querySelector('.control-panel')
    var elContainer = document.querySelector('.canvas-container');
    controlPanel.style.display = 'none'
    elContainer.style.display = 'none'

    
    var imgs = getImgs()
    // var imgs = gImgs
    // var imgs = filterImgs();
    var imgsHTML = imgs.map((img)=>{
        return `<div class="imgCard">
                    <img onclick="onSelectImg('${img.id}')" src="${img.url}" alt="">
                </div>`
    })
    elGalleryContainer.innerHTML = imgsHTML.join('')
}

function onSelectImg(imgId){
    var elClose = document.querySelector('.close')
    elClose.style.display = 'block'
    var elGalleryContainer = document.querySelector('.gallery-container') 
    elGalleryContainer.style.display = 'none'
    document.querySelector('.control-panel').style.display = 'flex';
    document.querySelector('.canvas-container').style.display = 'flex';

    createMeme(imgId)
    console.log(gMeme)
    renderMeme()
}

function renderMeme() {
 
    var meme = getMeme();
 
    var lines = meme.lines;
    var img = new Image()
    img.src = `meme-imgs-square/${meme.imgid}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        lines.forEach(function(line) {
            drawText(line.txt, line.pos.x, line.pos.y, line.size, line.align, line.fillColor, line.strokeColor, line.fontFamily);
        })
    }
    console.log(img)

}

function drawText(text, x, y, size, align, fillColor, strokeColor, fontFamily) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = strokeColor;
    gCtx.fillStyle = fillColor;
    gCtx.font = `${size}px ${fontFamily}`;
    gCtx.textAlign = align;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}




function renderKeyWords(){
    var elKeyWordOption = document.querySelector('#keywords')
    var keyWords = Object.keys(gKeywords).map((keyWord)=>{
        return `<option value="${keyWord}">`
    })

    elKeyWordOption.innerHTML = keyWords.join('')
}

function onFilterImgs(keyword){
    setFilterImg(keyword)
    filterImgs(keyword)
    renderGallery()
}


////// CONTROL PANEL EVENTS

function onUpdateText(textEvent) {
    updateText(textEvent)
    renderMeme()
}


function onChangeLinePos(btnEvent) {
    changeLinePos(btnEvent);
    renderMeme();
}


function onSwitchLines(){
    switchLines()
    renderMeme()
}


function onAddText(){
    addText()
    renderMeme()
}


function onDeleteText(){
    removeText()
    renderMeme()
}

function onChangeTextSize(btnEvent) {
    changeTextSize(btnEvent);
    renderMeme();
}

function onAlignText(btnEvent){
   alignText(btnEvent)
   renderMeme();
}


function onSetFont(optionValue){
    setFont(optionValue)
    renderMeme();
}



function onSetStrokeColor(color) {
    setStrokeColor(color);
    renderMeme();
}


function onSetFillColor(color){
    fillColor(color)
    renderMeme();
}

function closeMeme(){

    var elGalleryContainer = document.querySelector('.gallery-container') 
    elGalleryContainer.style.display = 'grid'

    var controlPanel = document.querySelector('.control-panel')
    controlPanel.style.display = 'none'

    var elContainer = document.querySelector('.canvas-container')
    elContainer.style.display = 'none'

    var elClose = document.querySelector('.close')
    elClose.style.display = 'none'

}


