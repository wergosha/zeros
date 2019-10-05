module.exports = function zeros(expression) {

	//create array without '*'
	let expressionSplit = expression.split('*');
	let fiveCounter = 0;
	let twoCounter = 0;

	for (i = 0; i < expressionSplit.length; i++) {

		if (expressionSplit[i].endsWith('!!')) {
			twoExclamation = Number(expressionSplit[i].slice(0,-2));
			let matches = doubleFactorio(twoExclamation);
			matchNumber(matches);
		} else {
			oneExclamation = Number(expressionSplit[i].slice(0, -1));
			let matches = factorio(oneExclamation);
			matchNumber(matches);
		}
	}

	return Math.min(fiveCounter, twoCounter);

	function doubleFactorio(number){
		let result = [];
		//check even 
		if (number % 2 == 0) {
			for (let i = 2; i <= number; i += 2)
				result.push(i)
		//check odd
		} else {
			for (let i = 1; i <= number; i += 2)
				result.push(i)
		}
		return result;
	}
	
	function factorio(number) {
		let result = [];
		for (let i = 1; i <= number; i++) {
			result.push(i)
		}
		return result;
	}
	
	//match for 2's and 5's
	function matchNumber(expressionSplit) {
		for (let i = 0; i < expressionSplit.length; i++) {
			//counting 2's
			if (expressionSplit[i] % 2 == 0) {
				let number = expressionSplit[i];
				while (number % 2 == 0) {
					number = number / 2;
					twoCounter++;
				}
			}
			//counting 5's 
			if (expressionSplit[i] % 5 == 0) {
				let number = expressionSplit[i];
				while (number % 5 == 0) {
					number = number / 5;
					fiveCounter++;
				}
			}
		}
	}
};

