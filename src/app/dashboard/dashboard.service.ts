import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { BehaviorSubject } from 'rxjs';

const query = gql `
{
  obtenerMenus {
    _id
    nombre
    imagen
    precio
    categoria {
      nombre
    }
    estado_entrega
    descripcion
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private apollo: Apollo) {
    this.getMenu();
   }

  getMenu(){
    return this.apollo.watchQuery<any>({
      query: query
    })
  }
}
