const message = document.getElementById('msg');
const btn = document.querySelector('button');
let isOn = false


// btn.onclick = () => {
    // isOn = !isOn
    // if (isOn == true){
    //     message.innerHTML = 'You are amazing! 🤗'
    //     btn.innerHTML = 'Happy'
    // }else {
    //     message.innerHTML = 'Oh no! 😥'
    //     btn.innerHTML = 'Sad'
    // }

    // isOn?message.textContent = `you r amazing`:`Oh no`;
    // isOn?btn.innerHTML = `happy`:`Sad`
    // console.log(isOn)


// } 
console.log(message)

function change(){
    isOn=!isOn
    message.textContent = `${isOn?"hello":"hey"}`;

    btn.innerHTML = `${isOn?"happy":"sad"}`;
}
btn.addEventListener("click",change)

let number = [1,2,3,4,5];
