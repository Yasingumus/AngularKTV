export interface TraveltimeJson {
    time: number;
    data: TraveltimeData[];
}
// De ontvangen Json wordt hier eerst nog gedefineerd
export interface TraveltimeData {
    name: string;
    traveltime: number;
    estimation: number;
}


