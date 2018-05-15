import { sum, avg } from "./math"

const LinearRegression = (data) => {
	
	let
		x_avg, 		// average of independent variable x
		y_avg, 		// average of dependent variable y
		num, 		  // numerator : Sum of (xi - x)(yi - y)
		den, 	    // denominator : (xi - x)**2
		m, 		    // slope
		b, 		    // intercept
		sse 		  // the sum of squared error: sum of (y - (mx + b))
	
	x_avg = avg(data.x)
	y_avg = avg(data.y)
	num = sum(data.x.map((x, i) => (x - x_avg) * (data.y[i] - y_avg)))
	den = sum(data.x.map(x => ((x - x_avg) ** 2)))
	
	if (num === 0 && den === 0) {
		m = 0
		b = data.x[0]
		
	}
	else {
		m = num / den
		b = y_avg - m * x_avg
	}
	
	sse = sum(data.y.map((y, i) => (y - (m * data.x[i] + b)) * 2))
	
	return {
		slope: m,
		intercept: b,
		y: `${m}x + ${b}`,
		SSE: `${sse}`
	}
}

export default LinearRegression
