let intToRoman = function(num) {
    let result = '';
    let arrayRomanThousands = ['M', 'MM', 'MMM'];
    let arrayRomanHundreds = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    let arrayRomanTens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    let arrayRomanUnit = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

    let thousands = Math.floor( num / 1000 );
    let hundreds = Math.floor( num / 100 ) % 10;
    let tens = Math.floor( num / 10 ) % 10;
    let unit = num % 10;

    for (i=0; i<arrayRomanThousands.length; i++) {
        if (i+1 === thousands) {            
            result = arrayRomanThousands[i];
            break;
        }
    }
    for (i=0; i<arrayRomanHundreds.length; i++) {
        if (i+1 === hundreds) {            
            result += arrayRomanHundreds[i];
            break;
        }
    } 
    for (i=0; i<arrayRomanTens.length; i++) {
        if (i+1 === tens) {            
            result += arrayRomanTens[i];
            break;
        }
    }
    for (i=0; i<arrayRomanUnit.length; i++) {
        if (i+1 === unit) {            
            result += arrayRomanUnit[i];
            break;
        }
    }

    return result;
};



intToRoman(1);
