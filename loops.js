
for (let l=0; l<11; l++){
    console.log(l)
};

for (let k=6; k>0; k-- ){
    console.log(k)
};

let i=5;
while (i<11) {
    console.log(i)
    ,i++
};

let p=8;
while(p>0){
    console.log(p)
    ,p--
};

let t=0;
do{
    console.log(t),t++
} while(t<5);


let q=4
do{
    console.log(q),q--
} while(q>0);

const student={
    name: 'Owais Khan',
    counter:'Pakistan',
    cost:'Afridi',
    age:'19'
};

for (let details in student){
    console.log(details,student[details])
};

const friuts=['apple','banana','mango']

for (let ok of friuts){
    console.log(ok);
};