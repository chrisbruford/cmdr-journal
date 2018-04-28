[cmdr-journal](../README.md) > [Market](../classes/market.md)



# Class: Market


When written: when accessing the commodity market in a station

A separate file market.json is written to the same folder as the journal, containing full market price info

## Example

    {
       "timestamp":"2017-10-05T10:10:34Z",
        "event":"Market",
        "MarketID":128678535,
        "StationName":"Black Hide",
        "StarSystem":"Wyrd",
        "Items":[
            { "id":128049152, "Name":"$platinum_name;", "Name_Localised":"Platinum", "Category":"$MARKET_category_metals;", "Category_Localised":"Metals", "BuyPrice":0, "SellPrice":42220, "MeanPrice":19756, "StockBracket":0, "DemandBracket":3, "Stock":0, "Demand":9182, "Consumer":true, "Producer":false, "Rare":false },
            { "id":128049153, "Name":"$palladium_name;", "Name_Localised":"Palladium", "Category":"$MARKET_category_metals;", "Category_Localised":"Metals", "BuyPrice":0, "SellPrice":13999, "MeanPrice":13244, "StockBracket":0, "DemandBracket":3, "Stock":0, "Demand":123183, "Consumer":true, "Producer":false, "Rare":false },
            { "id":128049154, "Name":"$gold_name;", "Name_Localised":"Gold", "Category":"$MARKET_category_metals;", "Category_Localised":"Metals", "BuyPrice":0, "SellPrice":10831, "MeanPrice":9373, "StockBracket":0, "DemandBracket":3, "Stock":0, "Demand":151492, "Consumer":true, "Producer":false, "Rare":false },
            { "id":128049155, "Name":"$silver_name;", "Name_Localised":"Silver", "Category":"$MARKET_category_metals;", "Category_Localised":"Metals", "BuyPrice":0, "SellPrice":5512, "MeanPrice":4759, "StockBracket":0, "DemandBracket":3, "Stock":0, "Demand":266258, "Consumer":true, "Producer":false, "Rare":false }
        ]
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ Market**







## Index

### Properties

* [MarketID](market.md#marketid)
* [StarSystem](market.md#starsystem)
* [StationName](market.md#stationname)
* [event](market.md#event)
* [items](market.md#items)
* [timestamp](market.md#timestamp)



---
## Properties
<a id="marketid"></a>

###  MarketID

**●  MarketID**:  *`number`* 

*Defined in models/market.ts:27*





___

<a id="starsystem"></a>

###  StarSystem

**●  StarSystem**:  *`string`* 

*Defined in models/market.ts:29*





___

<a id="stationname"></a>

###  StationName

**●  StationName**:  *`string`* 

*Defined in models/market.ts:28*





___

<a id="event"></a>

###  event

**●  event**:  *`string`* 

*Inherited from [JournalEvent](journalevent.md).[event](journalevent.md#event)*

*Defined in models/journal-event.model.ts:2*





___

<a id="items"></a>

### «Optional» items

**●  items**:  *`object`[]* 

*Defined in models/market.ts:30*





___

<a id="timestamp"></a>

###  timestamp

**●  timestamp**:  *`string`* 

*Inherited from [JournalEvent](journalevent.md).[timestamp](journalevent.md#timestamp)*

*Defined in models/journal-event.model.ts:3*





___


