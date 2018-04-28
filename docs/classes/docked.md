[cmdr-journal](../README.md) > [Docked](../classes/docked.md)



# Class: Docked


When written: when landing at landing pad in a space station, outpost, or surface settlement

## Example

    {
        "timestamp":"2018-03-07T12:22:25Z",
        "event":"Docked",
        "StationName":"Jenner Orbital",
        "StationType":"Outpost",
        "StarSystem":"Luhman 16",
        "SystemAddress":22960358574928,
        "MarketID":3228883456,
        "StationFaction":"Union of Luhman 16 Values Party",
        "FactionState":"CivilWar",
        "StationGovernment":"$government_Democracy;",
        "StationGovernment_Localised":"Democracy",
        "StationAllegiance":"Federation",
        "StationServices":[
            "Dock",
            "Autodock",
            "BlackMarket",
            "Commodities",
            "Contacts",
            "Exploration",
            "Missions",
            "Outfitting",
            "CrewLounge",
            "Rearm",
            "Refuel",
            "Workshop",
            "MissionsGenerated",
            "FlightController",
            "StationOperations",
            "Powerplay",
            "SearchAndRescue"
        ],
        "StationEconomy":"$economy_Refinery;",
        "StationEconomy_Localised":"Refinery",
        "StationEconomies":[
            {
                "Name":"$economy_Refinery;",
                "Name_Localised":"Refinery",
                "Proportion":0.760000
            },
            {
                "Name":"$economy_Extraction;",
                "Name_Localised":"Extraction",
                "Proportion":0.240000
            }
        ],
        "DistFromStarLS":10.061876
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ Docked**







## Index

### Properties

* [CockpitBreached](docked.md#cockpitbreached)
* [DistFromStarLS](docked.md#distfromstarls)
* [FactionState](docked.md#factionstate)
* [MarketID](docked.md#marketid)
* [StarSystem](docked.md#starsystem)
* [StationAllegiance](docked.md#stationallegiance)
* [StationEconomies](docked.md#stationeconomies)
* [StationEconomy](docked.md#stationeconomy)
* [StationEconomy_Localised](docked.md#stationeconomy_localised)
* [StationFaction](docked.md#stationfaction)
* [StationGovernment](docked.md#stationgovernment)
* [StationGovernment_Localised](docked.md#stationgovernment_localised)
* [StationName](docked.md#stationname)
* [StationServices](docked.md#stationservices)
* [StationType](docked.md#stationtype)
* [SystemAddress](docked.md#systemaddress)
* [Wanted](docked.md#wanted)
* [event](docked.md#event)
* [timestamp](docked.md#timestamp)



---
## Properties
<a id="cockpitbreached"></a>

### «Optional» CockpitBreached

**●  CockpitBreached**:  *`boolean`* 

*Defined in models/docked.ts:66*





___

<a id="distfromstarls"></a>

###  DistFromStarLS

**●  DistFromStarLS**:  *`number`* 

*Defined in models/docked.ts:79*





___

<a id="factionstate"></a>

###  FactionState

**●  FactionState**:  *`string`* 

*Defined in models/docked.ts:68*





___

<a id="marketid"></a>

###  MarketID

**●  MarketID**:  *`number`* 

*Defined in models/docked.ts:62*





___

<a id="starsystem"></a>

###  StarSystem

**●  StarSystem**:  *`string`* 

*Defined in models/docked.ts:65*





___

<a id="stationallegiance"></a>

###  StationAllegiance

**●  StationAllegiance**:  *`string`* 

*Defined in models/docked.ts:69*





___

<a id="stationeconomies"></a>

###  StationEconomies

**●  StationEconomies**:  *`object`[]* 

*Defined in models/docked.ts:72*





___

<a id="stationeconomy"></a>

###  StationEconomy

**●  StationEconomy**:  *`string`* 

*Defined in models/docked.ts:70*





___

<a id="stationeconomy_localised"></a>

###  StationEconomy_Localised

**●  StationEconomy_Localised**:  *`string`* 

*Defined in models/docked.ts:71*





___

<a id="stationfaction"></a>

###  StationFaction

**●  StationFaction**:  *`string`* 

*Defined in models/docked.ts:67*





___

<a id="stationgovernment"></a>

###  StationGovernment

**●  StationGovernment**:  *`string`* 

*Defined in models/docked.ts:77*





___

<a id="stationgovernment_localised"></a>

###  StationGovernment_Localised

**●  StationGovernment_Localised**:  *`string`* 

*Defined in models/docked.ts:78*





___

<a id="stationname"></a>

###  StationName

**●  StationName**:  *`string`* 

*Defined in models/docked.ts:61*





___

<a id="stationservices"></a>

###  StationServices

**●  StationServices**:  *[StationServices](../enums/stationservices.md)[]* 

*Defined in models/docked.ts:80*





___

<a id="stationtype"></a>

###  StationType

**●  StationType**:  *`string`* 

*Defined in models/docked.ts:64*





___

<a id="systemaddress"></a>

###  SystemAddress

**●  SystemAddress**:  *`number`* 

*Defined in models/docked.ts:63*





___

<a id="wanted"></a>

### «Optional» Wanted

**●  Wanted**:  *`boolean`* 

*Defined in models/docked.ts:81*





___

<a id="event"></a>

###  event

**●  event**:  *`string`* 

*Inherited from [JournalEvent](journalevent.md).[event](journalevent.md#event)*

*Defined in models/journal-event.model.ts:2*





___

<a id="timestamp"></a>

###  timestamp

**●  timestamp**:  *`string`* 

*Inherited from [JournalEvent](journalevent.md).[timestamp](journalevent.md#timestamp)*

*Defined in models/journal-event.model.ts:3*





___


