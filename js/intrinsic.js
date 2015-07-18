function playSomeMusic(myGenre) { 
  SC.initialize({      
    client_id: '6fc7b8b965bfe1e3efadc31a932d49ea'
  });

  SC.get('/tracks', { genres: myGenre, bpm: { from: 120 } },
    function(tracks) {
    //SoundCloud sends back an array of 9 tracks so let's randomize 
    //which of the 9 is played first, error will happen if you set the number higher
    var random = Math.floor(Math.random() * 9);
    var track_url = tracks[random].permalink_url;
    //The oEmbed method is utilized to display the player
    SC.oEmbed(track_url, {color: "ff0066"},
      document.getElementById("player"));
    }
  );
}
