class Person {
    constructor(name="Anonymous", location){
        this.name = name;
        this.location = location;
    }

    getDescription(){
        // return 'Hi! I am ' + this.name + '!';
        return `Hi! I am ${ this.name }! I live at ${this.location }`;
    }

}

class Chef extends Person{
    constructor(name,location,dish){
        super(name,location);
        this.dish=dish;
    }

    getDescription(){
        return super.getDescription() + ` and I sell ${this.dish}.`
    }


}

class Customer extends Person{
    constructor(name,location,wallet){
        super(name,location)
        this.wallet=wallet;
    }

    getDescription(){
        return super.getDescription() + ` and I have ${this.wallet} in my wallet.`
    }


}

const me = new Chef("Chef'oclock", "Bahadurabad","Qorma");
console.log(me.getDescription());

const you = new Customer ("Usman", "Tariq Road","2000");
console.log(you.getDescription());