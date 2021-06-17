import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  menus: any[] = [];

  constructor(private serviceDashboard: DashboardService) { }

  ngOnInit() {
    this.serviceDashboard.getMenu().valueChanges.pipe(
      take(1),
      tap(({data}) => {
        const {obtenerMenus} = data;
        console.log(data.obtenerMenus)
        this.menus = data.obtenerMenus;
      },
       err => {
        console.log(err.message);
      },
      )
    ).subscribe()
  }

}
