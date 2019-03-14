import { Ingredient } from '../shared/models/ingredient.model';

export class Recipe{
    public id:number;
    public name:string;
    public description: string;
    public imagePath: string;
    
    constructor(id:number,name:string,desc:string, impagePath:string,public ingredients:Ingredient[]){
        this.id=id;
        this.name=name;
        this.description=desc;
        this.imagePath=impagePath;
    }
}