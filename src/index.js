const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = []
    for(let i = 0; i < expr.length; i += 10){
        arr.push(expr.slice(i, i + 10))
    }

    let str = ''
    let arrMorse = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] === '*'){
            str += ' '
        } else {
            for(let j = 9; j >= 0; j -= 2){
                if(arr[i][j - 1] === '1'){
                    arr[i][j] === '1' ? str = '-' + str : str = '.' + str
                }
            }
        }
        arrMorse.push(str)
        str = ''
    }

    return arrMorse.map(e =>{
        if(e === ' '){return ' '}
        return MORSE_TABLE[e]
    }).join('')
}

module.exports = {
    decode
}