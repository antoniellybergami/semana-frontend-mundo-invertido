const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')


//Quando acontecer o evento de click, realiza a func.
btnSubscribe.addEventListener('click', () => {
    //criaçãoo de um objeto que será salvoo no bdd
    const subscription = {
        nome: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    
    console.log(subscription)
    
    //Depois disso, salvar no bdd
})

