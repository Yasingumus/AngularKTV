export interface PercentagesJson {
  time: number;
  data: PercentagesData[];
}

export interface PercentagesData {
  route: number;
  difference: number;
  percentage: number;
}

