import { Component, OnInit } from '@angular/core';
import { GaleriaConsumoService, Galeria } from '../../services/galeriaConsumo.service';
import { GaleriaBrujulaService } from '../../services/galeriaBrujula.service';
import { GaleriaConversatorioService } from '../../services/galeriaConversatori.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  fotosConsumo:Galeria[] = [];
  fotosBrujula:Galeria[] = [];
  fotosConversatorio:Galeria[] = [];

  constructor(private _galeriaConsumoService:GaleriaConsumoService, 
              private _galeriaBrujulaService:GaleriaBrujulaService,
              private _galeriaConversatorioService:GaleriaConversatorioService
  ) { }

  ngOnInit(): void {
    this.fotosConsumo = this._galeriaConsumoService.getFotosConsumo();
    this.fotosBrujula = this._galeriaBrujulaService.getFotosBrujula();
    this.fotosConversatorio = this._galeriaConversatorioService.getFotosConversatorio();
  }

}
