
    function toggleMenu() {
        document.getElementsByClassName("menu")[0].classList.toggle("pop-out");
       
     document.getElementsByClassName("menu-icon")[0].classList.toggle("pop-out-icon");
      
    document.getElementsByClassName("line2")[0].classList.toggle("fade-away");
      
    document.getElementsByClassName("line1")[0].classList.toggle("rotate-down");
      
    document.getElementsByClassName("line3")[0].classList.toggle("rotate-up");
      
    
    
    
    }



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


fetch("https://v2.jokeapi.dev/joke/Any?safe-mode", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "dad-jokes.p.rapidapi.com",
		"x-rapidapi-key": "198d2ae886mshda0c71e675676f0p1e0877jsn724c64a80630"
	}
})
    .then((response) => response.json())
    .then((jsObject) =>{
        console.log(jsObject);
    const singleLine = jsObject['joke'];
    const setup = jsObject['setup'];
    console.log(setup);
    const punchline = jsObject['delivery'];
    console.log(punchline);
    
    document.getElementById('setup').textContent = setup;
    document.getElementById('punchline').textContent = punchline;
    document.getElementById('singleLine').textContent = singleLine;
    
    })


    