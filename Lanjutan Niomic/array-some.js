

function nilaiSome(){
    let products = [
        {
            name:`Apple`,
            type:`Fruit`
        },
        {
            name:`Monitor`,
            type:`Computer`
        },
        {
            name:`Mango`,
            type:`Fruit`
        },
        {
            name:`Table`,
            type:`Furniture`
        }
    ]
    console.log(
        products.some(product=>product.type === `Fruit`)
    );
};

nilaiSome();