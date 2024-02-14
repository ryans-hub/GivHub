
const base = "http://api.weatherapi.com/v1";
const fore = "/forecast.json";
const bfore = base + fore + "?key=b31d5f7b851e4eaeafd10557240802&q=";

//	yeah, I'm lazy I know
function newLine (st) {
	let q = st + "\n";
	return q
}

function get_location () {
	let place = prompt("Enter your city:");
	return place;
}

async function better (p) {
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
	// don't worry about my fingers, I wrote this in with code lol
	const forech = {
		aSix: [pizza.hour[6].temp_f, pizza.hour[6].feelslike_f, pizza.hour[6].condition.text],
		aSev: [pizza.hour[7].temp_f, pizza.hour[7].feelslike_f, pizza.hour[7].condition.text],
		aEgt: [pizza.hour[8].temp_f, pizza.hour[8].feelslike_f, pizza.hour[8].condition.text],
		aNin: [pizza.hour[9].temp_f, pizza.hour[9].feelslike_f, pizza.hour[9].condition.text],
		aTen: [pizza.hour[10].temp_f, pizza.hour[10].feelslike_f, pizza.hour[10].condition.text],
		aElv: [pizza.hour[11].temp_f, pizza.hour[11].feelslike_f, pizza.hour[11].condition.text],
		aTlv: [pizza.hour[12].temp_f, pizza.hour[12].feelslike_f, pizza.hour[12].condition.text],
		pOne: [pizza.hour[13].temp_f, pizza.hour[13].feelslike_f, pizza.hour[13].condition.text],
		pTwo: [pizza.hour[14].temp_f, pizza.hour[14].feelslike_f, pizza.hour[14].condition.text],
		pThr: [pizza.hour[15].temp_f, pizza.hour[15].feelslike_f, pizza.hour[15].condition.text],
		pFor: [pizza.hour[16].temp_f, pizza.hour[16].feelslike_f, pizza.hour[16].condition.text],
		pFiv: [pizza.hour[17].temp_f, pizza.hour[17].feelslike_f, pizza.hour[17].condition.text],
		pSix: [pizza.hour[18].temp_f, pizza.hour[18].feelslike_f, pizza.hour[18].condition.text],
		pSev: [pizza.hour[19].temp_f, pizza.hour[19].feelslike_f, pizza.hour[19].condition.text],
		pEgt: [pizza.hour[20].temp_f, pizza.hour[20].feelslike_f, pizza.hour[20].condition.text]
	};
	const extra = {
		avgHumid: pizza.day.avghumidity,
		windSp: cake.wind_mph,
		windDir: cake.wind_degree,
		moonPhase: pizza.astro.moon_phase,
		moonRS: (pizza.astro.moonrise, pizza.astro.moonset),
	};
	console.log(flour);
	const sects = document.querySelectorAll("section");

	const bz = sects[0];
	const ez = sects[2];
	const basicHeader = document.createElement("h1");
	basicHeader.textContent = "Current Weather\nPhoenix, AZ";
	bz.appendChild(basicHeader);
	const basCont = document.createElement("p");
	bz.appendChild(basCont);
	bqc = "Currently " + basic.temp + " degrees and " + basic.condt +  "\nFeels Like: " + basic.feelsLike + "\nThe sun will rise at " + basic.sunRS[0] + " and will set at " + basic.sunRS[1]  + "\nIt is set to rain about " + basic.rain + " inches today";
	basCont.textContent = bqc;

	const fz = sects[1];
	const semiBasicHeader = document.createElement("h1");
	semiBasicHeader.textContent = "Today's Forecast";
	fz.appendChild(semiBasicHeader);
	const bigBoy = document.createElement("p");
	fz.appendChild(bigBoy);
	let gbFun = "";
}

//---------------------------------------------------------------------------//

better("Phoenix");