const words=document.querySelector('.words');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition=new SpeechRecognition();

recognition.interimResults=true;

let p= document.createElement('p');
words.appendChild(p);


getText=(e)=>{
// p.innerText=e.results[0][0].transcript; 
console.log(e);
 if(e.results[0].isFinal==true){
 words.lastChild.innerText=e.results[0][0].transcript;
let p= document.createElement('p');
words.appendChild(p)
}
else{
words.lastChild.innerText=e.results[0][0].transcript;

}

}

populateDiv=()=>{
// let p= document.createElement('p');
//    words.appendChild(p);
    recognition.start();
}



let text=recognition.addEventListener('result',getText) ;
recognition.addEventListener('end',populateDiv);


recognition.start();


