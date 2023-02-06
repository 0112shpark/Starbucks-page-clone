var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  // #player
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", // youtube video ID
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "An6LvWQuj_8",
    },
    events: {
      // if ready to play
      onReady: function (event) {
        event.target.mute(); // mute
      },
    },
  });
}
