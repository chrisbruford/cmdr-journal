import { JournalEvent } from './journal-event.model';

/**
 * When written: when using the Technology Broker to unlock new purchasable technology
 * 
 * ## Example
 * 
 * ```javascript
 * {
 *     "timestamp":"2018-03-02T11:28:44Z", 
 *     "event":"TechnologyBroker", 
 *     "BrokerType":"Human", 
 *     "MarketID":128151032, 
 *     "ItemsUnlocked":[
 *         { 
 *             "Name":"Hpt_PlasmaShockCannon_Fixed_Medium", 
 *             "Name_Localised":"Shock Cannon" 
 *         }
 *     ], 
 *     "Commodities":[
 *         { 
 *             "Name":"iondistributor", 
 *             "Name_Localised":"Ion Distributor", 
 *             "Count":6 
 *         }
 *     ], 
 *     "Materials":[ 
 *         { 
 *             "Name":"vanadium", 
 *             "Count":30, 
 *             "Category":"Raw" 
 *         }, 
 *         { 
 *             "Name":"tungsten", 
 *             "Count":30, 
 *             "Category":"Raw" 
 *         }, 
 *         { 
 *             "Name":"rhenium", 
 *             "Count":36, 
 *             "Category":"Raw"
 *         }, 
 *         { 
 *             "Name":"technetium", 
 *             "Count":30, 
 *             "Category":"Raw"
 *         }
 *     ]
 * }
 * ```
 * 
 */
export class TechnologyBroker extends JournalEvent {
    BrokerType: string;
    MarketID: number;
    ItemsUnlocked: {Name: string, Name_Localised: string}[];
    Commodities: {
        Name: string;
        Name_Localised: string;
        Count: number;
    }[];
    Materials: {
        Name: string;
        Name_Localised: string;
        Count: number;
        Category: string;
    }[]
}