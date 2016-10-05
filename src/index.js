function getNumericValues(array) {
	return array.filter(
		function(value){
			return (typeof value==='number');
		})
};

function min(array){
	if (!array){
		return;
	}
	array = getNumericValues(array)
	var min_num=array[0];
	return array.sort(function(a,b){
		return a-b;
	})[0]
};

function max(array){
	if (!array){
		return;
	}
	array = getNumericValues(array)
	var max_num=array[0];
	return array.sort(function(a,b){
		return a-b;
	})[array.length-1]
};

function sum() {		
	var getSum=0;
	for(var i=0;i<arguments.length;i++){
		if (typeof (arguments[i])!=="number"){
		continue}
		getSum += arguments[i];
	}
	return getSum;
}

