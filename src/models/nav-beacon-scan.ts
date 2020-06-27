import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when scanning  a navigation beacon, before the scan data for all the bodies in the system is written into the journal
 */

export class NavBeaconScan extends JournalEvent {
  event: JournalEvents.navBeaconScan;
  NumBodies: number;
  SystemAddress: number;
}
