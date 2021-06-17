import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { take, tap } from 'rxjs/operators';

const query = gql `
{
  obtenerOrdenes {
    _id
    usuario {
      nombre
      correo
      telefono
      direccion
    }
    menu {
      nombre
      imagen
      precio
      estado_entrega
      descripcion
    }
    descripcion
    estado_preparacion
    estado_pago
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class TableListService {

  constructor(private apollo: Apollo) {
    this.getOrdenes();
   }

   getOrdenes(){
    return this.apollo.watchQuery<any>({
      query: query
    })
  }
}
