import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  Box,
  useColorModeValue,
  GridItem,
  MenuList,
  MenuDivider,
  MenuItemOption,
  MenuOptionGroup,
} from "@chakra-ui/react";
import millify from "millify";
import moment from "moment";
import { GRID_ITEM_SIZE } from "./template";
import ChartSpanMenu from "../basic/ChartSpanMenu";
import ChartHeader from "../basic/ChartHeader";
import LinkToSourceMenuItem from "../basic/LinkToSourceMenuItem";

const BarGraph = ({
  title,
  dataKey,
  oxLabel,
  oyLabel,
  values,
  baseSpan = 1,
  labels,
  modelInfo,
  isNotDate = false,
  monthlyValues,
  extraInfoToTooltip,
  defualtTime = "day",
  queryLink,
  disclaimer,
}: {
  defualtTime?: "day" | "month";
  title: string;
  disclaimer?: string;
  dataKey: string;
  oxLabel: string;
  oyLabel: string;
  isNotDate?: boolean;
  monthlyValues?: any[];
  values: any[];
  modelInfo: string;
  baseSpan?: number;
  queryLink?: string;
  extraInfoToTooltip?: string;
  labels: { key: string; color: string }[];
}) => {
  const hasMonthly = !isNotDate && monthlyValues && monthlyValues.length > 0;
  const [chartData, setChartData] = useState(
    defualtTime === "day" ? values : monthlyValues
  );
  const [chartTimeFrame, setChartTimeFrame] = useState<"day" | "month">(
    defualtTime
  );
  const [spanItem, setSpanItem] = useState(GRID_ITEM_SIZE[baseSpan - 1]);
  const [barProps, setBarProps] = useState(
    labels.reduce(
      (a: any, { key }: any) => {
        a[key] = false;
        return a;
      },
      { hover: null }
    )
  );
  const bgTooltip = useColorModeValue("gray.300", "gray.700");
  const bgCard = useColorModeValue("white", "#191919");
  const textColor = useColorModeValue("gray.900", "gray.100");

  const handleLegendMouseEnter = (e: any) => {
    if (!barProps[e.dataKey]) {
      setBarProps({ ...barProps, hover: e.dataKey });
    }
  };

  const handleLegendMouseLeave = (_: never) => {
    setBarProps({ ...barProps, hover: null });
  };

  const selectBar = (e: any) => {
    const numberOfBars = Object.keys(barProps).length - 1;
    const numberOfHideBars = Object.entries(barProps).filter(
      ([key, value]) => value == true
    ).length;

    if (numberOfBars === numberOfHideBars + 1 && !barProps[e.dataKey]) {
      const newBarProps = { ...barProps };
      // change all keys to true
      Object.keys(newBarProps).forEach((key) => {
        if (key === "hover") {
          newBarProps[key] = null;
        } else {
          newBarProps[key] = false;
        }
      });
      setBarProps(newBarProps);
      return;
    }
    setBarProps({
      ...barProps,
      [e.dataKey]: !barProps[e.dataKey],
      hover: null,
    });
  };

  const changeDataToMonethly = () => {
    setChartTimeFrame("month");
    setChartData(monthlyValues!);
  };

  const changeDataToDaily = () => {
    setChartTimeFrame("day");
    setChartData(values);
  };

  return (
    <GridItem
      rowSpan={1}
      colSpan={spanItem}
      color={textColor}
      bgColor={bgCard}
      shadow="base"
      transition={"all 0.5s "}
      _hover={{ boxShadow: "var(--chakra-shadows-lg)" }}
      borderRadius={"2xl"}
      width="100%"
    >
      <Box
        px="4"
        pt="4"
        pb={"2"}
        _hover={{ boxShadow: `0px 0px 4px ${bgTooltip}` }}
        display="flex"
        flexDir={"column"}
        alignItems="center"
        height={"480px"}
        id={title}
      >
        <ChartHeader
          disclaimer={disclaimer}
          chartMenu={
            <MenuList>
              {queryLink && (
                <>
                  <LinkToSourceMenuItem queryLink={queryLink} />
                  <MenuDivider />
                </>
              )}
              {hasMonthly && (
                <>
                  <MenuOptionGroup
                    onChange={(value) => {
                      if (value === "month") {
                        changeDataToMonethly();
                      } else {
                        changeDataToDaily();
                      }
                    }}
                    defaultValue={chartTimeFrame}
                    title="Chart Date Type"
                    type="radio"
                  >
                    <MenuItemOption value={"month"}>monthly</MenuItemOption>
                    <MenuItemOption value={"day"}>daily</MenuItemOption>
                  </MenuOptionGroup>
                  <MenuDivider />
                </>
              )}
              <ChartSpanMenu
                onChange={(span) =>
                  setSpanItem(GRID_ITEM_SIZE[Number(span) - 1])
                }
                baseSpan={baseSpan}
              />
            </MenuList>
          }
          modalInfo={modelInfo}
          title={title}
        />
        <Box p={"1"} />

        <ResponsiveContainer width={"100%"}>
          <BarChart data={chartData} className="mt-1 mb-2">
            <CartesianGrid
              style={{ stroke: "rgba(10,10,10,0.1)", opacity: 0.25 }}
              strokeDasharray="3 3"
            />
            <XAxis
              fontSize={"12px"}
              tickFormatter={(value: string) => {
                if (isNotDate) {
                  return value;
                }
                if (chartTimeFrame === "month") {
                  return moment(value).format("MMM YYYY");
                }
                return moment(value).format("MMM DD YYYY");
              }}
              dataKey={dataKey}
            >
              {/* <Label value={oxLabel} position="center" dy={10} dx={20} /> */}
            </XAxis>
            <YAxis
              fontSize={"12px"}
              type="number"
              tickFormatter={(value) =>
                millify(value, {
                  precision: 2,
                  decimalSeparator: ".",
                })
              }
            >
              <Label
                value={oyLabel}
                position="left"
                fontSize={"16px"}
                angle={-90}
                dy={-20}
                fill={"gray"}
                style={{
                  color: textColor,
                }}
                dx={10}
              />
            </YAxis>
            <Tooltip
              wrapperStyle={{ zIndex: 10 }}
              labelFormatter={(value: string) => {
                if (isNotDate) {
                  return value;
                }

                if (chartTimeFrame === "month") {
                  return moment(value).format("MMM YYYY");
                }
                return moment(value).format("MMM DD YYYY");
              }}
              labelStyle={{ color: "white" }}
              contentStyle={{ backgroundColor: "black", borderRadius: "5px" }}
              formatter={(a: any) => {
                return (
                  millify(a, {
                    precision: 2,
                    decimalSeparator: ".",
                  }) + `${extraInfoToTooltip ?? ""}`
                );
              }}
            />
            <Legend
              fontSize={"8px"}
              style={{ fontSize: "7px", position: "relative" }}
              onClick={selectBar}
              onMouseOver={handleLegendMouseEnter}
              onMouseOut={handleLegendMouseLeave}
            />
            {labels.map((label, index) => (
              <Bar
                key={index}
                dataKey={label.key}
                fill={label.color}
                stackId={dataKey}
                hide={barProps[label.key] === true}
                fillOpacity={Number(
                  barProps.hover === label.key || !barProps.hover ? 1 : 0.6
                )}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </GridItem>
  );
};

export default BarGraph;
