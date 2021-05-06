import { Component, OnInit } from '@angular/core';

import {addFaecherListService } from '../shared/addFaecher.service';

@Component({
  selector: 'app-fach',
  templateUrl: './addFaecher.component.html',
  styleUrls: ['./addFaecher.component.scss']
})
export class FaecherComponent implements OnInit {

  public Fachname = '';
  public Fachbeschreibung = '';
  public displayedColumns = ['Fachname', 'Fachbeschreibung', 'Löschen' ]

  constructor(public FaecherService: addFaecherListService) {
  }

  ngOnInit(): void {
  }
  public addFach(): void {

    if (this.Fachname ) {
      this.FaecherService.addFach(this.Fachname, this.Fachbeschreibung);
      this.Fachname = '';
      this.Fachbeschreibung = '';
    }
  }
}
