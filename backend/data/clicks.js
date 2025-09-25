let clickCount = 31241;

function incrementClick (){
    clickCount++
    return clickCount
}
function getClickCount (){
    return clickCount
}

module.exports = {
  incrementClick,
  getClickCount
}