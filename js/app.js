// console.log("hello world")

const button=document.createElement("Button")
button.innerText="Submit"
button.addEventListener("click,", () =>{   
}
)
function Submit(){

}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1f01566881msh9a32412bfaee0d9p19eac8jsnaaa4bb686b9a',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};

fetch('https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


