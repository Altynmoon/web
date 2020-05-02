export class Author {
  id: number = undefined;
  name: string = undefined;
  history: string = undefined;
  composition: string = undefined;
  img: string = undefined;


  constructor(
    id: number,
    name: string,
    history: string,
    composition:string,
    img: string,

  ) {
    this.id = id;
    this.name = name;
    this.history = history;
    this.composition =  composition;
    this.img = img;

  }
}
