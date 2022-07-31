export interface IRawTokenInfo {
  DATE: string;
  MARKET_CAP_: number;
  MATIC_AVERAGE_PRICE: number;
  CURCULATING_SUPPLY: number;
  HOLDERS: number;
}

export interface ITokenInfo {
  Day: string;
  "Market Cap": number;
  "Matic Price": number;
  "Curculating Supply": number;
  "Holders Count": number;
}

export interface IRawTotalTokenInfo {
  MARKET_CAP: number;
  MATIC_AVERAGE_PRICE: number;
  CURCULATING_SUPPLY: number;
  HOLDERS: number;
}

export interface IRawDailyActiveWallet {
  TYPE: string;
  DATE: string;
  ACTIVE_USERS: number;
}
