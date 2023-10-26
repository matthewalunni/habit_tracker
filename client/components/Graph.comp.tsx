import React, {FC} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonSection from './ButtonSection.comp';
import {curveBasis, line, scaleLinear, scaleTime} from 'd3';
import {G, Line, Path, Svg} from 'react-native-svg';
import {mixPath, parse, Path as RePath, ReText} from 'react-native-redash';
import {color} from '../theme';
import Text from './Text.comp';

export type DataPoint = {
  date: string;
  value: number;
};

// NOTE: Dates are in the ISO 8601 format since react-native-reanimated doesn't support Date objects yet.
export const weeklyData: DataPoint[] = [
  {date: '2000-02-01T05:00:00.000Z', value: 0},
  {date: '2000-02-02T05:00:00.000Z', value: 0},
  {date: '2000-02-03T05:00:00.000Z', value: 0},
  {date: '2000-02-04T05:00:00.000Z', value: 0},
  {date: '2000-02-05T05:00:00.000Z', value: 0.45},
  {date: '2000-02-06T05:00:00.000Z', value: 0.55},
  {date: '2000-02-07T05:00:00.000Z', value: 0.65},
  {date: '2000-02-08T05:00:00.000Z', value: 0.14},
  {date: '2000-02-09T05:00:00.000Z', value: 0.85},
  {date: '2000-02-10T05:00:00.000Z', value: 0.95},
  {date: '2000-02-11T05:00:00.000Z', value: 0.24},
  {date: '2000-02-12T05:00:00.000Z', value: 0},
  {date: '2000-02-13T05:00:00.000Z', value: 0},
  {date: '2000-02-14T05:00:00.000Z', value: 0},
  {date: '2000-02-15T05:00:00.000Z', value: 0},
];

export const monthlyData: DataPoint[] = [
  {date: '2000-02-01T05:00:00.000Z', value: 0.47},
  {date: '2000-02-02T05:00:00.000Z', value: 0.16},
  {date: '2000-02-03T05:00:00.000Z', value: 0.15},
  {date: '2000-02-04T05:00:00.000Z', value: 0.35},
  {date: '2000-02-05T05:00:00.000Z', value: 0.95},
  {date: '2000-02-06T05:00:00.000Z', value: 0.55},
  {date: '2000-02-07T05:00:00.000Z', value: 0.65},
  {date: '2000-02-08T05:00:00.000Z', value: 1.0},
  {date: '2000-02-09T05:00:00.000Z', value: 0.85},
  {date: '2000-02-10T05:00:00.000Z', value: 0.12},
  {date: '2000-02-11T05:00:00.000Z', value: 0.24},
  {date: '2000-02-12T05:00:00.000Z', value: 0.11},
  {date: '2000-02-13T05:00:00.000Z', value: 0.05},
  {date: '2000-02-14T05:00:00.000Z', value: 0.54},
  {date: '2000-02-15T05:00:00.000Z', value: 0.54},
];

export const yearlyData: DataPoint[] = [
  {date: '2000-02-01T05:00:00.000Z', value: 0.47},
  {date: '2000-02-02T05:00:00.000Z', value: 0.13},
  {date: '2000-02-03T05:00:00.000Z', value: 0.45},
  {date: '2000-02-04T05:00:00.000Z', value: 0.75},
  {date: '2000-02-05T05:00:00.000Z', value: 0.95},
  {date: '2000-02-06T05:00:00.000Z', value: 0.95},
  {date: '2000-02-07T05:00:00.000Z', value: 0.65},
  {date: '2000-02-08T05:00:00.000Z', value: 0.14},
  {date: '2000-02-09T05:00:00.000Z', value: 0.85},
  {date: '2000-02-10T05:00:00.000Z', value: 0.11},
  {date: '2000-02-11T05:00:00.000Z', value: 0.24},
  {date: '2000-02-12T05:00:00.000Z', value: 0.44},
  {date: '2000-02-13T05:00:00.000Z', value: 0.44},
  {date: '2000-02-14T05:00:00.000Z', value: 0.98},
  {date: '2000-02-15T05:00:00.000Z', value: 0.74},
];

type LineChartProps = {
  height: number;
  width: number;
  data: GraphData[];
  leftPadding: number;
  bottomPadding: number;
};

type GraphData = {
  max: number;
  min: number;
  curve: RePath;
  mostRecent: number;
};

