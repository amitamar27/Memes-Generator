'use strict'

var gImgs
var gMeme
const KEY = 'memes'
var gKeywords
var gFilterWords
var gSavedMemes = _createMemes()


gKeywords = {
    'happy': 4,
    'funny': 1,
    'angry': 1,
    'politics': 3,
    'animals': 3,
    'cute': 3,
    'baby': 4,
    'tired': 2,
    'power': 1,
    'victory': 1,
    'surprised': 3,
    'smile': 4,
    'funny': 2,
    'sport': 1,
    'movie': 4,
    'tough': 2,
    'fear': 1
}


function createMeme(imgid) {
    var meme = {
        id: makeId(),
        imgid: imgid,
        selectedLineIdx: 0,
        lines: [{
                txt: 'enter your text',
                size: 40,
                align: 'center',
                fillColor: '#ffffff',
                strokeColor: '#000000',
                fontFamily: 'impact',
                pos: {
                    x: 150,
                    y: 50
                }
            },
            {
                txt: 'enter your text',
                size: 40,
                align: 'center',
                fillColor: '#ffffff',
                strokeColor: '#000000',
                fontFamily: 'impact',
                pos: {
                    x: 150,
                    y: 270
                }
            }
        ]
    };
    gMeme = meme;

    return meme;
}


function _createMemes() {
    var memes = loadFromStorage(KEY);
    if (!memes || !memes.length) {
        memes = [{
                id: makeId(),
                imgUrl: `./meme-imgs-square/1.jpg`,
                selectedImgId: 1,
                selectedLineIdx: 0,
                lines: [
                    { txt: 'my meme', size: 40, align: 'center', fillColor: '#ffffff', strokeColor: '#000000', fontFamily: 'impact', pos: { x: 175, y: 60 } }
                ]
            }]
        gSavedMemes = memes;
        saveToStorage(KEY,gSavedMemes)
    }
    return memes;
}


function saveMeme(img){
    
    gMeme.imgUrl = img;
    gSavedMemes.push(gMeme);
    saveToStorage(KEY, gSavedMemes);
}


function removeSaveMeme(memeId){
    var memeIdx = gSavedMemes.findIndex(meme=> meme.id === memeId)
    gSavedMemes.splice(memeIdx,1)
    saveToStorage(KEY, gSavedMemes)
}


function getMeme() {
    return gMeme;
}


function setFilterImg(keyword) {
    gFilterWords = keyword
}


function filterImgs(keyword){
    const imgs = gImgs.filter((img)=>{
        return img.filter(name => name.toLowerCase().search(gFilterWords.toLowerCase()) !== -1);
    })
    return imgs
}


function _createImg(id, url, keywords = []) {
    return {
        id,
        url,
        keywords
    }
}


function createImgs() {
    var imgs = []
    imgs.push(_createImg(1, './meme-imgs-square/1.jpg', ['angry', 'politics']))
    imgs.push(_createImg(2, './meme-imgs-square/2.jpg', ['animals', 'cute']))
    imgs.push(_createImg(3, './meme-imgs-square/3.jpg', ['animals', 'baby', 'cute', 'tired']))
    imgs.push(_createImg(4, './meme-imgs-square/4.jpg', ['animals', 'cat', 'tired']))
    imgs.push(_createImg(5, './meme-imgs-square/5.jpg', ['power', 'baby', 'victory', 'cute']))
    imgs.push(_createImg(6, './meme-imgs-square/6.jpg', ['happy']))
    imgs.push(_createImg(7, './meme-imgs-square/7.jpg', ['surprised', 'baby']))
    imgs.push(_createImg(8, './meme-imgs-square/8.jpg', ['happy']))
    imgs.push(_createImg(9, './meme-imgs-square/9.jpg', ['happy', 'baby']))
    imgs.push(_createImg(10, './meme-imgs-square/10.jpg', ['politics', 'smile']))
    imgs.push(_createImg(11, './meme-imgs-square/11.jpg', ['funny', 'sport']))
    imgs.push(_createImg(12, './meme-imgs-square/12.jpg', ['funny', 'surprised']))
    imgs.push(_createImg(13, './meme-imgs-square/13.jpg', ['happy']))
    imgs.push(_createImg(14, './meme-imgs-square/14.jpg', ['movie', 'tough']))
    imgs.push(_createImg(15, './meme-imgs-square/15.jpg', ['movie', 'smile']))
    imgs.push(_createImg(16, './meme-imgs-square/16.jpg', ['surprised', 'movie', 'smile']))
    imgs.push(_createImg(17, './meme-imgs-square/17.jpg', ['politics', 'tough']))
    imgs.push(_createImg(18, './meme-imgs-square/18.jpg', ['movie', 'smile', 'fear']))

    gImgs = imgs
    console.log(gImgs)
    return gImgs
}


function getImgs() {
    return gImgs
}


function updateText(textEvent){
    gMeme.lines[gMeme.selectedLineIdx].txt = textEvent;
}


function changeLinePos(btnEvent){
    if (btnEvent === 'down'){
        gMeme.lines[gMeme.selectedLineIdx].pos.y += 5;
    } else {
        gMeme.lines[gMeme.selectedLineIdx].pos.y -= 5;
    }
}


function switchLines(){
    if (gMeme.lines.length - 1 === gMeme.selectedLineIdx) {
        gMeme.selectedLineIdx = 0;
    } else {
        gMeme.selectedLineIdx++;
    }
}


function addText(){
    var y = 150
    gMeme.lines.splice(2, 0, {
        txt: 'enter your text',
        size: 40,
        align: 'center',
        fillColor: 'white',
        strokeColor: 'black',
        fontFamily: 'impact',
        pos: { x: 150, y}
    })
}


function removeText(){
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
}


function changeTextSize(btnEvent){
    if (btnEvent === 'smaller') {
        gMeme.lines[gMeme.selectedLineIdx].size--;
    } else {
        gMeme.lines[gMeme.selectedLineIdx].size++;
    }
}


function alignText(btnEvent){
    if(btnEvent === 'left'){
        gMeme.lines[gMeme.selectedLineIdx].pos.x = 105
    }else if(btnEvent === 'center'){
        gMeme.lines[gMeme.selectedLineIdx].pos.x = 150
    }else{
        gMeme.lines[gMeme.selectedLineIdx].pos.x = 195
    }
}


function setFont(optionValue){
    if(optionValue === 'impact'){
        gMeme.lines[gMeme.selectedLineIdx].fontFamily = 'impact'
    }else if(optionValue === 'sans-serif'){
        gMeme.lines[gMeme.selectedLineIdx].fontFamily = 'sans-serif'
    }else if(optionValue === 'cursive'){
        gMeme.lines[gMeme.selectedLineIdx].fontFamily = 'cursive'
    }
}


function setStrokeColor(color){
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color
}


function fillColor(color){
    gMeme.lines[gMeme.selectedLineIdx].fillColor = color
}


function getSavedMemes() {
    return gSavedMemes;
}


function currMeme(id) {
    gMeme = getMemeById(id);
}


function getMemeById(memeId){
    var meme = gSavedMemes.find((meme)=>{
        return memeId === meme.id
    })
    return meme
}



