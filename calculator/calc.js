let calculate = document.querySelector("#calculate");
let buttons= document.querySelectorAll('button');

let string='';

buttons.forEach(ele =>{
	ele.addEventListener('click',(b)=>{
		if(b.target.innerText == '='){
			string = String(eval(string));
			calculate.value = string;
		}
		else if (b.target.innerText=='AC')
		{
			string='';
			calculate.value=string;
		}
		else if (b.target.innerText=='DEL')
		{
			string = string.substring(0,(string.length)-1);
			calculate.value=string;
		}
		else if(b.target.id=='plmin'){
			string=String(-eval(string))
			calculate.value=string;
		}

		else{
			string += b.target.innerText;
			calculate.value=string;
		}
	}
	)
}
);
