export interface IResponseStatus<T>{
  data?: any[T] | null,
  message: string;
  statusCode: number | null;
  ok: boolean | null;
}
