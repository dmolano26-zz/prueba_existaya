import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
providedIn: 'root'
})
export class RestApiService {
  apiURL = 'https://www.datos.gov.co/resource/xdk5-pm3f.json';
  constructor(private http: HttpClient) { 
    this.getDepartamentos();
  }

  getDepartamentos() {
    /* Autor: Diego Molano
     * Fecha: 13 Mayo 2019
     * Descripción: Función encargada de obtener los departamentos por medio
     * de petición GET
     * Metodo: GET
     * Entrada: N/A
     * Salida: Objeto con la información obtenida del API Rest
     */
    return new Promise(resolve => {
      this.http.get(this.apiURL+'?$query=select distinct departamento, c_digo_dane_del_departamento').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getMunicipio(cod_depto:string) {
    /* Autor: Diego Molano
     * Fecha: 13 Mayo 2019
     * Descripción: Función encargada de obtener los departamentos por medio
     * de petición GET
     * Metodo: GET
     * Entrada: cod_depto
     * Salida: Objeto con la información obtenida del API Rest
     */
    return new Promise(resolve => {
      this.http.get(this.apiURL+'?c_digo_dane_del_departamento='+cod_depto).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}