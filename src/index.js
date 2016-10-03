function min(array){
	var array=array.filter(
	function(value){
		return(typeof value==="number");
	}
);
	var min_num=array[0];
	array.forEach(
		function(minValue){
			if(min_num>minValue)
			min_num=minValue;
		}
	);
	return min_num;
}

function max(array){
	var array=array.filter(
	function(value){
		return(typeof value==="number");
	}
);
	var max_num=array[0];
	array.forEach(
		function(maxValue){
			if(max_num<maxValue)
			max_num=maxValue;
		}
	);
	return max_num;
}

function sum() {		
	var getSum=0;
	for(var i=0;i<arguments.length;i++){
		if(typeof (arguments[i])!=="number")
		continue;
		getSum += arguments[i];
	}
	return getSum;
}
