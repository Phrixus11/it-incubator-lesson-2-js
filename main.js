let userChoice;
let computerChoice;
let isWinner = false;

while (!isWinner) {

    userChoice = prompt('Выбери камень, ножницы или бумага:');
    userChoice = userChoice.toLowerCase() // toLowerCase() метод позволяций преобразовать все символы строки в нижний регистр  

    let randomNum = Math.floor(Math.random() * 3)

    // if (randomNum === 0) {
    //     computerChoice = 'камень'
    // } else if (randomNum === 1) {
    //     computerChoice = 'ножницы'
    // } else {
    //     computerChoice = 'бумага'
    // }

    switch (randomNum) {
        case 0:
            computerChoice = 'камень'
            break;
        case 1:
            computerChoice = 'ножницы'
            break;
        case 2:
            computerChoice = 'бумага'
            break;
    }

    if (userChoice === 'камень' || userChoice === 'ножницы' || userChoice === 'бумага') {
        alert('Компьютер выбрал: ' + computerChoice)

        // //сравниваем выбор пользователя и компьютера вариант 1
        // if  (userChoice === computerChoice) {
        //     alert('Ничья, играем ещё раз!')
        // } else if ((userChoice === 'камень' && computerChoice === 'ножницы') ||
        // (userChoice === 'ножницы' && computerChoice === 'бумага') ||
        // (userChoice === 'бумага' && computerChoice === 'камень')) {
        //     alert('Ты выиграл!')
        //     isWinner = true
        // } else {
        //     alert('Ты проиграл!')
        //     isWinner = true
        // }

        //сравниваем выбор пользователя и компьютера вариант 2
        if (userChoice === computerChoice) {
            alert('Ничья, играем ещё раз!')
        } else {
            const isUserWinner = 
            (userChoice === 'камень' && computerChoice === 'ножницы') ||
            (userChoice === 'ножницы' && computerChoice === 'бумага') ||
            (userChoice === 'бумага' && computerChoice === 'камень') 
            
            const message = isUserWinner ? 'Ты победил!' : 'Ты проиграл!'
            alert(message)

            isWinner = true
        }
    } else {
        alert('Пожалуйста, введи корректный ход: камень, ножницы или бумага.')
    }


}