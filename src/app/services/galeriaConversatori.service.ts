import { Injectable } from "@angular/core";

import { Galeria } from "./galeriaConsumo.service";

@Injectable()
export class GaleriaConversatorioService {
    private fotosConversatorio:Galeria[] = [
        {
            rutaImg: "assets/img/conversatorio4.jpg",
            altImg: "conversatorio4"
        },
        {
            rutaImg: "assets/img/conversatorio5.jpg",
            altImg: "conversatorio5"
        },
        {
            rutaImg: "assets/img/conversatorio3.jpg",
            altImg: "conversatorio3"
        },
        {
            rutaImg: "assets/img/conversatorio8.jpg",
            altImg: "conversatorio8"
        },
        {
            rutaImg: "assets/img/conversatorio7.jpg",
            altImg: "conversatorio7"
        },
        {
            rutaImg: "assets/img/conversatorio1.jpg",
            altImg: "conversatorio1"
        },
        {
            rutaImg: "assets/img/conversatorio6.jpg",
            altImg: "conversatorio6"
        },
        {
            rutaImg: "assets/img/conversatorio2.jpg",
            altImg: "conversatorio2"
        },
    ]

    getFotosConversatorio():Galeria[]{
        return this.fotosConversatorio
    }
}