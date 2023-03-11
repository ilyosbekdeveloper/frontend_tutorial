class Person {
    constructor(name, surname, address, phoneNumber){
        this._name = name;
        this._surname = surname;
        this._address = address;
        this._phoneNumber = phoneNumber;
    }
}
//new person
const newPerson = new Person('Ilyosbek', 'Umirzoqov', 'Samarqand', '+998990316906');

//change address
newPerson._address = 'Toshkent';

console.log(newPerson);