
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
	basicHeader = document.createElement("h1");
	basicHeader.textContent = "Current Weather\nPhoenix, AZ";
	atag.appendChild(basicHeader);
	const basCont = document.createElement("p");
	atag.appendChild(basCont);
	bqc = "Currently " + basic.temp + " degrees and " + basic.condt +  "\nFeels Like: " + basic.feelsLike + "\nThe sun will rise at " + basic.sunRS[0] + " and will set at " + basic.sunRS[1]  + "\nIt is set to rain about " + basic.rain + " inches today";
	basCont.textContent = bqc;
}

//---------------------------------------------------------------------------//

homeWeather("Phoenix");

