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
class Teacher extends Person{
    #teacherSubject;
    #teacherSubject2;
    constructor(name, surname, address, phoneNumber, teacherSubject, teacherSubject2){
        super(name, surname, address, phoneNumber);

        this.#teacherSubject = teacherSubject;
        this.#teacherSubject2 = teacherSubject2;
    } 
};

//new class Student
const teacher = new Teacher('Ravshan', 'Qosimov', 'Toshkent', 907527819, 'Matematika', 'Kimyo');
console.log(teacher);