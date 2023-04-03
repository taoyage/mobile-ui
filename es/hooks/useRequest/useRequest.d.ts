import { SWRConfiguration, SWRResponse } from 'swr';
import { AxiosRequestConfig, AxiosError } from 'axios';
interface Response<Data> {
  code: number;
  data: Data;
  msg: string;
}
interface useRequestResponse<Data, Error>
  extends Pick<SWRResponse<Response<Data>, AxiosError<Error>>, 'isValidating' | 'error' | 'mutate'> {
  data: Data | undefined;
  response: Response<Data> | undefined;
}
declare function useRequest<Data = unknown, Error = unknown>(
  request: AxiosRequestConfig,
  config?: SWRConfiguration
): useRequestResponse<Data, Error>;
export default useRequest;
