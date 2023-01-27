

function getPilihanKomputer(){
    const comp = Math.random();

    if(comp <0.34) return 'gajah';
    if(comp >= 0.34 && comp <0.67 ) return 'orang';
    return 'semut';
}

function getHasil(comp,player){
    
    if(player == comp) return 'SERI !';
    if(player == 'gajah' ) return (comp == 'orang') ? 'MENANG!'
        : 'KALAH!';
    if(player == 'orang' ) return (comp == 'gajah') ? 'KALAH!'
        : 'MENANG!';
    if(player == 'semut' ) return (comp == 'orang') ? 'KALAH!'
        : 'MENANG!';
    return 'semut';
}

// const pGajah = document.querySelector('.gajah');

// pGajah.addEventListener('click',function(){
//     // alert('ok');
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pGajah.className;

//     const hasil = getHasil(pilihanKomputer,pilihanPlayer);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src','img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });


function putar (){
    const imgKomputer = document.querySelector('.img-komputer');
    const gambar = ['gajah','semut','orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function(){
        if(new Date().getTime()-waktuMulai>1000){
            clearInterval;
            return;
        }

        imgKomputer.setAttribute('src',`img/${gambar[i++]}.png`);
        if(i == gambar.length){
            i=0;
        }
    },100);
}

const pilihan = document.querySelectorAll('li img');
const scoreK = document.querySelector('.scoreKomputer');
const scoreP = document.querySelector('.scorePlayer');
let scoreKomputer = 0 ;
let scorePlayer = 0 ;

pilihan.forEach(function(pil){

    pil.addEventListener('click',function(){
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanKomputer,pilihanPlayer);

        putar();

        setTimeout(function(){
            const imgKomputer = document.querySelector('.img-komputer');
            imgKomputer.setAttribute('src','img/' + pilihanKomputer + '.png');
    
            const info = document.querySelector('.info');
           
            info.innerHTML = hasil;
        },1000);

        if(hasil == 'SERI !') {
            scoreKomputer++;
            scorePlayer++;
        }else if(hasil == 'MENANG!'){
            scorePlayer++;
        }else if(hasil == 'KALAH!'){
            scoreKomputer++;
        }

        scoreK.innerHTML = scoreKomputer;
        scoreP.innerHTML = scorePlayer;
    })

});
