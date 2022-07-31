import Home from "lib/pages/home";
import {
  getDailyTXCount,
  getTotalTokenInfo,
  tokenInfo,
} from "lib/requests/home";
export async function getStaticProps() {
  const [
    // static
    allTotalTokenInfo,
    // simple
    tokenInfoData,
    // seorate
    dailyTXCount,
  ] = await Promise.all([
    // static
    getTotalTokenInfo(),
    // simple
    tokenInfo(),
    // seorate
    getDailyTXCount(),
  ]);
  return {
    props: {
      // static
      allTotalTokenInfo,
      // simple
      tokenInfoData,
      // seorate
      dailyTXCount,
    },
    revalidate: 10 * 60,
  };
}
export default Home;
