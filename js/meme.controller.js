'use strict'

function onInit(){
    createImgs()
    renderGallery()
    renderKeyWords()
  
}


function renderGallery(){
    var elGalleryContainer = document.querySelector('.gallery-container')
    var imgs = getImgs()
    var imgsHTML = imgs.map((img)=>{
        return `<div class="imgCard">
                    <img src="${img.url}" alt="">
                </div>`
    })
    elGalleryContainer.innerHTML = imgsHTML.join('')
}




function renderKeyWords(){
    var elKeyWordOption = document.querySelector('#keywords')
    var keyWords = Object.keys(gKeywords).map((keyWord)=>{
        return `<option value="${keyWord}">`
    })

    elKeyWordOption.innerHTML = keyWords.join('')

    
    
}




