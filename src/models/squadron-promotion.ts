import { JournalEvent } from "./journal-event.model";

export class SquadronPromotion extends JournalEvent {
    SquadronName: string;
    OldRank: number;
    NewRank: number;
}