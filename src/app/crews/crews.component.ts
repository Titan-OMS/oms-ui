import { Component, OnInit } from '@angular/core';
import {ColDef} from 'ag-grid-community';

@Component({
  selector: 'app-crews',
  templateUrl: './crews.component.html',
  styleUrls: ['./crews.component.scss']
})
export class CrewsComponent implements OnInit {

  columnDefs: ColDef[] = [];
  rowData = [];
  constructor() { }

  ngOnInit(): void {
  }

}
