import { JournalEvent } from "./journal-event.model";

/**
 * When written: when performing a full system scan (“Honk”)
 */

 export class FSSDiscoveryScan extends JournalEvent {
   Progress: number;
   BodyCount: number;
   NonBodyCount: number;
 }