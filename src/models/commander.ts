import { JournalEvent } from "./journal-event.model";

/**
 * When written: at the start of the LoadGame process
 * 
 * This is written before the inventory, loadout, etc
 */

export class Commander extends JournalEvent {
    Name: string;
    FID: string;
}