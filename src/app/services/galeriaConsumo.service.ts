import { Injectable } from "@angular/core";

export interface Galeria{
    rutaImg:string;
    altImg:string;
}

@Injectable()
export class GaleriaConsumoService {
    private fotosConsumo:Galeria[] = [
        {
            rutaImg: "assets/img/consumo.jpg",
            altImg: "Consumo",
        },
    ];

    getFotosConsumo():Galeria[]{
        return this.fotosConsumo;
    }
}