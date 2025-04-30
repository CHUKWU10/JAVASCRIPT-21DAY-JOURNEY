const message = document.getElementById ('msg');
const btn = document.getElementById("click");

let showHappy = true;

function changeMessage() {
  if (showHappy){
         message.innerHTML = '<p style = color: green;'> 'You are amazing, intelligent, wonderful, awesome and a lover of christ.</p>'
         btn.innerHTML = '😚 happy';
     } else{
         message.innerHTML = 'Am sorry bro, go get a life dude, rubbish'
        btn.innerHTML = '😨 sad!';
     }
}
btn.addEventListener('click', changeMessage);