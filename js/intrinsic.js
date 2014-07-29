function playSomeMusic(myGenre) { 
	SC.initialize({      
		client_id: 'ad93c604ac3543f0ddfdfaa77e9e945c'
	});

	SC.get('/tracks', { genres: myGenre, bpm: { from: 120 } },
  	function(tracks) {
    //SoundCloud sends back an array of 50 tracks so let's randomize 
    //which of the 50 is played first
    var random = Math.floor(Math.random() * 49);
    var track_url = tracks[random].permalink_url;
    //The oEmbed method is utilized to display the player
    //in the element #target with options such as auto play
    SC.oEmbed(track_url, {auto_play: true, iframe: true, show_comments: true, color: "ff0066"},
      document.getElementById("target"));
		}
	);
}
