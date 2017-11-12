const generateKey=(size=128)=>{
	let r=Math.random; 
	let string = "";
	while (string.length<size){
		let ch=(Number(r().toString().substr(2,2))%36).toString(36);
		let upper = Number(r().toString()[2])%2;
		if (upper>0)
			ch=ch.toUpperCase();
		string+=ch;
	}
	return string;
};

console.log(generateKey(1000));//Generate key string of length 1000
