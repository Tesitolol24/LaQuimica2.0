import { Component, OnInit } from '@angular/core';
import { Investigacion, InvestigacionService } from '../../services/investigacion.service';

@Component({
  selector: 'app-investigacion',
  templateUrl: './investigacion.component.html',
  styleUrls: ['./investigacion.component.css']
})
export class InvestigacionComponent implements OnInit {

  temas:Investigacion[] = []

  constructor(private _temasService:InvestigacionService) { }

  ngOnInit(): void {
    this.temas = this._temasService.getTemas();
  }

}
