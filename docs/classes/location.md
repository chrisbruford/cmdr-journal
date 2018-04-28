[cmdr-journal](../README.md) > [Location](../classes/location.md)



# Class: Location


When written: on startup or resurrection

## Example

    {
        "timestamp":"2016-07-21T13:14:25Z",
        "event":"Location",
        "Docked":true,
        "StationName":"Azeban City",
        "StationType":"Coriolis",
        "StarSystem":"Eranin",
        "StarPos":[-22.844,36.531,-1.188],
        "Allegiance":"Alliance",
        "Economy":"$economy_Agri;",
        "Government":"$government_Communism;",
        "Security":$SYSTEM_SECURITY_medium;,
        "Faction":"Eranin Peoples Party"
    }

    {
        "timestamp":"2016-09-21T14:11:22Z",
        "event":"Location",
        "Docked":false,
        "StarSystem":"Alpha Centauri",
        "StarPos":[3.031,-0.094,3.156],
        "Allegiance":"Independent",
        "Economy":"$economy_Extraction;",
        "Economy_Localised":"Extraction",
        "Government":"$government_Cooperative;",
        "Government_Localised":"Cooperative",
        "Security":"$SYSTEM_SECURITY_medium;",
        "Security_Localised":"Medium Security",
        "Body":"Alpha Centauri B 1",
        "Powers":["Zachary Hudson"],
        "PowerplayState":"Exploited",
        "Faction":"Hutton Orbital Truckers Co-Operative",
        "FactionState":"Outbreak"
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ Location**







## Index

### Properties

* [Body](location.md#body)
* [BodyID](location.md#bodyid)
* [BodyType](location.md#bodytype)
* [Docked](location.md#docked)
* [FactionState](location.md#factionstate)
* [Factions](location.md#factions)
* [Latitude](location.md#latitude)
* [Longitude](location.md#longitude)
* [MarketID](location.md#marketid)
* [PowerplayState](location.md#powerplaystate)
* [Powers](location.md#powers)
* [Security_Localised](location.md#security_localised)
* [StarPos](location.md#starpos)
* [StarSystem](location.md#starsystem)
* [StationName](location.md#stationname)
* [StationType](location.md#stationtype)
* [SystemAddress](location.md#systemaddress)
* [SystemAllegiance](location.md#systemallegiance)
* [SystemEconomy](location.md#systemeconomy)
* [SystemEconomy_Localised](location.md#systemeconomy_localised)
* [SystemFaction](location.md#systemfaction)
* [SystemGovernment](location.md#systemgovernment)
* [SystemGovernment_Localised](location.md#systemgovernment_localised)
* [SystemSecondEconomy](location.md#systemsecondeconomy)
* [SystemSecondEconomy_Localised](location.md#systemsecondeconomy_localised)
* [SystemSecurity](location.md#systemsecurity)
* [Wanted](location.md#wanted)
* [event](location.md#event)
* [timestamp](location.md#timestamp)



---
## Properties
<a id="body"></a>

###  Body

**●  Body**:  *`string`* 

*Defined in models/location.ts:51*





___

<a id="bodyid"></a>

###  BodyID

**●  BodyID**:  *`number`* 

*Defined in models/location.ts:52*





___

<a id="bodytype"></a>

###  BodyType

**●  BodyType**:  *[BodyTypes](../enums/bodytypes.md)* 

*Defined in models/location.ts:53*





___

<a id="docked"></a>

###  Docked

**●  Docked**:  *`boolean`* 

*Defined in models/location.ts:54*





___

<a id="factionstate"></a>

###  FactionState

**●  FactionState**:  *`string`* 

*Defined in models/location.ts:61*





___

<a id="factions"></a>

###  Factions

**●  Factions**:  *[Faction](faction.md)[]* 

*Defined in models/location.ts:72*





___

<a id="latitude"></a>

### «Optional» Latitude

**●  Latitude**:  *`number`* 

*Defined in models/location.ts:55*





___

<a id="longitude"></a>

### «Optional» Longitude

**●  Longitude**:  *`number`* 

*Defined in models/location.ts:56*





___

<a id="marketid"></a>

### «Optional» MarketID

**●  MarketID**:  *`number`* 

*Defined in models/location.ts:59*





___

<a id="powerplaystate"></a>

###  PowerplayState

**●  PowerplayState**:  *"InPrepareRadius"⎮"Prepared"⎮"Exploited"⎮"Contested"⎮"Controlled"⎮"Turmoil"⎮"HomeSystem"* 

*Defined in models/location.ts:74*





___

<a id="powers"></a>

###  Powers

**●  Powers**:  *`string`[]* 

*Defined in models/location.ts:73*





___

<a id="security_localised"></a>

###  Security_Localised

**●  Security_Localised**:  *`string`* 

*Defined in models/location.ts:70*





___

<a id="starpos"></a>

###  StarPos

**●  StarPos**:  *[`number`,`number`,`number`]* 

*Defined in models/location.ts:50*





___

<a id="starsystem"></a>

###  StarSystem

**●  StarSystem**:  *`string`* 

*Defined in models/location.ts:48*





___

<a id="stationname"></a>

### «Optional» StationName

**●  StationName**:  *`string`* 

*Defined in models/location.ts:57*





___

<a id="stationtype"></a>

### «Optional» StationType

**●  StationType**:  *`string`* 

*Defined in models/location.ts:58*





___

<a id="systemaddress"></a>

###  SystemAddress

**●  SystemAddress**:  *`number`* 

*Defined in models/location.ts:49*





___

<a id="systemallegiance"></a>

###  SystemAllegiance

**●  SystemAllegiance**:  *`string`* 

*Defined in models/location.ts:62*





___

<a id="systemeconomy"></a>

###  SystemEconomy

**●  SystemEconomy**:  *`string`* 

*Defined in models/location.ts:63*





___

<a id="systemeconomy_localised"></a>

###  SystemEconomy_Localised

**●  SystemEconomy_Localised**:  *`string`* 

*Defined in models/location.ts:64*





___

<a id="systemfaction"></a>

###  SystemFaction

**●  SystemFaction**:  *`string`* 

*Defined in models/location.ts:60*





___

<a id="systemgovernment"></a>

###  SystemGovernment

**●  SystemGovernment**:  *`string`* 

*Defined in models/location.ts:67*





___

<a id="systemgovernment_localised"></a>

###  SystemGovernment_Localised

**●  SystemGovernment_Localised**:  *`string`* 

*Defined in models/location.ts:68*





___

<a id="systemsecondeconomy"></a>

###  SystemSecondEconomy

**●  SystemSecondEconomy**:  *`string`* 

*Defined in models/location.ts:65*





___

<a id="systemsecondeconomy_localised"></a>

###  SystemSecondEconomy_Localised

**●  SystemSecondEconomy_Localised**:  *`string`* 

*Defined in models/location.ts:66*





___

<a id="systemsecurity"></a>

###  SystemSecurity

**●  SystemSecurity**:  *`string`* 

*Defined in models/location.ts:69*





___

<a id="wanted"></a>

###  Wanted

**●  Wanted**:  *`boolean`* 

*Defined in models/location.ts:71*





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


