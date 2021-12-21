export interface PercentagesJson {
  time: number;
  data: PercentagesData[];
}

export interface PercentagesData {
  route: string;
  difference: number;
  percentage: number;
}

