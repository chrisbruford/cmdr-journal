import { JournalEvent } from "./journal-event.model";

/**
 * When written: when using the discovery scanner, and new body discoveries are displayed in the cockpit info window. Note you can get two or three of these in a row, where some bodies are discovered by the automatic passive scan, before the active scan is complete.
 */

export class DiscoveryScan extends JournalEvent {
    SystemAddress: number;
    Bodies: number;
}