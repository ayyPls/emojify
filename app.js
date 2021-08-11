function copyToClipboard(str) {
    document.getElementById("outputText").select();
    document.execCommand("copy");
}
function emojify() {
    let inputText = $('#inputText').val().trim().split(' ') //split by words
    resultArray = []
    inputText.forEach(element => {
        let word = element
        let emojiBlock = getEmoji(formatWord(element.toLowerCase())) //get emoji to this word
        resultArray.push(word + emojiBlock)
    });
    let result = resultArray.join(' ')
    return document.getElementById('outputText').innerHTML = result
}
function getEmoji(word) {
    if (wordExist(word)) {
        let emoji = ''
        for (let i = 0; i < getRand(); i++) {
            emoji += getRandomEmoji(getLang(word)[word])
        }
        return emoji
    }
    else return ''
}
function getRandomEmoji(emojiArray) {
    return emojiArray[Math.floor(Math.random() * emojiArray.length)]; //return 1 random emoji
}
function getRand() {
    return Math.floor(Math.random() * 3) + 1; //random number of emoji between 1 and 3
}
function formatWord(word) { //return word without punctuation marks
    return word.replace(/[,.?!\t\n\r]{1,}/g, '')
}
function getLang(word) { //get word language and which emoji_map to use
    if (EMOJI_MAPPINGS[word]) return EMOJI_MAPPINGS
    if (EMOJI_MAPPINGS_RU[word]) return EMOJI_MAPPINGS_RU
}
function wordExist(word) {
    if (EMOJI_MAPPINGS[word] || EMOJI_MAPPINGS_RU[word]) return true
}
