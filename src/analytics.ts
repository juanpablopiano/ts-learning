let logged; /* Doesn't complain on variable any */

function sendAnalytics(data: string) {
	console.log(data);
	logged = true;
	console.log(logged);
}

sendAnalytics('The Data');
