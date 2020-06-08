const express = require('express');
const app = express();
const PORT = 4200;

const operators = [
	{ url: "add", doMath: (num1, num2) => parseFloat(num1) + parseFloat(num2) },
	{ url: "divide", doMath: (num1, num2) => num1 / num2 },
	{ url: "multiply", doMath: (num1, num2) => num1 * num2 },
	{ url: "subtract", doMath: (num1, num2) => num1 - num2 }
]

operators.forEach((e) => {
	app.get(`/${e.url}/:num1/:num2`, (req, res) => {
		res.send(`<h1>Results: ${e.doMath(req.params.num1, req.params.num2)}</h1>`);
	});
});

app.listen(PORT, () => { console.log(`listening on port ${PORT}`) })
