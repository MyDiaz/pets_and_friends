export interface IAnimal{
     id: number;
     name: string;
     age: number;
     breed: string;
     isAdopted: boolean;
     isVaccine:boolean;
     isSterilized:boolean;
     location:string;
     gender:string;
     type:string; 
     image:string;
}

export interface ApiContactos {
    success : boolean,
    message : string,
    data? : IAnimal[]
}