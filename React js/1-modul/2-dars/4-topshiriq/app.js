//Subjects class
class Subjects{
    constructor(fan1, fan2, fan3, ...fanlar){
        this._fan1 = fan1;
        this._fan2 = fan2;
        this._fan3 = fan3
        this._fanlar = fanlar;
    };
};

//new Subject class
const subjects = new Subjects('Matematika', 'Tarix','Ingliz-tili', 'Ona-tili', 'Adabiyot');

//Subjects clasini o'zgartirish imkoniyatari;
subjects._fan1 = 'Informatika';  //outuput 'Informatika'

console.log(subjects);