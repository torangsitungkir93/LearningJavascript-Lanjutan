// DOM Manipulation -> Untuk mengubah/menambah/menghapus element kita pada html
// Buat elemnt baru

const pBaru = document.createElement(`p`);
const teksPBaru = document.createTextNode(`Paragraf Baru`);

// Simpan tulisan kedalam paragraf 
pBaru.appendChild(teksPBaru);

// Simpan pbaru di akhir Section A
const sectionA = document.getElementById(`a`);
sectionA.appendChild(pBaru);

const liBaru = document.createElement(`li`);
const teksLiBaru = document.createTextNode('Li Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector(`section#b ul`);
const li2 = ul.querySelector(`section#b ul li:nth-child(2)`);

ul.insertBefore(liBaru,li2);

// Remove Element
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// Replace Element
const sectionB = document.getElementById(`b`);
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement(`h2`);
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru,p4);

pBaru.style.backgroundColor = `lightgreen`;
liBaru.style.backgroundColor = `lightgreen`;
h2Baru.style.backgroundColor = `lightgreen`;
