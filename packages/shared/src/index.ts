export type ID = string;

export type ApiResponse<T> = {
  data: T;
  requestId: string;
};
