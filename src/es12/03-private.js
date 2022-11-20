//Declarando
class User{};
//Intancia de una clase
//const newUser = new User();

class user{
    //metodos
    grerting(){
        return 'Hello';
    }
};

const gndx= new user();
console.log(gndx.grerting());
const bebeloper= new user();
console.log(bebeloper.grerting());

//Constructor

class user{
    //Constructor
    constructor(){
        console.log('Nuevo Usuario');
    }
    grerting(){
        return 'Hello';
    }
}

const david= new user();

//this
class user {
    constructor(name){
        this.name=name;
    }
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana= new user('Ana');
console.log(ana.greeting());


//setters and getters
class user{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    //metodos privado se utiliza la #
    #speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    
    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age =n;
    }
}

const bebeloper1 = new user('David', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge=20);

    