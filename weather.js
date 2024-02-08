
// const curr = "/current.json";
// const bcurr = base + curr + "?key=b31d5f7b851e4eaeafd10557240802&q=";

const base = "http://api.weatherapi.com/v1";
const fore = "/forecast.json";
const bfore = base + fore + "?key=b31d5f7b851e4eaeafd10557240802&q=";

async function whaa (place) {
	const qnew = bcurr + place;
	const qfore = bfore + place;
	const current =  await fetch(qnew);
	const nfore = await fetch(qfore);
	const rhead = await current.json();
	const fhead = await nfore.json();
	const c = rhead.current;
	const f = fhead.forecast.forecastday;
	let basic = {};
	let forech = {};
	let extra = {};
}
//	sunrise, sunset, moon phase, condition, total precipitation, minmax temp, 
//	max wind, temp throughout day, current temp, chancve of rain, 

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
		sunRS: (pizza.astro.sunrise, pizza.astro.sunset),
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
	console.log(basic, forech, extra);
}
better("Phoenix");