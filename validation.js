function validate(BOARD) {

    if( (BOARD[0][0] === BOARD[0][1] && BOARD[0][1] === BOARD[0][2] && !BOARD[0][0].includes(" ")) || 
        (BOARD[1][0] === BOARD[1][1] && BOARD[1][1] === BOARD[1][2] && !BOARD[1][0].includes(" ")) ||
        (BOARD[2][0] === BOARD[2][1] && BOARD[2][1] === BOARD[2][2] && !BOARD[2][0].includes(" ")) ||
        (BOARD[0][0] === BOARD[1][0] && BOARD[1][0] === BOARD[2][0] && !BOARD[0][0].includes(" ")) ||
        (BOARD[0][1] === BOARD[1][1] && BOARD[1][1] === BOARD[2][1] && !BOARD[0][1].includes(" ")) ||
        (BOARD[0][2] === BOARD[1][2] && BOARD[1][2] === BOARD[2][2] && !BOARD[0][2].includes(" ")) ||
        (BOARD[0][0] === BOARD[1][1] && BOARD[1][1] === BOARD[2][2] && !BOARD[0][0].includes(" ")) ||
        (BOARD[0][2] === BOARD[1][1] && BOARD[1][1] === BOARD[2][0] && !BOARD[0][2].includes(" "))) return true
    return false
}
  
module.exports = validate;