// Descifra el siguiente secreto:


var secret =
    "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
var fraseSecreta = '';

function decrypt(secret) {
    for (i = 0; i < secret.length; i++) {
        letra = secret[i];
        indicePlain = cipher.indexOf(letra, 0) + 1;
        if (indicePlain == 0) {
            letraCipher = ' ';
        } else {
            letraCipher = plain[indicePlain - 1];
        }
        fraseSecreta = fraseSecreta + letraCipher;
    }
    console.log(fraseSecreta);
}
decrypt(secret);