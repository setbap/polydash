import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";
import { StatsCard } from "lib/components/charts/StateCard";
import {
  IDailyCollectedFees,
  ITransactionFeeInDayOfWeek,
  ITransactionFeeInHour,
} from "lib/types/types/fees";
import {} from "lib/types/types/home";
import {
  IDailyBlockPerformance,
  ITotalPerformance,
  ITXinSecondPerformance,
} from "lib/types/types/performance";

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
  performanceTotalInfo: ITotalPerformance;
  // simple
  dailyBlockPerformance: IDailyBlockPerformance[];
  txinBlockPerformance: IDailyBlockPerformance[];
  tPSPerformance: ITXinSecondPerformance[];
  // seorate
}

const Fees = ({
  // static
  performanceTotalInfo,
  // simple
  dailyBlockPerformance,
  txinBlockPerformance,
  tPSPerformance,
}: // seorate
Props) => {
  const bgCard = useColorModeValue("white", "#191919");

  return (
    <>
      <NextSeo
        title="PolygonDash | Business Intelligence Dashboard for Polygon"
        description="Track the latest stats and trends on Polygon"
        openGraph={{
          url: "https://PolygonDash.vercel.app/",
          title: "PolygonDash | Business Intelligence Dashboard for Polygon",
          description: "Track the latest stats and trends on Polygon",

          site_name: "PolygonDash",
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
          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/b7ecf5c5-87b8-4d5d-a7fb-8a04702c90a8"
            status="inc"
            title={"Average Block Time"}
            stat={performanceTotalInfo["Average Block Time"]}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/b7ecf5c5-87b8-4d5d-a7fb-8a04702c90a8"
            status="inc"
            stat={performanceTotalInfo["Average TX count per block"]}
            title={"Average TX count per block"}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/b7ecf5c5-87b8-4d5d-a7fb-8a04702c90a8"
            status="inc"
            stat={performanceTotalInfo["Max Block Time"]}
            title={"Max Block Time (second)"}
          />
          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/b7ecf5c5-87b8-4d5d-a7fb-8a04702c90a8"
            status="inc"
            stat={performanceTotalInfo["Min Block Time"]}
            title={"Min Block Time (second)"}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/b7ecf5c5-87b8-4d5d-a7fb-8a04702c90a8"
            status="inc"
            stat={performanceTotalInfo["Max TX count per block"]}
            title={"Max TX count per block (second)"}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/b7ecf5c5-87b8-4d5d-a7fb-8a04702c90a8"
            status="inc"
            stat={performanceTotalInfo["Min TX count per block"]}
            title={"Min TX count per block (second)"}
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
          <StackedAreaChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/614cedc7-1e7b-44f3-b61e-dba45886592e"
            modelInfo=""
            values={txinBlockPerformance}
            title="TX in Block Performance"
            dataKey="Day"
            baseSpan={3}
            oyLabel="Number Transaction"
            oxLabel="name"
            labels={[
              {
                color: colors[1],
                key: "Average TX in Block",
              },
              {
                color: colors[0],
                key: "TX per Block",
              },
            ]}
          />

          <StackedAreaChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/614cedc7-1e7b-44f3-b61e-dba45886592e"
            modelInfo=""
            values={tPSPerformance}
            title="TX per Second Performance"
            dataKey="Day"
            baseSpan={3}
            oyLabel="Number Transaction"
            oxLabel="name"
            labels={[
              {
                color: colors[1],
                key: "TPS",
              },
              {
                color: colors[0],
                key: "Average TPS",
              },
            ]}
          />

          <StackedAreaChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/614cedc7-1e7b-44f3-b61e-dba45886592e"
            modelInfo=""
            values={dailyBlockPerformance}
            title="Daily Block Performance"
            dataKey="Day"
            baseSpan={3}
            oyLabel="Number Transaction"
            oxLabel="name"
            labels={[
              {
                color: colors[1],
                key: "Average Block Time",
              },
              {
                color: colors[0],
                key: "Daily Block Age",
              },
            ]}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Fees;
