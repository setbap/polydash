import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import {
  IDailyCollectedFees,
  ITransactionFeeInDayOfWeek,
  ITransactionFeeInHour,
} from "lib/types/types/fees";
import {} from "lib/types/types/home";

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
  // simple
  dailyCollectedFees: IDailyCollectedFees[];
  transactionFeeInHour: ITransactionFeeInHour[];
  dailyTransactionCost: IDailyCollectedFees[];
  transactionFeeInDayOfWeek: ITransactionFeeInDayOfWeek[];
  // seorate
}

const Fees = ({
  // static

  // simple
  dailyCollectedFees,
  transactionFeeInHour,
  dailyTransactionCost,
  transactionFeeInDayOfWeek,
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
        ></SimpleGrid>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <ChartBox
            customColor="#8247e5"
            data={dailyCollectedFees}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/fd7dcc45-ba43-4796-b605-b685c78a1ead"
            tooltipTitle="Daily Collected Fees"
            modelInfo="Daily Collected Fees"
            title="Daily Collected Fees ($Matic)"
            baseSpan={3}
            areaDataKey="Fees"
            xAxisDataKey="Day"
          />
          <ChartBox
            customColor="#8247e5"
            data={transactionFeeInHour}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/148a1925-99f1-458a-9780-598bc9c7083c"
            tooltipTitle="Average  Transaction cost for each Hour"
            modelInfo="Average  Transaction cost for each Hour"
            title="Average  Transaction cost for each Hour ($Matic)"
            baseSpan={3}
            areaDataKey="Fee"
            xAxisDataKey="Hour"
            isNotDate
          />

          <ChartBox
            customColor="#8247e5"
            data={dailyTransactionCost}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/94fb756d-ed71-4b21-b38f-0b4683f53f0d"
            tooltipTitle="Average Transaction cost for each Day"
            modelInfo="Average  Transaction cost for each Day"
            title="Average  Transaction cost for each Day ($Matic)"
            baseSpan={3}
            areaDataKey="Fees"
            xAxisDataKey="Day"
          />

          <ChartBox
            customColor="#8247e5"
            data={transactionFeeInDayOfWeek}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/0d537a49-d1f0-4fdd-8e46-1026f29149bb"
            tooltipTitle="Average Transaction cost for each Day of Week"
            modelInfo="Average Transaction cost for each Day of Week"
            title="Average Transaction cost for each Day of Week ($Matic)"
            baseSpan={3}
            areaDataKey="Fee"
            xAxisDataKey="Day Name"
            isNotDate
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Fees;
