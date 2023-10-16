//Seu JavaScript de validação aqui
let modeSwitch = document.getElementById('modoSwitch');
let corpo = document.querySelector('body');

modeSwitch.addEventListener('change', () => {
    if (modeSwitch.checked) {
        corpo.classList.add('dark'); // Ativar o modo escuro
    } else {
        corpo.classList.remove('dark'); // Desativar o modo escuro
    }
});

//Scroll

const btn= document.getElementById("btnTop")

btn.addEventListener("click",function () {
    window.scrollTo(0,0);
})

