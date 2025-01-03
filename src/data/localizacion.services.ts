/**
* Clase TblMenuService que extiende de ATblMenuService.
* Este archivo se complementa con el archivo ATblMenuService.
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    TblMenuService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { StatusResponseService } from './base/services/status-response.service';
import { IResponseStatus } from './base/interfaces/i-response-status';
import { ILocalizacion, ILocalizacionRs } from '../domain/localizacion/interfaces/i-localizacion';
import { IResultApi } from './base/interfaces/i-result-api';

const apiUrlRegistroSocial: string = environment.apiUrlRegistroSocial;

@Injectable({
	providedIn: 'root',
})

export class LocalizacionService  {

	/**
	* Constructor
	* Se pueden llamar los servicios complementarios para este servicio
	* @param _http: HttpClient, _statusResponseService: StatusResponseService
	* @return LocalizacionService
	*/
	constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
	}



	/**
	* Obtiene el/los registros
	* @return Promise<IResponseStatus<ILocalizacionRs>>
	*/
	public getAllProvincia(): Promise<IResponseStatus<ILocalizacionRs>>{
	const url = `${apiUrlRegistroSocial}query/localizacion/findAllProvincia`;
	return new Promise<IResponseStatus<ILocalizacionRs>>((resolve, reject) => {
    this._http.get<IResultApi>(url)
    .subscribe({
      next: (response: IResultApi) => {
        resolve(this._statusResponseService.succes<ILocalizacionRs>(response));
      },
      error: (error) => {
        reject(this._statusResponseService.error<ILocalizacionRs>(error));
      }
    });
  });
	}


	/**
	* Obtiene el registro actual
	* @param id_menu: ILocalizacion
	* @return Promise<IResponseStatus<ILocalizacionRs>>
	*/
	public getCantonByIdProvincia(localizacion: ILocalizacion): Promise<IResponseStatus<ILocalizacionRs>>{
    const url = `${apiUrlRegistroSocial}query/localizacion/findCantonByIdProvincia`;
    return new Promise<IResponseStatus<ILocalizacionRs>>((resolve, reject) => {
      this._http.post<IResultApi>(url, localizacion)
      .subscribe({
        next: (response: IResultApi) => {
          resolve(this._statusResponseService.succes<ILocalizacionRs>(response));
        },
        error: (error) => {
          reject(this._statusResponseService.error<ILocalizacionRs>(error));
        }
      });
    });
  }

  	/**
	* Obtiene el registro actual
	* @param id_menu: IGetTblMenuById
	* @return Promise<IResponseStatus<IGetTblMenuByIdRs>>
	*/
	public getParroquiaByIdCanton(localizacion: ILocalizacion): Promise<IResponseStatus<ILocalizacionRs>>{
    const url = `${apiUrlRegistroSocial}query/localizacion/findParroquiaByIdCanton`;
    return new Promise<IResponseStatus<ILocalizacionRs>>((resolve, reject) => {
      this._http.post<IResultApi>(url, localizacion)
      .subscribe({
        next: (response: IResultApi) => {
          resolve(this._statusResponseService.succes<ILocalizacionRs>(response));
        },
        error: (error) => {
          reject(this._statusResponseService.error<ILocalizacionRs>(error));
        }
      });
    });
  }
}
