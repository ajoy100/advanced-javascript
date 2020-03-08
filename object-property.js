const students=[
    {id:21,name:"Omor Sunny "},
    {id:31,name:"Maaannaaaaa"},
    {id:41,name:"Moyouri"},
    {id:51,name:"DeepJol"}
];
const names=students.map(s=>s.name);
const ids=students.map(s=>s.id);
const bigger=students.filter(s=>s.id>30);
const biggerOne=students.find(s=>s.id>30);
console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne);