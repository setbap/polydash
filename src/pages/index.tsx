import Home from "lib/pages/home";
import { getTotalTokenInfo, tokenInfo } from "lib/requests/home";
export async function getStaticProps() {
  const [
    // static
    allTotalTokenInfo,
    // simple
    tokenInfoData,
    // seorate
  ] = await Promise.all([
    // static
    getTotalTokenInfo(),
    // simple
    tokenInfo(),
    // seorate
  ]);
  return {
    props: {
      // static
      allTotalTokenInfo,
      // simple
      tokenInfoData,
      // seorate
    },
    revalidate: 10 * 60,
  };
}
export default Home;
