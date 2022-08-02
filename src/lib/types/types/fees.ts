export interface IRawDailyCollectedFees {
  DATE: string;
  FEES: number;
}

export interface IDailyCollectedFees {
  Day: string;
  Fees: number;
}

export interface ITransactionFeeInHour {
  Hour: number;
  Fee: number;
}
export interface ITransactionFeeInDayOfWeek {
  "Day Name": string;
  "Day Number": number;
  Fee: number;
}
