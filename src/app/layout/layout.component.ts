import { Component, OnInit } from '@angular/core';
import DisableDevtool from 'disable-devtool';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /* http://localhost:port?par=jinkies */
    
    DisableDevtool({
      md5: "65e60d4afa599855c4133c06e50c62b9",
      url: "http://www.pjud.cl",
      tkName: "par",
      clearLog: true,
      disableCut: true,
      disableCopy: true,
      disablePaste: true,
    });
  }

}
