import { Ingredient } from '../shared/models/ingredient.model';

export class Recipe{
    public name:string;
    public description: string;
    public imagePath: string;
    
    constructor(name:string,desc:string, impagePath:string,public ingredients:Ingredient[]){
        this.name=name;
        this.description=desc;
        this.imagePath=impagePath;
    }
}