import { JournalEvent } from ".";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when a text message is reeceived from another player or npc
 */

export class ReceiveText extends JournalEvent {
  event: JournalEvents.receiveText;
  From: string;
  Message: string;
  Channel:
    | "wing"
    | "local"
    | "voicechat"
    | "friend"
    | "player"
    | "npc"
    | "squadron"
    | "starsystem";
}
