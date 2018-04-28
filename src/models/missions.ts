import { JournalEvent } from "./journal-event.model";

export class Mission {
    MissionID: number;
    Name: string;
    PassengerMission: boolean;
    /**
     * time left in seconds
     */
    Expires: number;    
}

/**
 * When written: at startup
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2017-10-02T10:37:58Z", 
 *     "event":"Missions", 
 *     "Active":[ 
 *         { 
 *             "MissionID":65380900, 
 *             "Name":"Mission_Courier_name", 
 *             "PassengerMission":false, 
 *             "Expires":82751 
 *          } 
 *     ], 
 *     "Failed":[], 
 *     "Complete":[] 
 * }
 * ```
 */

export class Missions extends JournalEvent {
    Active: Mission[];
    Failed: Mission[];
    Complete: Mission[];

}