const device_width = Dimensions.get('window').width;
const CARD_WIDTH = device_width - 20;
const GRAPH_WIDTH = CARD_WIDTH - 60;
const CARD_HEIGHT = 320;
const GRAPH_HEIGHT = 200;

const makeGraph = (data: DataPoint[]) => {
  const max = Math.max(...data.map(val => val.value));
  const min = Math.min(...data.map(val => val.value));
  const y = scaleLinear().domain([0, max]).range([GRAPH_HEIGHT, 35]);

  const dates = data.map(val => val.date);

  const earliestDate = dates[0].toString().substring(0, 10).split('-');
  const earliestYear = parseInt(earliestDate[0], 10);
  const earliestMonth = parseInt(earliestDate[1], 10) - 1;
  const earliestDay = parseInt(earliestDate[2], 10);

  const latestDate = dates[dates.length - 1]
    .toString()
    .substring(0, 10)
    .split('-');

  const latestYear = parseInt(latestDate[0], 10);
  const latestMonth = parseInt(latestDate[1], 10) - 1;
  const latestDay = parseInt(latestDate[2], 10);

  const x = scaleTime()
    .domain([
      new Date(earliestYear, earliestMonth, earliestDay),
      new Date(latestYear, latestMonth, latestDay),
    ])
    .range([10, GRAPH_WIDTH - 10]);

  const curvedLine = line<DataPoint>()
    .x(d => x(new Date(d.date)))
    .y(d => y(d.value))
    .curve(curveBasis)(data);

  return {
    max,
    min,
    curve: parse(curvedLine!),
    mostRecent: data[data.length - 1].value,
  };
};

const graphData: GraphData[] = [
  makeGraph(weeklyData),
  makeGraph(monthlyData),
  makeGraph(yearlyData),
];

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={styles.graphCard}>
        <LineChart
          height={GRAPH_HEIGHT}
          width={GRAPH_WIDTH}
          data={graphData}
          bottomPadding={20}
          leftPadding={0}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const LineChart: FC<LineChartProps> = ({
  height,
  width,
  data,
  leftPadding,
  bottomPadding,
}) => {
  const selectedGraph = useSharedValue(data[0]);
  const previousGraph = useSharedValue({...data[0]});
  const isAnimationComplete = useSharedValue(true);
  const transition = useSharedValue(1);

  const onQuarterTapped = (quarter: number) => {
    if (isAnimationComplete.value) {
      isAnimationComplete.value = false;
      transition.value = 0;
      selectedGraph.value = data[quarter - 1];

      transition.value = withTiming(1, {}, () => {
        previousGraph.value = selectedGraph.value;
        isAnimationComplete.value = true;
      });
    }
  };
  const q1Tapped = () => onQuarterTapped(1);
  const q2Tapped = () => onQuarterTapped(2);
  const q3Tapped = () => onQuarterTapped(3);

  const AnimatedPath = Animated.createAnimatedComponent(Path);

  const mostRecent = useDerivedValue(() => {
    const str_value = selectedGraph.value.mostRecent.toString().split('.')[1];
    if (str_value !== undefined) {
      return `${str_value}%`;
    }
    return '';
  });

  const animatedProps = useAnimatedProps(() => {
    return {
      d: mixPath(
        transition.value,
        previousGraph.value.curve,
        selectedGraph.value.curve,
      ),
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Habit Progress</Text>
        <ReText style={styles.priceText} text={mostRecent} />
      </View>
      <Animated.View style={styles.chartContainer}>
        <Svg width={width} height={height} stroke={color.primary}>
          <G y={-bottomPadding}>
            <Line
              x1={leftPadding}
              y1={height}
              x2={width}
              y2={height}
              stroke={'#d7d7d7'}
              strokeWidth="1"
            />
            <Line
              x1={leftPadding}
              y1={height * 0.6}
              x2={width}
              y2={height * 0.6}
              stroke={'#d7d7d7'}
              strokeWidth="1"
            />
            <Line
              x1={leftPadding}
              y1={height * 0.2}
              x2={width}
              y2={height * 0.2}
              stroke={'#d7d7d7'}
              strokeWidth="1"
            />
            <AnimatedPath animatedProps={animatedProps} strokeWidth="2" />
          </G>
        </Svg>
      </Animated.View>
      <ButtonSection
        q1Tapped={q1Tapped}
        q2Tapped={q2Tapped}
        q3Tapped={q3Tapped}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  graphCardContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  graphCard: {
    elevation: 5,
    borderRadius: 20,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  chartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
