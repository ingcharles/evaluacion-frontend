/**
* Interface i-tbl-menu..
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    ILocalizacion
* @package
* @subpackage Domain
*/

/**
* Interface que contiene el datos de salida que va al servicio
* @name ILocalizacion
*/

export interface ILocalizacion {
	id?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ILocalizacionRs
*/
export interface ILocalizacionRs {
	id?: string | null;
	nombre?: string | null;
}

