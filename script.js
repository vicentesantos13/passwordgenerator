let lettersUC = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
let lettersLC = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let symbols = ['!', '@', '#', '$', '%', '¨', '&', '*', '(', ')', '-', '=', '+', '|', ',', '.', ':', ';', '?', '/', '[', ']', '{', '}'];
let password = [];
let showpassword;
let qtd = 4;
let i = 0;

document.querySelector('.qtd').innerHTML = qtd;
document.querySelector('.generate-button').addEventListener('click', generatePassword);



document.querySelector('.qtd-minus').addEventListener('click', () => {
    if (qtd > 4) {
        qtd--;
        document.querySelector('.qtd').innerHTML = qtd;
    }
});

document.querySelector('.qtd-more').addEventListener('click', () => {
    if (qtd < 20) {
        qtd++;
        document.querySelector('.qtd').innerHTML = qtd;
    };
});

const ucl = document.getElementById('ucl');
const lcl = document.getElementById('lcl');
const num = document.getElementById('num');
const sym = document.getElementById('sym');


function generatePassword() {
    password = [];
    if (ucl.checked || lcl.checked || num.checked || sym.checked) {

        for (i = 0; i < qtd;) {

            if (ucl.checked) {
                if (i < qtd) {
                    let pswU = lettersUC[Math.floor(Math.random() * lettersUC.length)];
                    password.push(pswU);
                    i++;
                }
            }
            if (lcl.checked) {
                if (i < qtd) {
                    let pswL = lettersLC[Math.floor(Math.random() * lettersLC.length)];
                    password.push(pswL);
                    i++;
                }
            }
            if (num.checked) {
                if (i < qtd) {
                    let pswN = numbers[Math.floor(Math.random() * numbers.length)];
                    password.push(pswN);
                    i++;
                }
            }
            if (sym.checked) {
                if (i < qtd) {
                    let pswS = symbols[Math.floor(Math.random() * symbols.length)];
                    password.push(pswS);
                    i++;
                }
            }

        }
        document.querySelector('.qtd').innerHTML = qtd;
    } else {
        alert('select any option!');
    }
    show();
}

function show() {
    showpassword = password.join('');
    document.querySelector('.text-password').innerHTML = showpassword;
    
}

document.querySelector('.password img').addEventListener('click', copy);

function copy() {
    let copyText = document.querySelector('.text-password').innerHTML;
    navigator.clipboard.writeText(copyText);
}