export class Recipe{
    public name:string;
    public description: string;
    public imagePath: string;

    constructor(name:string,desc:string, impagePath:string){
        this.name=name;
        this.description=desc;
        this.imagePath=impagePath;
    }
}