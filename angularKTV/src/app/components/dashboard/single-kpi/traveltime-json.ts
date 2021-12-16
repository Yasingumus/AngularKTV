export interface TraveltimeJson {
    time: number;
    data: TraveltimeData[];
}

export interface TraveltimeData {
    name: string;
    traveltime: number;
    estimation: number;
}


