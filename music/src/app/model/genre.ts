export class Genre {
  id: number = undefined;
  name: string = undefined;
  img: string = undefined;

  constructor(
    id: number,
    name: string,
    img: string,

  ) {
    this.id = id;
    this.name = name;
    this.img = img;

  }
}
