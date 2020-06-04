export class Photo {
  public id: number;
  public name: string;
  public photoUrl: string;

  constructor(id: number, name: string, photoUrl: string) {
    this.id = id;
    this.name = name;
    this.photoUrl = photoUrl;
  }
}
