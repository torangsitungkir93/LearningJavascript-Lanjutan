

let peoples =[
    {
        name: `"Torangto Situngkir"`,
        gender: `"male"`
    },
    {
        name : `Siti`,
        gender : `female`
    },
    {
        name : `Cindy`,
        gender : `female`
    }
];

let female = peoples.filter(people => {
    return people.gender === `female`;
})

console.group(female);