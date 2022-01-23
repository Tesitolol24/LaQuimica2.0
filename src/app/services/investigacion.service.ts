export interface Investigacion{
    nombre:string;
    introduccion:string;
    linkDeBusqueda:string;
    rutaImg:string;
    altImg:string;
}

import { Injectable } from "@angular/core";

@Injectable()
export class InvestigacionService {
    
    private temas:Investigacion[] = [
        {
            nombre: "La Quimica Del Cerebro",
            introduccion: "El cerebro, el tejido más noble de nuestro organismo, donde se procesa nuestra experiencia...",
            linkDeBusqueda: "https://drive.google.com/file/d/1n3rJiJIkX-aye_Joz6RpXM_40cOuZXg6/view?usp=sharing",
            rutaImg: "assets/img/cerebro.jpg",
            altImg: "cerebro"
        },
        {
            nombre: "La Qumica Del Cerebro 2",
            introduccion: "Un neurotransmisor es una molécula liberada por las neuronas al espacio sináptico...",
            linkDeBusqueda: "https://drive.google.com/file/d/1gqvEHcK0VensNkVIX_gv5c47rry52AVc/view?usp=sharing",
            rutaImg: "assets/img/cerebro.jpg",
            altImg: "cerebro"
        },
        {
            nombre: "Neurotransmisores Y SPA",
            introduccion: "Una persona lee. Las palabras escritas llegan al cerebro a través de los ojos y se convierten eninformación...",
            linkDeBusqueda: "https://drive.google.com/file/d/1a6wy8xhI-_B1cD3wIXFMKehgBX5dFFWo/view?usp=sharing",
            rutaImg: "assets/img/neurotransmisor.jfif",
            altImg: "neurotransmisor"
        },
        {
            nombre: "Neurotransmisores Y SPA 2",
            introduccion: "Las drogas pueden alterar la manera de pensar, sentir y comportarse de las personas debido a que afectan la neurotransmisión...",
            linkDeBusqueda: "https://drive.google.com/file/d/1L7BngFW2-xtZnXrZFmZ7cGR2JYZYgDrV/view?usp=sharing",
            rutaImg: "assets/img/neurotransmisor.jfif",
            altImg: "neurotransmisor"
        },
        {
            nombre: "Salud En El Cerebro Adicto, Como Las Drogas Anulan Las Capacidades Humanas",
            introduccion: "La adicción a drogas, el juego o hasta el cigarrillo, causa cientos de cambios en la anatomía del cerebro...",
            linkDeBusqueda: "https://drive.google.com/file/d/1guj2R4bW-gJX7919Kq2at_yRSGnW2pgS/view?usp=sharing",
            rutaImg: "assets/img/cerebro-salud.png",
            altImg: ""
        },
        {
            nombre: "Tussi, Marihuana Y Otras Drogas",
            introduccion: "es una feniletilamina psicodélica de la familia 2C. El nombre de 'cocaína rosa'... ",
            linkDeBusqueda: "https://drive.google.com/file/d/1AkghMTywPT7ufWZ_zn1Q_nxjyqO3FzbL/view?usp=sharing",
            rutaImg: "assets/img/tussi.jpg",
            altImg: "Tussi"
        },
        
    ];

    getTemas():Investigacion[]{
        return this.temas;
    }

}