function playSomeMusic(myGenre) { 
<<<<<<< HEAD
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
=======
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
>>>>>>> ba4b9df71b1123a5541c92ecb0dbaa00d93c8deb
}
