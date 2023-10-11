
// Program Dependencies
const prompt = require('prompt-sync')();
const process = require('process');
const validate = require('./validation.js');
const colors = require('colors');
let firstPlayerName = "";
let secondPlayerName = "";

const COLUMN = 3;
const ROWS = 3;
let count = 0;
let BOARD = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });



const iterateThroughBoard = () => {

    console.log("\n")

    for( let i = 0; i < COLUMN; i++){
        for(let j = 0; j < ROWS; j++){

            if (BOARD[i][j] === 'X')
            {
                (j === ( ROWS - 1 )) 
                ? process.stdout.write(colors.green(` ${BOARD[i][j]} `)) 
                : process.stdout.write(colors.green(` ${BOARD[i][j]} `) + "|"); 
            }
            else {
                (j === ( ROWS - 1 )) 
                ? process.stdout.write(colors.red(` ${BOARD[i][j]} `)) 
                : process.stdout.write(colors.red(` ${BOARD[i][j]} `) + "|"); 
            }
        }
        (i !== ( ROWS - 1))
        ? console.log("\n———————————")
        : console.log(" ")
    }

    console.log("\n")
}

const pickBoardPosition = () => {
    let row = null;
    let column = null;

    ((count % 2) === 0) 
    ? console.log(`Hello ${firstPlayerName} it is now your turn, Choose your move wisely!\n`)
    : console.log(`Hello ${secondPlayerName} it is now your turn, Choose your move wisely!\n`);

   do {
        // Validation for Row
        do{
            row = prompt("Enter a Row Number (1 - 3):");
    
            if(row > 3 || row < 1 || row === NaN || isNaN(row)) {
                console.log(colors.error("Invalid Input, Please Try again"));
            } 
        } while ( row > 3 || row < 1 || row === NaN || isNaN(row) )
    

        // Validation for Column
        do {
            column = prompt("Enter The Column Number (1 - 3): ");

            if( column > 3 || column < 1 || column === NaN || isNaN(column)){
                console.log("Invalid Input, Please Try again")
            }
        } while ( column > 3 || column < 1 || column === NaN || isNaN(column))

        // Validation if a board position has value
        if (!BOARD[row - 1][column - 1].includes(" ")){
            console.log(colors.error("Invalid input, The current board position has a value, please try again"));
        } 
    } while (!BOARD[row - 1][column - 1].includes(" "))

    (count % 2) === 0 ?  BOARD[row - 1][column - 1] = "O" : BOARD[row - 1][column - 1] = "X";
}

const welcomePage = () => {
    console.log("Welcome to the Tic-Tac-Toe game! Enjoy some thrilling matches of strategy and skill.\n");

    while (true){
        console.log("1 - Start");
        console.log("2 - vs AI");
        console.log("3 - Rules");
        console.log("4 - Exit Program\n");

        let choice = prompt("Choice: ");

        switch(choice){
            case "1":
                startPage();
                break;
            case "2":
                break;
            case "3":
                break;
            case "4":
                self.close();
                break;
            default: console.log(colors.error("Invalid Input, Please Try Again"))
        }
    }
}

const startPage = () => {
    console.log("Please carefully follow the instruction provided.\n")

    firstPlayerName = prompt("First player name: ")
    secondPlayerName = prompt("Second player name: ")

    while(count != 9){
        console.log(`Hello, ${firstPlayerName} and ${secondPlayerName}! Get ready for an exciting game of Tic-Tac-Toe.\n`);
    
        iterateThroughBoard();
        pickBoardPosition();

        if(validate(BOARD)){
            iterateThroughBoard();
            (count % 2) === 0 
            ? console.log(`Congrats ${firstPlayerName}, You are the winner of this game!`)
            : console.log(`Congrats ${secondPlayerName}, You are the winner of this game!`)
            welcomePage();
        }
        count++;
    }
}

welcomePage();




