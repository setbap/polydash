import Fees from "lib/pages/fees";
import {
  getDailyCollectedFees,
  getDailyTransactionCost,
  getTransactionFeeInDayOfWeek,
  getTransactionFeeInHour,
} from "lib/requests/fees";
export async function getStaticProps() {
  const [
    // static

    // simple
    dailyCollectedFees,
    transactionFeeInHour,
    dailyTransactionCost,
    transactionFeeInDayOfWeek,
    // seorate
  ] = await Promise.all([
    // static

    // simple
    getDailyCollectedFees(),
    getTransactionFeeInHour(),
    getDailyTransactionCost(),
    getTransactionFeeInDayOfWeek(),
    // seorate
  ]);
  return {
    props: {
      // static

      // simple
      dailyCollectedFees,
      transactionFeeInHour,
      dailyTransactionCost,
      transactionFeeInDayOfWeek,
      // seorate
    },
    revalidate: 10 * 60,
  };
}
export default Fees;
