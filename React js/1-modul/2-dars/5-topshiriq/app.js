class School{
    #student;
    #subjects;
    #teacher;

    constructor(student, subjects, teacher){
        this.#student = student;
        this.#subjects = subjects;
        this.#teacher = teacher;
    }

    //student
    setStudent(student){
        this.#student = student;
    }
    getStudent(){
        console.log(this.#student);
        return this.#student;
    }

    //subjects
    setSubject(subjects){
        this.#subjects = subjects;
    }
    getSubject(){
        console.log(this.#subjects);
        return this.#subjects;
    }

    //teacher
    setTeacher(teacher){
        this.#teacher = teacher;
    }
    getTeacher(){
        console.log(this.constructor.teacher);
        return this.#teacher;
    }
}


const maktab = new School('Student is Iskandar', 'Subjects are math and history', 'Teacher is Ravshan');

console.log(maktab);