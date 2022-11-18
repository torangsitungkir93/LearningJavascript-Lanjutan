

function panggilRegExp(){
    let data = `Belajar satu tahun bersama niomic`;
    let str = new RegExp(/niomic/);

    console.log(str.exec(data));
}

panggilRegExp();