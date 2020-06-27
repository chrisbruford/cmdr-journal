import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when performing a full system scan (“Honk”)
 */

export class FSSDiscoveryScan extends JournalEvent {
  event: JournalEvents.fssDiscoveryScan;
  Progress: number;
  BodyCount: number;
  NonBodyCount: number;
}
