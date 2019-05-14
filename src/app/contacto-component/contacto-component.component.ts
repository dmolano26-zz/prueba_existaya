import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../services/rest-api.service";

@Component({
  selector: 'app-contacto-component',
  templateUrl: './contacto-component.component.html',
  styleUrls: ['./contacto-component.component.scss']
})
export class ContactoComponentComponent implements OnInit {
  /* Autor: Diego Molano
   * Fecha: 13 Mayo 2019
   * Descripción: Componente encargado del formulario de contacto
   */
  departamentos:any;
  ciudades:any;
  constructor(public restApi: RestApiService) {
    this.getDepartamentos();
   }

  ngOnInit() {
  }

  getDepartamentos() {
    /* Autor: Diego Molano
     * Fecha: 13 Mayo 2019
     * Descripción: Función encargada de obtener los departamentos por medio
     * de petición al servicio REST
     * Entrada: N/A
     * Salida: Objeto departamentos con la información obtenida del servidor
     */
    this.restApi.getDepartamentos()
    .then(data => {
      this.departamentos = data;
    });
  }

  changed(cod_departamento:string){
    /* Autor: Diego Molano
     * Fecha: 13 Mayo 2019
     * Descripción: Función encargada de obtener las ciudades por medio
     * de petición al servicio REST cuando el departamento cambia
     * Entrada: cod_depto
     * Salida: Objeto ciudades con la información obtenida del servidor
     */
    if (cod_departamento != '-') {
      this.restApi.getMunicipio(cod_departamento)
      .then(data => {
        this.ciudades = data;
      });
    } else {
      this.ciudades = [];
    }    
  }

}
