/**
* Clase LocalizacionUseCase.
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    LocalizacionUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalizacionService } from '../../../data/localizacion.services';
import { IResponseStatus } from '../../../data/base/interfaces/i-response-status';
import { ILocalizacion, ILocalizacionRs } from '../interfaces/i-localizacion';



@Injectable({
	providedIn: 'root',
})
export class LocalizacionUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilizados en los casos de uso
	 */
	constructor()
	{
	}
	localizacionService: LocalizacionService = inject(LocalizacionService)

	/**
	* Obtiene el/los registros
	* @return Promise<IResponseStatusViewModel<ILocalizacionRs>>
	*/
	public async getAllLocalizacion(): Promise<IResponseStatus<ILocalizacionRs>> {
	return this.localizacionService.getAllProvincia();
	}

	/**
	* Obtiene el registro por id
	* @param Localizacion: ILocalizacion
	* @return Promise<IResponseStatusViewModel<ILocalizacionRs>>
	*/
	public async getCantonByIdProvincia(localizacion: ILocalizacion): Promise<IResponseStatus<ILocalizacionRs>> {
	return await this.localizacionService.getCantonByIdProvincia(localizacion);
	}

	/**
	* Obtiene el registro por id
	* @param Localizacion: ILocalizacion
	* @return Promise<IResponseStatusViewModel<ILocalizacionRs>>
	*/
	public async getParroquiaByIdCanton(localizacion: ILocalizacion): Promise<IResponseStatus<ILocalizacionRs>> {
    return await this.localizacionService.getParroquiaByIdCanton(localizacion);
    }
}
