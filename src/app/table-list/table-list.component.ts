import { Component, OnInit } from '@angular/core';
import { TableListService } from './table-list.service';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  ordenes: any[] = []; 

  constructor(private serviceTable: TableListService) { }

  ngOnInit() {
    this.serviceTable.getOrdenes().valueChanges.pipe(
      take(1),
      tap(({data}) => {
        const {obtenerOrdenes} = data;
        console.log(data.obtenerOrdenes)
        this.ordenes = data.obtenerOrdenes;
      },
       err => {
        console.log(err.message);
      },
      )
    ).subscribe()
  }

}
