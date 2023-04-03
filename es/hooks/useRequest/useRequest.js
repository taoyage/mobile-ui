import useSWR from 'swr';
import AxiosInstance from './axiosInstance';

function useRequest(request, config) {
  var _useSWR = useSWR(
      request.url,
      function () {
        return AxiosInstance.request(request);
      },
      config
    ),
    response = _useSWR.data,
    error = _useSWR.error,
    mutate = _useSWR.mutate,
    isValidating = _useSWR.isValidating;

  return {
    data: response === null || response === void 0 ? void 0 : response.data,
    response: response,
    error: error,
    mutate: mutate,
    isValidating: isValidating,
  };
}

export default useRequest;
