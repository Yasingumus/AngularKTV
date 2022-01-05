export interface EmissionJson {
    time: number;
    data: EmissionData;
}
// Hier wordt de json die vanuit mockoon wordt opgehaald gedefineerd
export interface EmissionData {
    total: number;
    estimated: number;
    difference: number;
}

