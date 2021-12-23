export interface PercentagesJson {
  time: number;
  data: PercentagesData[];
}
// Hier wordt de json die vanuit mockoon wordt opgehaald gedefineerd

export interface PercentagesData {
  route: string;
  difference: number;
  percentage: number;
}

