const counter = document.querySelector(".counter-number");
async function updateCounter() {
	let response = await fetch("https://pskngsie4d3nu2f6s54absrdke0vospo.lambda-url.eu-west-2.on.aws/");
	let data = await response.json();
	counter.innerHTML = ` Your are visitor number: ${data}`;
}
updateCounter();
