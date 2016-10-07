function isNumber(value){
	return (typeof value === 'number');
};

function getNumericValues(array) {
	return array.filter(isNumber)
};

function sortByAscending(a,b){
	return a - b;
};

function min(array){
	if (!array){
		return;
	}
	array = getNumericValues(array)
	return array.sort(sortByAscending)[0]
};

function max(array){
	if (!array){
		return;
	}
	array = getNumericValues(array)
	return array.sort(sortByAscending)[array.length-1]
};

function sum() {		
	var getSum = 0;
	for(var i = 0;i < arguments.length;i++){
		if (typeof (arguments[i]) !== "number"){
		continue 
	}
		getSum += arguments[i];
	}
	return getSum;
}

