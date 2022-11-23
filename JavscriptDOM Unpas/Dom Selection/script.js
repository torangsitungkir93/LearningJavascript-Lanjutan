// DOM Selection
// 1. getElementById // Artinya meminta javascript untuk mengambil id dalam dokumen

const judul = document.getElementById(`judul`);
judul.style.color = `#FC2EA3`;
judul.style.backgroundColor = `#E0E0E0`;
judul.innerHTML = `Torangto Situngkir`;

// document.getElementsByTagName() -> HTMCollections

const p = document.getElementsByTagName(`p`); // !Mengambil semua tag p
p[2].style.backgroundColor = `lightblue`;

const h1 = document.getElementsByTagName(`h1`)[0]; // !Mengambil hanya index ke 0 saja
h1.style.fontSize = `50px`;

// document.getElementsByClassName() -> HTMLCollection

const p1 = document.getElementsByClassName(`p1`);
p1[0].innerHTML = `Ini diubah dari javascript`;

// !document.querySelector() -> Hanya mengembalikan 1 Element
const paragraf4 = document.querySelector(`#b p`);
paragraf4.style.fontSize = `30px`;

const li2 = document.querySelector(`section#b li:nth-child(2)`);
li2.style.backgroundColor = `orange`;

const semuaP = document.querySelectorAll(`p`); // !-> mengembakujan semua element p dengan nodelist

// * Menggunakan Root Node

const sectionB = document.getElementById(`b`);
const p4 = sectionB.querySelector(`p`); 