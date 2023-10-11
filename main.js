
// Program Dependencies
const prompt = require('prompt-sync')();
const process = require('process');
const validate = require('./validation.js');
const colors = require('colors');

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
        ?  console.log("\n-----------")
        : console.log(" ")
    }

    console.log("\n")
}

const pickBoardPosition = () => {
   
    let row = null;
    let column = null;


    ((count % 2) === 0) ? console.log("player 1") : console.log("player 2");


    while(true) {


        // Validation for Row
        while(true){
            row = prompt("Enter a Row Number (1 - 3):");
    
            if(row > 3 || row < 1 || row === NaN || isNaN(row)){
                console.log("Invalid Input, Please Try again")
            } else{
                break;
            }
        }
    
        // Validation for Column
        while(true){

            column = prompt("Enter The Column Number (1 - 3): ");

            if( column > 3 || column < 1 || column === NaN || isNaN(column)){
                console.log("Invalid Input, Please Try again")
            } else {
                break;
            }
        }


        // Validation if a board position has value
        if (!BOARD[row - 1][column - 1].includes(" ")){
            console.log("Invalid input, The current board position has a value, please try again");
        } else {
            break;
        }
    }

    
    

   
    if( (count % 2) === 0){
        BOARD[row - 1][column - 1] = "O";
    } else{
        BOARD[row - 1][column - 1] = "X";
    } 
}

while(count != 9){
    iterateThroughBoard();

    pickBoardPosition();
    if(validate(BOARD)){
        iterateThroughBoard();
        console.log("You Won");
        
        break;
    }
    count++;
}


const welcomePage = () => {
    console.log("WELCOME TO TIK-TAC-TOE PROGRAM\n");

    while (true){
        console.log("1 - Start");
        console.log("2 - vs AI");
        console.log("3 - Exit Program\n");
        
        let choice = prompt("Choice: ");

        if (choice > 3 || choice < 1 || isNaN(choice)) { 
            console.log(colors.error("Invalid Input, Please Try Again\n"));
        } else {
            break;
        }
    }
}


const startPage = () => {
    const firstPlayerName = prompt("First player name: ")
    const secondPlayerName = prompt("Second player name: ")



}






