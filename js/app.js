const myURL= 'https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John'
function prompt(){

	alert("You have a "+ "" + getPercentage+ "%"+ ""+ " Chance at Love!")
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9eaadbf430msh0c6ea8a45eeb30bp13fff5jsnab6ea5c9720e',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};


fetch('https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));{
	
		
	}
	



const lover= document.getElementById('lover');

lover.addEventListener('submit',function(e){
	e.preventDefault();


const loveform =new FormData(lover);

const getR= document.getElementById("Get-results")


console.log(([...loveform]),getPercentage +"%")

})

let getPercentage= Math.random() *100
getPercentage= Math.floor(getPercentage) +1
if(getPercentage >80){
	
	}
if(getPercentage >40 && getPercentage <=80){

}
if(getPercentage <=40){
}
if(getPercentage >20 && getPercentage <=40){
}
