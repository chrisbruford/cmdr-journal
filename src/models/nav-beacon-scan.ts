import { JournalEvent } from "./journal-event.model";

/**
 * When written: when scanning  a navigation beacon, before the scan data for all the bodies in the system is written into the journal
 */

export class NavBeaconScan extends JournalEvent {
    NumBodies: number;
    SystemAddress: number;
}