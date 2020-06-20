import { JournalEvent } from "./journal-event.model";

/**
 * Written when there's a transfer of credits.
 *{ "timestamp":"2020-03-24T15:34:46Z",
 *"event":"CarrierBankTransfer",
 *"CarrierID":3700005632,
 *"Deposit":80000,
 *"PlayerBalance":717339604128,
 *"CarrierBalance":3020010 } 
 *
 * Balance is recorded after transfer.
 */


export class CarrierBankTransfer extends JournalEvent {
	CarrierID: number;
	Deposit?: number;
	Withdraw?: number;
	PlayerBalance: number;
	CarrierBalance: number;
}
