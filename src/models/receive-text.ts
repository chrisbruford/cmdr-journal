import { JournalEvent } from ".";

/**
 * When written: when a text message is reeceived from another player or npc
 */

export class ReceiveText extends JournalEvent {
    From: string;
    Message: string;
    Channel: "wing" | "local" | "voicechat" | "friend" | "player" | "npc" | "squadron" | "starsystem";
}