import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums";

export class MarketJSON extends JournalEvent {
  event: JournalEvents.market;
  timestamp: string;
  MarketID: number;
  StationName: string;
  StationType: string;
  CarrierDockingAccess: string;
  StarSystem: string;
  items?: {
    id: number;
    Name: string;
    Name_Localised: string;
    Category: string;
    Category_Localised: string;
    BuyPrice: number;
    SellPrice: number;
    MeanPrice: number;
    StockBracket: number;
    DemandBracket: number;
    Stock: number;
    Demand: number;
    Consumer: boolean;
    Producer: boolean;
    Rare: boolean;
  }[];
}
