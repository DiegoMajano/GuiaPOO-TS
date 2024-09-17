export class Song {


    public title: string;
    public genre: string;
    private author: string;

    constructor(title: string, genre: string){
        this.title = title;
        this.genre = genre;
        this.author = "";
    }

    setAutor(author: string){
        this.author = author;
    }

    getAuthor(){
        return this.author;
    }

    showSong(){
        return `Song: ${this.title}. Genre: ${this.genre}. Author: ${this,this.getAuthor()}`
    }
}