import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When Written: when a mission has failed
 */

export class MissionFailed extends JournalEvent {
  event: JournalEvents.missionFailed;
  Name: string;
  MissionID: number;
  Fine?: number;
}
