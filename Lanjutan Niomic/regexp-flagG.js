

function panggilRegexp(){

    let str = 'abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz';

    let hasil = str.match(/c/g);
    console.log(hasil);
}

panggilRegexp();