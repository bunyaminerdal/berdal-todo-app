import basicApi from '../services/basicApi'

export const BasicFetcher = async (
  arg: string | string[]
): Promise<any> => {
  const url = Array.isArray(arg) ? arg[0] : arg;
  const res = await basicApi.get(url);
  return res.data;
};
