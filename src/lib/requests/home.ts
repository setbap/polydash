import {
  IRawTokenInfo,
  IRawTotalTokenInfo,
  ITokenInfo,
} from "lib/types/types/home";
import moment from "moment";

export const getTotalTokenInfo = async (): Promise<IRawTotalTokenInfo> => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/b7ecf5c5-87b8-4d5d-a7fb-8a04702c90a8/data/latest"
  );
  const data: IRawTotalTokenInfo = (await res.json())[0];
  return data;
};

export const tokenInfo: () => Promise<ITokenInfo[]> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/40f643c5-5d22-4395-bad6-c3969074e794/data/latest"
  );
  const fetchedData: IRawTokenInfo[] = await res.json();
  return fetchedData
    .sort((a, b) => (moment(a.DATE).isAfter(moment(b.DATE)) ? 1 : -1))
    .map<ITokenInfo>((txCount) => ({
      "Curculating Supply": txCount.CURCULATING_SUPPLY,
      "Holders Count": txCount.HOLDERS,
      "Market Cap": txCount.MARKET_CAP_,
      "Matic Price": txCount.MATIC_AVERAGE_PRICE,
      Day: txCount.DATE,
    }));
};

// export const getDappsSwapCount: () => Promise<any> = async () => {
//   const res = await fetch(
//     "https://node-api.flipsidecrypto.com/api/v2/queries/8e973cc7-d261-4693-8060-fe3685764911/data/latest"
//   );
//   const fetchedData: IRawDappsSwapCount[] = await res.json();
//   const dappsName = Array.from(
//     new Set(
//       fetchedData.map((item) => {
//         return item["NAME"];
//       })
//     )
//   );
//   const dappsSwapCount = calculateDailyBridgeValue(
//     "MM/DD/YYYY",
//     fetchedData,
//     "DATE",
//     "NAME",
//     "COUNT(*)",
//     dappsName,
//     0
//   );
//   return {
//     dappsSwapCount,
//     dappsName,
//   };
// };

function calculateDailyBridgeValue(
  dateFormat: string,
  USTBridgeValue: any[],
  dateKey: string,
  nameKey: string,
  valueKey: string,
  bridges: string[],
  minValue: number = 0
) {
  const dailyEachBridgeSum: { [key: string]: { [key: string]: number } } = {};
  USTBridgeValue.forEach((item) => {
    const date = moment(item[dateKey]).format(dateFormat);
    if (!Boolean(item[valueKey]) || item[valueKey] < minValue) {
    } else if (dailyEachBridgeSum[date] === undefined) {
      dailyEachBridgeSum[date] = {};
      dailyEachBridgeSum[date][item[nameKey]] = item[valueKey];
    } else if (dailyEachBridgeSum[date][item[nameKey]] === undefined) {
      dailyEachBridgeSum[date][item[nameKey]] = item[valueKey];
    } else {
      dailyEachBridgeSum[date][item[nameKey]] += item[valueKey];
    }
  });
  const dailyBridgeValue = Object.entries(dailyEachBridgeSum)
    .map((bc) => {
      const finalObject = { date: bc[0] };
      bridges.forEach((bridge) => {
        if (bc[1][bridge]) {
          // @ts-ignore
          finalObject[bridge] = bc[1][bridge];
        }
      });
      return finalObject;
    })
    .sort((a, b) => {
      return moment(a.date).isAfter(moment(b.date)) ? 1 : -1;
    });
  return dailyBridgeValue;
}
