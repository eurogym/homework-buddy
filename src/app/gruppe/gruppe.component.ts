import { Component, OnInit } from '@angular/core';

import { GruppeFBListService} from '../shared/gruppe-fb-list.service';

@Component({
  selector: 'app-gruppe',
  templateUrl: './gruppe.component.html',
  styleUrls: ['./gruppe.component.scss']
})
export class GruppeComponent implements OnInit {

  public Gruppenname = '';
  public Beschreibung = '';

  constructor(public GruppenListService: GruppeFBListService) {
  }

  ngOnInit(): void {
  }
  public addGruppe(): void {
  
    if (this.Gruppenname ) {
      this.GruppenListService.addGruppe(this.Gruppenname, this.Beschreibung);
      this.Gruppenname = '';
      this.Beschreibung = '';
    }
  }
}