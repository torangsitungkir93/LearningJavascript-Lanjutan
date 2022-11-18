

function panggilNumber(){
    let a ='9';
    let b =3;

    let hasil = a+b;
    let hasil2 = Number(a)+3;

    console.log(hasil);
    console.log(hasil2);
    console.log("=================");
}

function panggilParse(){
    let a = `12.78`;
    let b = `9 Naga`;
    let c = `100.99`;

    let hasil1=parseInt(a);
    console.log(hasil1);

    let hasil2 = parseInt(b);
    console.log(hasil2);

    let hasil3 = parseInt(c);
    console.log(hasil3);

    let hasil4 = parseFloat(a)
    console.log(hasil4);

}

panggilNumber();
panggilParse();