import Performance from "lib/pages/performance";
import {
  getDailyBlockPerformance,
  getPerformanceTotalInfo,
  getTPSPerformance,
  getTXinBlockPerformance,
} from "lib/requests/performance";
export async function getStaticProps() {
  const [
    // static
    performanceTotalInfo,
    // simple
    dailyBlockPerformance,
    txinBlockPerformance,
    tPSPerformance,
    // seorate
  ] = await Promise.all([
    // static
    getPerformanceTotalInfo(),
    // simple
    getDailyBlockPerformance(),
    getTXinBlockPerformance(),
    getTPSPerformance(),
    // seorate
  ]);
  return {
    props: {
      // static
      performanceTotalInfo,
      // simple
      dailyBlockPerformance,
      txinBlockPerformance,
      tPSPerformance,
      // seorate
    },
    revalidate: 10 * 60,
  };
}
export default Performance;
