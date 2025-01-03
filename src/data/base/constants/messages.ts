import { SweetAlertIcon } from "sweetalert2";
export const isWarning: SweetAlertIcon = 'warning';
export const isInfo: SweetAlertIcon = 'info';
export const isSuccess: SweetAlertIcon = 'success';
export const isError: SweetAlertIcon = 'error';
export const messages = {
  required: 'El campo es obligatorio',
  serviceFail: "Acceso denegado al servicio",
  serviceNotFound: "Servicio no disponible",
  successSave: 'registro guardado exitosamente',
  error: 'error al obtener los datos',
  successUpdate: 'registro actualizado exitosamente',
  warningTitle: "¡Advertencia!",
  errorTitle: "Error!",
  informativeTitle: "¡Informativo!",
  isWarning: isWarning,
  isSuccess: isSuccess,
  isInfo: isInfo,
  isError: isError,
}
