export enum Aligment{
    center,
    start,
    end,
    justify
}


export class Header {
    
    title: string;
    color: string;
    font: string;
    
    constructor(){
        this.title = ""
        this.color = ""
        this.font = ""
    }

    getHeaderDetails(){

        const styles: CSSStyleDeclaration = window.getComputedStyle(document.body);

        this.title = document.title;
        this.color = styles.backgroundColor;
        this.font = styles.fontFamily;

        return [this.title,this.color,this.font];
    }

    /**
     * 
     * @param aligment El align deseado para asignarlo al titulo
     */

    setAlignment(aligment: Aligment){

        if(aligment === Aligment.start || aligment === Aligment.end || aligment === Aligment.center || aligment === Aligment.justify){
            
            const title = document.querySelector('h1');
    
            if(title){ // si existe un elemento h1

                title.textContent = this.title; // asigna el texto
                title.style.textAlign = Aligment[aligment] // asigna el align
                console.log(`Se establecieron los atributos: Titulo: ${this.title} y Align: ${ Aligment[aligment]}`);                

            } else{ // si no existe un elemento h1, lo crea y le asigna el text y el align

                const newTitleElement = document.createElement('h1')
                const body = document.querySelector('body');

                newTitleElement.textContent = this.title;
                newTitleElement.style.textAlign = aligment.toString();

                body?.appendChild(newTitleElement);
            }
        }
    }

    getAttributes(){        
        return [this.title, this.color, this.font]; // devuelve un arreglo con los atributos, para que se pueda trabajar de cualquier forma en el main
    }

}