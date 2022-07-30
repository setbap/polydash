import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import BarGraph from "lib/components/charts/BarGraph";
import DonutChart from "lib/components/charts/DonutChart";
import ChartBox from "lib/components/charts/LineChart";
import MultiChartBox from "lib/components/charts/MultiLineChart";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";
import { StatsCard } from "lib/components/charts/StateCard";
import { StateCardRemoteData } from "lib/components/charts/StateCardRemoteData";
import { IRawTotalTokenInfo, ITokenInfo } from "lib/types/types/home";

import { NextSeo } from "next-seo";

const colors = [
  "#ff5722",
  "#03a9f4",
  "#ffc107",
  "#4caf50",
  "#00bcd4",
  "#f44336",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#009688",
  "#607d8b",
];

interface Props {
  allTotalTokenInfo: IRawTotalTokenInfo;
  // simple
  tokenInfoData: ITokenInfo[];
}

const Home = ({
  // static
  allTotalTokenInfo,
  // simple
  tokenInfoData,
}: // seorate
Props) => {
  const bgCard = useColorModeValue("white", "#191919");

  return (
    <>
      <NextSeo
        title="PolyDash | Business Intelligence Dashboard for Polygon"
        description="Track the latest stats and trends on Optimism"
        openGraph={{
          url: "https://PolyDash.vercel.app/",
          title: "PolyDash | Business Intelligence Dashboard for Polygon",
          description: "Track the latest stats and trends on Polygon",
          // images: [
          //   {
          //     url: "https://ogOptimismDash.vercel.app/ogOptimismDash.png",
          //     width: 1200,
          //     height: 630,
          //     alt: "Overview Terra Information",
          //     type: "image/png",
          //   },
          // ],
          site_name: "PolyDash",
        }}
        twitter={{
          handle: "@flipsidecrypto",
          cardType: "summary_large_image",
        }}
      />
      <Box mx={"auto"} px={{ base: 6, sm: 2, md: 8 }}>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StateCardRemoteData
            url="https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
            link="https://www.coingecko.com/en/coins/ethereum"
            status="unchanged"
            title={"Current Ethereum Price (USD)"}
            getStat={(data) => data.ethereum.usd}
          />
          <StateCardRemoteData
            url="https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd"
            link="https://www.coingecko.com/en/coins/polygon"
            status="unchanged"
            title={"Current Matic Price (USD)"}
            getStat={(data) => data["matic-network"].usd}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/b7ecf5c5-87b8-4d5d-a7fb-8a04702c90a8"
            status="inc"
            title={"Matic Circulation Supply"}
            stat={allTotalTokenInfo["CURCULATING_SUPPLY"]}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/b7ecf5c5-87b8-4d5d-a7fb-8a04702c90a8"
            status="inc"
            title={"# Matic Holders"}
            stat={allTotalTokenInfo["HOLDERS"]}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/b7ecf5c5-87b8-4d5d-a7fb-8a04702c90a8"
            status="inc"
            title={"Market Cap"}
            stat={allTotalTokenInfo["MARKET_CAP"]}
          />
        </SimpleGrid>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <ChartBox
            data={tokenInfoData}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/40f643c5-5d22-4395-bad6-c3969074e794"
            tooltipTitle="Number of Holders"
            modelInfo="Number of Holders"
            title="Number of Holders"
            baseSpan={3}
            areaDataKey="Holders Count"
            xAxisDataKey="Day"
          />

          <ChartBox
            data={tokenInfoData}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/40f643c5-5d22-4395-bad6-c3969074e794"
            tooltipTitle="Matic Price"
            modelInfo="Matic Price"
            title="Matic Price"
            baseSpan={3}
            areaDataKey="Matic Price"
            xAxisDataKey="Day"
          />

          {/* <DonutChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/c9226b84-3ca7-4da2-ab29-91dc9e438ca4"
            data={transactionDistributionData}
            tooltipTitle="Distribution of Transaction in Optimism"
            modelInfo="Distribution of Transaction in Optimism"
            title="Distribution of Transaction in Optimism"
            dataKey="count"
            nameKey="TX # Range"
          /> */}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Home;
