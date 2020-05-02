import {Author} from "./author";
import {Genre} from "./genre";

export class Music {
  id: number = undefined;
  name: string = undefined;
  img : string = undefined;
  history: string = undefined;
  author: Author = undefined;
  genre: Genre = undefined;
  text: string = undefined;
  rating: boolean = undefined;
  sources: number = undefined;

  constructor(
    id: number,
    name: string,
    img: string,
    history: string,
    author: Author,
    genre: Genre,
    text: string,
    rating: boolean,
    sources: number,
  ) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.history = history;
    this.author = author;
    this.genre = genre;
    this.text = text;
    this.rating = rating;
    this.sources = sources;
  }
}
