
const base = "http://api.weatherapi.com/v1";
const fore = "/forecast.json";
const bfore = base + fore + "?key=b31d5f7b851e4eaeafd10557240802&q=";

async function homeWeather (p) {
	p = p || "Phoenix";
	const wheat = await fetch(bfore + p);
	const flour = await wheat.json();
	const cake = flour.current;
	const pizza = flour.forecast.forecastday[0];
	const basic = {
		temp: cake.temp_f,
		feelsLike: cake.feelslike_f,
		condt: cake.condition.text,
		sunRS: [pizza.astro.sunrise, pizza.astro.sunset],
		rain: pizza.day.totalprecip_in,
	};
    const atag = document.getElementById("weatha");
	const sects = atag.children;
	console.logshaot;

	const temptation = sects[0];
	if (basic.temp >= 85) {
		temptation.children[0].style.display = "inline-block";
		temptation.children[0].style.float = "left";
	}
	else {
		temptation.children[1].style.display = "inline-block";
		temptation.children[1].style.float = "left";
	}
	let wordy = "It's currently " + basic.temp + " degrees";
	let wordly = "And it feels like " + basic.feelsLike + " degrees";
	temptation.children[2].textContent = wordy;
	temptation.children[3].textContent = wordly;

	const condy = sects[1];
	let shaot = basic.condt.toLowerCase();
	if (shaot == "sunny") {
		condy.children[0].style.display = "inline-block";
		condy.children[0].style.float = "left";
		var condyT = "It's Sunny!! Wahooo";
		var funt = "Go outside. Have fun!!";
	}
	else if (shaot.includes("rain") || shaot.includes("snow") || shaot.includes("sleet") || shaot.includes("ice")) {
		condy.children[2].style.display = "inline-block";
		condy.children[2].style.float = "left";
		var condyT = "Woah there partner it's kinda stormy!";
		var funt = "Why are you even considering?";
	}
	else {
		condy.children[1].style.display = "inline-block";
		condy.children[1].style.float = "left";
		var condyT = "There are clouds yay!!";
		var funt = "Tread lightly. Don't die please";
	}
	condy.children[3].textContent = condyT;
	condy.children[4].textContent = funt;

	const sunst = sects[2];
	sunst.children[0].style.float = "left";
	const pp = sunst.children[1];
	const ppp = sunst.children[2];
	let ppt = "The sun will rise at " + basic.sunRS[0];
	pp.textContent = ppt;
	let pppt = "The sun will set at " + basic.sunRS[1];
	ppp.textContent = pppt;

	bqc = "Currently " + basic.temp + " degrees and " + basic.condt +  "\nFeels Like: " + basic.feelsLike + "\nThe sun will rise at " + basic.sunRS[0] + " and will set at " + basic.sunRS[1]  + "\nIt is set to rain about " + basic.rain + " inches today";
}

//---------------------------------------------------------------------------//

homeWeather("Phoenix");