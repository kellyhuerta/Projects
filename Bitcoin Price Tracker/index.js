const div = document.querySelector(".bitcoin");
const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cbitcoincash%2Cethereum%2Clitecoin%2Cbinancecoin%2Cripple&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h";

let data;

async function fetchData() {
  try {
    const res = await fetch(url);
    data = await res.json();
    showPrices();
  } catch (err) {
    console.error(err);
  }
}

function showPrices() {
  if (data[0].price_change_percentage_24h > 0) {
    div.innerHTML = `<p>1 BTC = $${data[0].current_price}</p>
	<p class="increased">
		<span>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
			</svg>
		</span>
		${data[0].price_change_percentage_24h}%
	</p>`;
  } else {
    div.innerHTML = `<p>1 BTC = $${data[0].current_price}</p>
		<p class="decreased"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
</svg></span>${data[0].price_change_percentage_24h}%</p>`;
  }
}

fetchData();
