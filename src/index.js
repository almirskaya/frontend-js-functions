function min(array){
	if (Boolean(array)===false){
		return undefined;
	}
	 array=array.filter(
	
	function (value){
		return(typeof value==="number");
	}
);
	var min_num=array[0];
	array.forEach(
		function minValue(value){
			if (min_num>value){
			min_num=value;
		}}
	);
	return min_num;
}

function max(array){
	if (Boolean(array)===false){
		return undefined;
	}
	 array=array.filter(
	function(value){
		return(typeof value==="number");
	}
);
	var max_num=array[0];
	array.forEach(
		function maxValue(value){
			if (max_num<value){
			max_num=value;
		}}
	);
	return max_num;
}

function sum() {		
	var getSum=0;
	for(var i=0;i<arguments.length;i++){
		if (typeof (arguments[i])!=="number"){
		continue}
		getSum += arguments[i];
	}
	return getSum;
}

