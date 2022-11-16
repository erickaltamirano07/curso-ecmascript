var lastName='David';
lastName='Oscar';
console.log(lastName);


let lastName='David';
lastName='Oscar';
console.log(lastName);

const lastName='David';
lastName='Oscar';//No se puede reaccinar un valor con const
console.log(lastName);


const fruits =() =>{
    if(true){
        var fruit1='apple'; //funtion scope
        let fruit2='kiwi';//block scope
        const fruit3='Banana';//block scope
    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}
fruits();