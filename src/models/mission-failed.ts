import { JournalEvent } from "./journal-event.model";

/**
 * When Written: when a mission has failed
 */

export class MissionFailed extends JournalEvent {
    Name: string;
    MissionID: number;
    Fine?: number;
}