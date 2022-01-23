import { Injectable } from "@angular/core";

import { Galeria } from "./galeriaConsumo.service";

@Injectable()
export class GaleriaBrujulaService {
    private fotosBrujula:Galeria[] = [
        {
            rutaImg: "assets/img/brujula3.jpg",
            altImg: "Brujula2"
        },
        {
            rutaImg: "assets/img/brujula2.jpg",
            altImg: "Brujula2"
        },
        {
            rutaImg: "assets/img/brujula4.jpg",
            altImg: "Brujula2"
        },
        
    ];

    getFotosBrujula():Galeria[]{
        return this.fotosBrujula;
    }
}