

function panggilFilterParameters(value){
    const arr = [
        {negara : `Indonesia`,benua : `Asia`},
        {negara : `Jerman`,benua : `Eropa`},
        {negara : `Spanyol`,benua : `Eropa`},
        {negara : `Korea`,benua : `Asia`},
        {negara : `Portugal`,benua : `Eropa`},
        {negara : `Amerika Serikat`,benua : `Amerika`}
    ];

    console.log(`Benua Asia`);
    const benuaAsia = arr.filter(item => {
        return item.benua === `Asia`;
    });
    console.log(benuaAsia);

    console.log(`=====================`);
    
    const benuaEropa = arr.filter(item => {
        return item.benua === `Eropa`;
    });
    console.log(benuaEropa);

}

panggilFilterParameters();