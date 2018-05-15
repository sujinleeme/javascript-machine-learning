/*
f(x) = x^2+5
 */

const f = (x) => {
	const m = 1
	const b = 5
	return m * x * x + b
}

/*
The derivative df/dx of our function f(x)
*/
const df = (x) => 2 * x

/*
Gradient Descent
*/
const gradientDescent = () => {
	let x,
		learning_rate,
		epochs,
		gradient
	
	x = Math.random() * 10000
	learning_rate = 0.1
	epochs = 100
	console.log(`Start: f(x) = ${+f(x).toFixed(2)}, x = ${x.toFixed(2)}`)
	for (let e = 0; e < epochs; e++) {
		gradient = df(x)
		x -= learning_rate * gradient
		console.log(`========== iteration: ${e+1} ==========`)
		console.log(`f(x) = ${+f(x).toFixed(2)}, x = ${x.toFixed(2)}`)
	}
}

