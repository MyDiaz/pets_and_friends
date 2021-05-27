import { IAnimal } from '../Interface/ianimal';
export class Animal implements IAnimal{
    public id: number;
    public name: string;
    public age: number;
    public breed: string;
    public isAdopted: boolean;
    public isVaccine:boolean;
    public isSterilized:boolean;
    public location:string;
    public gender:string;
    public type:string;
    public image:string;

    constructor(id:number , name:string, age:number, breed:string, isAdopted:boolean, isVaccine: boolean, isSterilized: boolean, location:string,
        gender: string, type:string, image:string){
        this.id = id;
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.isAdopted = isAdopted;
        this.isVaccine = isVaccine;
        this.isSterilized = isSterilized;
        this.location = location;
        this.gender = gender;
        this.type = type;
        this.image = image;
    }
}



