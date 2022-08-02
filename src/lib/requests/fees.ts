import {
  IDailyCollectedFees,
  IRawDailyCollectedFees,
  ITransactionFeeInDayOfWeek,
  ITransactionFeeInHour,
} from "lib/types/types/fees";
import moment from "moment";

export const getDailyCollectedFees: () => Promise<
  IDailyCollectedFees[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/fd7dcc45-ba43-4796-b605-b685c78a1ead/data/latest"
  );
  const fetchedData: IRawDailyCollectedFees[] = await res.json();
  return fetchedData
    .sort((a, b) => (moment(a.DATE).isAfter(moment(b.DATE)) ? 1 : -1))
    .map<IDailyCollectedFees>((feeInDay) => ({
      Fees: feeInDay.FEES,
      Day: feeInDay.DATE,
    }));
};

export const getTransactionFeeInHour: () => Promise<
  ITransactionFeeInHour[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/148a1925-99f1-458a-9780-598bc9c7083c/data/latest"
  );
  const fetchedData: ITransactionFeeInHour[] = await res.json();
  return fetchedData.sort((a, b) =>
    a.Hour > b.Hour ? 1 : a.Hour < b.Hour ? -1 : 0
  );
};

export const getDailyTransactionCost: () => Promise<
  IDailyCollectedFees[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/94fb756d-ed71-4b21-b38f-0b4683f53f0d/data/latest"
  );
  const fetchedData: IRawDailyCollectedFees[] = await res.json();
  return fetchedData
    .sort((a, b) => (moment(a.DATE).isAfter(moment(b.DATE)) ? 1 : -1))
    .map<IDailyCollectedFees>((feeInDay) => ({
      Fees: feeInDay.FEES,
      Day: feeInDay.DATE,
    }));
};

export const getTransactionFeeInDayOfWeek: () => Promise<
  ITransactionFeeInDayOfWeek[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/0d537a49-d1f0-4fdd-8e46-1026f29149bb/data/latest"
  );
  const fetchedData: ITransactionFeeInDayOfWeek[] = await res.json();
  return fetchedData.sort((a, b) =>
    a["Day Number"] > b["Day Number"]
      ? 1
      : a["Day Number"] < b["Day Number"]
      ? -1
      : 0
  );
};
