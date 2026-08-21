const passwords = [
    "jk12@tu",
    "8k12%tu",
    "dk07@Tu",
    "6D@*tu",
    "Tk88#u",
    "jjkk56@u",
    "RR%12@tu"
];

const result = document.getElementById('result');
const select = document.querySelector('button');

select.addEventListener('click',()=>{
    const pw = passwords[Math.floor(Math.random()*passwords.length)];
    result.textContent = pw;
})