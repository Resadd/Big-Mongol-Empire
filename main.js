//1.tapsiriq

const celme = ['1220','Cingiz','Xan']
function reverseArray(arr){
    return arr.reverse()
}
console.log(reverseArray(celme))

//2.tapsiriq

const hulaku =['Blorgous','Glamyx','Wegord','SpaceKing'];
hulaku.forEach((item)=>{
  console.log("Oh powerfull"+" "+item+" "+"we humans offer our unconditional surrender")
});

//3.tapsiriq
const baycu = [
    'gameboys',
    'skateboards',
    'backwards hats',
    'my room',
    'temporary tattoos'
];
const kutay = [
    'sweaters',
    'skateboards',
    'family-night',
    'my room'
];
function cuci (baycu,kutay){
    baycu.forEach((item)=>{
        kutay.forEach((element)=>{
            if(item==element){
                console.log(item)
            }
        })
    })
}
cuci(baycu,kutay)

//4.tapsiriq

const meal = [
    { name: 'arugula', source: 'plant' },
    { name: 'tomatoes', source: 'plant' },
    { name: 'lemon', source: 'plant' },
    { name: 'olive oil', source: 'plant' },
  ];
  const dinner = [
    { name: 'hamburger', source: 'meat' },
    { name: 'cheese', source: 'dairy' },
    { name: 'ketchup', source: 'plant'},
    { name: 'bun', source: 'plant' }
  ];
  function  isTheDinnerVegan (arr){
    for (let i=0;i < arr.length;i++){
        if(arr[i].source !== 'meat'){
            return false
        }
        else {
            return true
        }
    }
  }
  console.log(isTheDinnerVegan(meal));
  console.log(isTheDinnerVegan(dinner));