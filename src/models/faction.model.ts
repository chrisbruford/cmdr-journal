export class Faction {
    Name: string;
    FactionState: string;
    Government: string;
    Influence: number;
    PendingStates: {State: string, Trend: number}[];
}