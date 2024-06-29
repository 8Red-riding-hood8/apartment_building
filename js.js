class Human {
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }
}

class Apartament {
    residents = [];

    addResident(human) {
        if(human instanceof Human){
            this.residents.push(human);
        } else {
            console.log('Error function addResident');
        }
    }
}

class Building {
    apartaments = [];
    constructor(max_amount_apartaments){
        this.max_amount_apartaments = max_amount_apartaments;
    }

    addApartment(apartament){
        if(apartament instanceof Apartament){
            this.apartaments.push(apartament);
        }else {
            console.log('Error function addApartment');
        }
    }
}

let human_woman = new Human('Mariia', 'female');
let human_man = new Human('Dima', 'male');

let apartament_first = new Apartament();
let apartament_second = new Apartament();

apartament_first.addResident(human_woman);
apartament_second.addResident(human_man);

console.log(apartament_first);
console.log(apartament_second);

let building = new Building('20');
building.addApartment(apartament_first);
building.addApartment(apartament_second);

console.log(building);




