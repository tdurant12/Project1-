// console.log("hello world")


class love {
    constructor(love) {
      this.state = {
        fname:'',
        sname:'',
       Percentage: '',
       Result:''
    }
  }
}
function Submit(){
    if(this.state.fname ==""|| this.state.sname== ""){
    }

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
    
window.onload = (event) =>{
    document.querySelector('form').addEventListener('submit', (event) => {

        const userInput = document.querySelector('input type="text1"]').value
        const userInput1= document.querySelector('input type="text2"]').value
        fetch('https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John' + userInput).then(response => {
            return response.json()
        }).then(
            json => {
                document.querySelector('# Your Name').innerText = data.YourName
                document.querySelector('#Crushes Name ').innerText = data.CrushesName
                document.querySelector('#Percentage').innerText = data.Percentage
                },
            err => console.log(err)
        )
    })
}


function Compatibility(){
const YourName= document.getElementById("User input").value
const CrushesName= document.getElementById("userInput1").value


window.onload= function(){
const button=document.createElement("Submit")
button.innerText="Submit"
button.addEventListener("click", Submit)};
}