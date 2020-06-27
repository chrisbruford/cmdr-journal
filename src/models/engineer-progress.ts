import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When Written: when a player increases their access to an engineer
 * Also a summary of progress for all engineers at startup
 *
 * ## Example
 * Single engineer update example
 * ```javascript
 * {
 *     "timestamp":"2016-06-10T14:32:03Z",
 *     "event":"EngineerProgress",
 *     "Progress":"Unlocked",
 *     "RankProgress": 0,
 *     "Engineer":"Elvira Martuuk",
 *     "EngineerID":300160
 * }
 * ```
 * Startup summary example
 * ```javascript
 * {
 *  "timestamp":"2018-05-04T13:58:22Z",
 *  "event":"EngineerProgress",
 *  "Engineers":[
 *    {
 *      "Engineer":"Zacariah Nemo",
 *      "EngineerID":300050,
 *      "Progress":"Unlocked",
 *      "RankProgress":0,
 *      "Rank":5
 *    },
 *    {
 *      "Engineer":"Marco Qwent",
 *      "EngineerID":300200,
 *      "Progress":"Unlocked",
 *      "RankProgress":37,
 *      "Rank":4
 *    },
 *    {
 *      "Engineer":"Hera Tani",
 *      "EngineerID":300090,
 *      "Progress":"Unlocked",
 *      "RankProgress":0,
 *      "Rank":3
 *    },
 *    {
 *      "Engineer":"Tod 'The Blaster' McQuinn",
 *      "EngineerID":300260,
 *      "Progress":"Unlocked",
 *      "RankProgress":97,
 *      "Rank":3
 *    },
 *    {
 *      "Engineer":"Selene Jean",
 *      "EngineerID":300210,
 *      "Progress":"Known"
 *    },
 *    {
 *      "Engineer":"Lei Cheung",
 *      "EngineerID":300120,
 *      "Progress":"Known"
 *    },
 *    {
 *      "Engineer":"Juri Ishmaak",
 *      "EngineerID":300250,
 *      "Progress":"Known"
 *    },
 *    {
 *      "Engineer":"Felicity Farseer",
 *      "EngineerID":300100,
 *      "Progress":"Unlocked",
 *      "RankProgress":0,
 *      "Rank":5
 *    },
 *    {
 *      "Engineer":"Professor Palin",
 *      "EngineerID":300220,
 *      "Progress":"Invited"
 *    },
 *    {
 *      "Engineer":"Elvira Martuuk",
 *      "EngineerID":300160,
 *      "Progress":"Unlocked",
 *      "RankProgress":0,
 *      "Rank":5
 *    },
 *    {
 *      "Engineer":"Lori Jameson",
 *      "EngineerID":300230,
 *      "Progress":"Known"
 *    },
 *    {
 *      "Engineer":"The Dweller",
 *      "EngineerID":300180,
 *      "Progress":"Unlocked",
 *      "RankProgress":0,
 *      "Rank":5
 *    },
 *    {
 *      "Engineer":"Liz Ryder",
 *      "EngineerID":300080,
 *      "Progress":"Unlocked",
 *      "RankProgress":93,
 *      "Rank":3
 *    },
 *    {
 *      "Engineer":"Ram Tah",
 *      "EngineerID":300110,
 *      "Progress":"Unlocked",
 *      "RankProgress":31,
 *      "Rank":3
 *    }
 *  ]
 * }
 * ```
 */

export class EngineerProgress extends JournalEvent {
  event: JournalEvents.engineerProgress;
  /**
   * Parameters for updating one engineer
   */
  Engineer: string;
  EngineerID: number;
  Rank: number;
  Progress: "Invited" | "Acquainted" | "Unlocked" | "Barred";
  RankProgress: number;
  /**
   * Parameters for summary at startup
   */
  Engineers: {
    Engineer: string;
    EngineerID: number;
    Rank: number;
    Progress: "Invited" | "Acquainted" | "Unlocked" | "Barred";
    RankProgress: number;
  }[];
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"EngineerProgress", "Progress":"Unlocked", "Engineer":"Elvira Martuuk" }
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"EngineerProgress", "Engineer":"Elvira Martuuk", "Rank":2 }
