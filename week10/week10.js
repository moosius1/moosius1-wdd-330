  fetch("https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&contains=C%2523&idRange=0-150&blacklistFlags=nsfw%2Cracist", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
		"x-rapidapi-key": "198d2ae886mshda0c71e675676f0p1e0877jsn724c64a80630"
	}
})
.then((response => {
    return response.json();
	
}))
.catch(err => {
	console.error(err);
});





    var animateButton = function(e) {

        e.preventDefault;
        //reset animation
        e.target.classList.remove('animate');
        
        e.target.classList.add('animate');
        setTimeout(function(){
          e.target.classList.remove('animate');
        },700);
      };
      
      var bubblyButtons = document.getElementsByClassName("bubbly-button");
      
      for (var i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener('click', animateButton, false);
      }


      var testObject = { 'one': 1, 'two': 2, 'three': 3 };



 
     