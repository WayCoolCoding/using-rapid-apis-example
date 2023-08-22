// import { MY_API_KEY } from './config.js';

const MY_API_KEY = '7342cc954emsh08a7140a58c2489p1891a8jsn2791ed7b40a7';

fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": MY_API_KEY
	}
})
.then(response => response.json())
.then(response => {
    console.log(response);
    
    document.getElementById('quote').innerHTML = response.content;
    document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
})
.catch(err => {
	console.log(err);
});

// const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '7342cc954emsh08a7140a58c2489p1891a8jsn2791ed7b40a7',
// 		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }