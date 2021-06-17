import { Component, OnInit } from '@angular/core';

import { GruppeFBListService} from '../shared/gruppe-fb-list.service';
import { UserService } from '../shared/user.service';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog"

@Component({
  selector: 'app-gruppe',
  templateUrl: './gruppe.component.html',
  styleUrls: ['./gruppe.component.scss']
})
export class GruppeComponent implements OnInit {

  public Gruppenname = '';
  public Beschreibung = '';
  public displayedColumns = ['Löschen', 'groupName', 'groupDescription'];


  constructor(public GruppenListService: GruppeFBListService, public usrService: UserService, 
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    const dialogConfig = new MatDialogConfig();
    let gruppeDialog =  this.dialog.open(GruppeComponent, dialogConfig);
   }

  public addGruppe(): void {

    if (this.Gruppenname ) {
      this.GruppenListService.addGruppe(this.Gruppenname, this.Beschreibung);
      this.Gruppenname = '';
      this.Beschreibung = '';
    }
  }
}
