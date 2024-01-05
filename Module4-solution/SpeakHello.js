(function (window){
  var speakWord="Hello"
  hellospeaker = function(name) {
  console.log (speakWord + "" + name);
  } 
  window.helloSpeaker=helloSpeaker;
})(window);
