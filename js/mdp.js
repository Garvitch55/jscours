const btn = document.getElementById("btn")
const mdp = document.getElementById("mdp")


btn.addEventListener("click", function (){

generateMdp();
    mdp.innerHTML=password1+password2+password3+password4+password5;
    
})



        













function generateMdp() {
    lowercase = 'abcdefghijklmnopqrstuvwxyz';
    uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    numbers = '0123456789';
    symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    similarChars = '0Ol1I';

    for (let i = 0; i < 24; i++) {

        const randomIndex = Math.floor(Math.random() * lowercase.length);
        password1 = lowercase[randomIndex];
    }
    for (let i = 0; i < 24; i++) {

        const randomIndex2 = Math.floor(Math.random() * uppercase.length);
        password2 = uppercase[randomIndex2];
    }
    for (let i = 0; i < 10; i++) {
        const randomIndex3 = Math.floor(Math.random() * numbers.length);
        password3 = numbers[randomIndex3];
    }
    for (let i = 0; i < 25; i++) {
        const randomIndex4 = Math.floor(Math.random() * symsymbolsbols.length);
        password4 = symbols[randomIndex4];
    }
    for (let i = 0; i < 5; i++) {
        const randomIndex5 = Math.floor(Math.random() * similarChars.length);
        password5 = similarChars[randomIndex5];
    }




}



