
import { useSearchParams } from "react-router-dom";

export const useQueryParams = () => {
  let [searchParams] = useSearchParams();
  const searchParamsObj = Object.fromEntries([...searchParams]);
  return searchParamsObj
}