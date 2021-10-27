'use strict'

var gImgs
var KEY = 'memes'
var gKeywords

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


function _createImg(id, url, keywords = []) {
    return {
        id,
        url,
        keywords
    }
}

function createImgs() {
    var imgs = []
    imgs.push(_createImg(1, 'meme-imgs-square/1.jpg', ['angry', 'politics']))
    imgs.push(_createImg(2, 'meme-imgs-square/2.jpg', ['animals', 'cute']))
    imgs.push(_createImg(3, 'meme-imgs-square/3.jpg', ['animals', 'baby', 'cute', 'tired']))
    imgs.push(_createImg(4, 'meme-imgs-square/4.jpg', ['animals', 'cat', 'tired']))
    imgs.push(_createImg(5, 'meme-imgs-square/5.jpg', ['power', 'baby', 'victory', 'cute']))
    imgs.push(_createImg(6, 'meme-imgs-square/6.jpg', ['happy']))
    imgs.push(_createImg(7, 'meme-imgs-square/7.jpg', ['surprised', 'baby']))
    imgs.push(_createImg(8, 'meme-imgs-square/8.jpg', ['happy']))
    imgs.push(_createImg(9, 'meme-imgs-square/9.jpg', ['happy', 'baby']))
    imgs.push(_createImg(10, 'meme-imgs-square/10.jpg', ['politics', 'smile']))
    imgs.push(_createImg(11, 'meme-imgs-square/11.jpg', ['funny', 'sport']))
    imgs.push(_createImg(12, 'meme-imgs-square/12.jpg', ['funny', 'surprised']))
    imgs.push(_createImg(13, 'meme-imgs-square/13.jpg', ['happy']))
    imgs.push(_createImg(14, 'meme-imgs-square/14.jpg', ['movie', 'tough']))
    imgs.push(_createImg(15, 'meme-imgs-square/15.jpg', ['movie', 'smile']))
    imgs.push(_createImg(16, 'meme-imgs-square/16.jpg', ['surprised', 'movie', 'smile']))
    imgs.push(_createImg(17, 'meme-imgs-square/17.jpg', ['politics', 'tough']))
    imgs.push(_createImg(18, 'meme-imgs-square/18.jpg', ['movie', 'smile', 'fear']))

    gImgs = imgs
    console.log(gImgs)
    return gImgs
}


function getImgs() {
    return gImgs
}