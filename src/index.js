module.exports = function zeros(expression) {

	let expressionSplit = expression.split("*");
	let fiveCounter = 0;
	let twoCounter = 0;

	for (i = 0; i < expressionSplit.length; i++) {

		if (expressionSplit[i].endsWith('!!')) {
			twoExclamation = Number(expressionSplit[i].slice(0,-2));

			if (twoExclamation % 2 === 0) {

				for (j = 5; twoExclamation / j >= 1; j *= 5) {
					fiveCounter += Math.floor(twoExclamation / j);
				};
			}

		} else {

			oneExclamation = Number(expressionSplit[i].slice(0, -1));

			for (j = 5; oneExclamation / j >= 1; j *= 5) {
				fiveCounter += Math.floor(oneExclamation / j);
			};
		};

	};

	return fiveCounter;
};

































      // let twoExclamation = Number(expressionSplit[i].slice(0, -2));

      // } else {

      // let oneExclamation = Number(expressionSplit[i].slice(0, -1));

      // for (five = 5; oneExclamation / five >= 1; five *= 5)
      //     zeroCounter++;
      // }
















    // expressionSplitNumber1 = Number(expressionSplit.endsWith('!').slice(0, -1));
    // expressionSplitNumber2 - Number(expressionSplit.endsWith('!!').slice(0,-2));

    // console.log(expressionSplitNumber1);
    // expressionNumber = Number(expression.slice(0, -1));
    // zeroCounter = 0;
    // for (five = 5; expressionNumber / five >= 1; five *= 5);
    //     zeroCounter++;
	// return zeroCounter; 
	


		// let expressionSplit = expression.split("*");

	// let zeroCounter = 0;

	// for (i = 0; i < expressionSplit.length; i++) {

	// 	if (expressionSplit[i].endsWith('!!')) {

	// 		twoExclamation = Number(expressionSplit[i].slice(0, -2));

	// 		acc = twoExclamation;

	// 		if (twoExclamation % 2 == 0) {

	// 			for (j = 2; j < expressionSplit.length; j += 2) {

	// 				acc = acc * j;

	// 			};

	// 		} else {

	// 			for (j = 1; j < expressionSplit.length; j += 2) {

	// 				acc = acc * j;

	// 			};
	// 		};
	// 	};

	// 	zeroCounter += acc;

	// };

	// return zeroCounter;


