// const close = document.querySelector(`.close`);
// const card = document.querySelector(`.card`);

// close.addEventListener('click',function(){
//     card.style.display = 'none';
//     card
// });

// // ! DOM Traversal

// const semuaClose = document.querySelectorAll(`.close`);
// // const card = document.querySelectorAll(`.card`);

// // for (let i=0;i<semuaClose.length;i++){
// //     semuaClose[i].addEventListener('click',function(e){
// //         // card[i].style.display = 'none';
// //         // semuaClose[i].parentElement.style.display = 'none';
// //         e.target.parentElement.style.display = `none`;
// //     });
// // }

// semuaClose.forEach(function(el){
//     el.addEventListener(`click`,function(e){
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });

// const cards = document.querySelectorAll(`.card`);
// cards.forEach(function(card){
//     card.addEventListener('click',function(e){
//         alert(`ok`);
//     });
// });



const container = document.querySelector(`.container`);

container.addEventListener(`click`,function(e){
    if( e.target.className == `close`){
        e.target.parentElement.style.display = 'none';
    }
});
