class Person {
    constructor(name, surname, address, phoneNumber){
        if(this.constructor == Person){
            throw new Error("Ulanish yo'q ! .")
        }

        this._name = name;
        this._surname = surname;
        this._address = address;
        this._phoneNumber = phoneNumber;
    }
};

//student's class
class Student extends Person{
    #studentClass;
    constructor(name, surname, address, phoneNumber, studentClass){
        super(name, surname, address, phoneNumber);

        this.#studentClass = studentClass;
    } 
};

//new class Student
const student = new Student('Ilyos', 'Umirzoqov', 'Samarqand', 990316906, '10-A');
console.log(student);



// console.log(
    // `${student._name} ${student._surname} ${student._address}da yashaydi va uning telefon raqami +998${student._phoneNumber}`
// )