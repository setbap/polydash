import {
  IDailyBlockPerformance,
  ITotalPerformance,
  ITXinBlockPerformance,
  ITXinSecondPerformance,
} from "lib/types/types/performance";
import moment from "moment";

export const getPerformanceTotalInfo = async (): Promise<ITotalPerformance> => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/9275a042-59da-4eea-8fe1-284a44c34ea4/data/latest"
  );
  const data: ITotalPerformance = (await res.json())[0];
  return data;
};

export const getDailyBlockPerformance: () => Promise<
  IDailyBlockPerformance[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/614cedc7-1e7b-44f3-b61e-dba45886592e/data/latest"
  );
  const fetchedData: IDailyBlockPerformance[] = await res.json();
  return fetchedData.sort((a, b) =>
    moment(a.Day).isAfter(moment(b.Day)) ? 1 : -1
  );
};

export const getTXinBlockPerformance: () => Promise<
  ITXinBlockPerformance[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/e2c4c3e4-b33c-4188-8b93-7d564f7aeb98/data/latest"
  );
  const fetchedData: ITXinBlockPerformance[] = await res.json();
  return fetchedData.sort((a, b) =>
    moment(a.Day).isAfter(moment(b.Day)) ? 1 : -1
  );
};

export const getTPSPerformance: () => Promise<
  ITXinSecondPerformance[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/b0933462-0746-4afd-b253-a0b4dd54503c/data/latest"
  );
  const fetchedData: ITXinSecondPerformance[] = await res.json();
  return fetchedData.sort((a, b) =>
    moment(a.Day).isAfter(moment(b.Day)) ? 1 : -1
  );
};
