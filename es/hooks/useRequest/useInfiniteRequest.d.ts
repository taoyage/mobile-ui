import { AxiosRequestConfig, AxiosError } from 'axios';
import { SWRInfiniteConfiguration, SWRInfiniteResponse } from 'swr/infinite';
interface Response<Data> {
  code: number;
  data: Data;
  msg: string;
}
interface Return<Data, Error>
  extends Pick<
    SWRInfiniteResponse<Response<Data>, AxiosError<Error>>,
    'isValidating' | 'error' | 'mutate' | 'size' | 'setSize'
  > {
  data: Data[] | undefined;
  response: Response<Data>[] | undefined;
}
declare function useInfiniteRequest<Data = unknown, Error = unknown>(
  request: AxiosRequestConfig,
  config?: SWRInfiniteConfiguration
): Return<Data, Error>;
export default useInfiniteRequest;
