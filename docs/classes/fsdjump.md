[cmdr-journal](../README.md) > [FSDJump](../classes/fsdjump.md)



# Class: FSDJump


When written: when jumping from one star system to another

## Example

    {
        "timestamp":"2017-02-27T15:37:47Z",
        "event":"FSDJump",
        "StarSystem":"HR 3316",
        "StarPos":[100.719,19.813,-51.125],
        "SystemAllegiance":"Independent",
        "SystemEconomy":"$economy_Colony;",
        "SystemEconomy_Localised":"Colony",
        "SystemGovernment":"$government_Democracy;",
        "SystemGovernment_Localised":"Democracy",
        "SystemSecurity":"$SYSTEM_SECURITY_medium;",
        "SystemSecurity_Localised":"Medium Security",
        "JumpDist":20.326,
        "FuelUsed":1.260775,
        "FuelLevel":12.872868,
        "Factions":[
            {
                "Name":"Independent HR 3316 Liberals",
                "FactionState":"Outbreak",
                "Government":"Democracy",
                "Influence":0.550000
            },
            {
                "Name":"Jet Natural Partners",
                "FactionState":"None",
                "Government":"Corporate",
                "Influence":0.150000
            },
            {
                "Name":"Camorra of HR 3316",
                "FactionState":"None",
                "Government":"Anarchy",
                "Influence":0.090000
            },
            {
                "Name":"HR 3316 Nobles",
                "FactionState":"None",
                "Government":"Feudal",
                "Influence":0.210000
            }
        ],
        "SystemFaction":"Independent HR 3316 Liberals",
        "FactionState":"Outbreak" }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ FSDJump**







## Index

### Properties

* [Body](fsdjump.md#body)
* [BoostUsed](fsdjump.md#boostused)
* [FactionState](fsdjump.md#factionstate)
* [Factions](fsdjump.md#factions)
* [FuelLevel](fsdjump.md#fuellevel)
* [FuelUsed](fsdjump.md#fuelused)
* [JumpDist](fsdjump.md#jumpdist)
* [Population](fsdjump.md#population)
* [PowerplayerState](fsdjump.md#powerplayerstate)
* [Powers](fsdjump.md#powers)
* [RecoveringStates](fsdjump.md#recoveringstates)
* [StarPos](fsdjump.md#starpos)
* [StarSystem](fsdjump.md#starsystem)
* [SystemAllegiance](fsdjump.md#systemallegiance)
* [SystemEconomy](fsdjump.md#systemeconomy)
* [SystemEconomy_Localised](fsdjump.md#systemeconomy_localised)
* [SystemFaction](fsdjump.md#systemfaction)
* [SystemGovernment](fsdjump.md#systemgovernment)
* [SystemGovernment_Localised](fsdjump.md#systemgovernment_localised)
* [SystemSecurity](fsdjump.md#systemsecurity)
* [SystemSecurity_Localised](fsdjump.md#systemsecurity_localised)
* [Wanted](fsdjump.md#wanted)
* [event](fsdjump.md#event)
* [timestamp](fsdjump.md#timestamp)



---
## Properties
<a id="body"></a>

###  Body

**●  Body**:  *`string`* 

*Defined in models/fsd-jump.ts:58*





___

<a id="boostused"></a>

###  BoostUsed

**●  BoostUsed**:  *`boolean`* 

*Defined in models/fsd-jump.ts:62*





___

<a id="factionstate"></a>

###  FactionState

**●  FactionState**:  *`string`* 

*Defined in models/fsd-jump.ts:64*





___

<a id="factions"></a>

###  Factions

**●  Factions**:  *[Faction](faction.md)[]* 

*Defined in models/fsd-jump.ts:73*





___

<a id="fuellevel"></a>

###  FuelLevel

**●  FuelLevel**:  *`number`* 

*Defined in models/fsd-jump.ts:61*





___

<a id="fuelused"></a>

###  FuelUsed

**●  FuelUsed**:  *`number`* 

*Defined in models/fsd-jump.ts:60*





___

<a id="jumpdist"></a>

###  JumpDist

**●  JumpDist**:  *`number`* 

*Defined in models/fsd-jump.ts:59*





___

<a id="population"></a>

###  Population

**●  Population**:  *`number`* 

*Defined in models/fsd-jump.ts:72*





___

<a id="powerplayerstate"></a>

### «Optional» PowerplayerState

**●  PowerplayerState**:  *"InPrepareRadius"⎮"Prepared"⎮"Exploited"⎮"Contested"⎮"Controlled"⎮"Turmoil"⎮"HomeSystem"* 

*Defined in models/fsd-jump.ts:76*





___

<a id="powers"></a>

### «Optional» Powers

**●  Powers**:  *`string`[]* 

*Defined in models/fsd-jump.ts:75*





___

<a id="recoveringstates"></a>

###  RecoveringStates

**●  RecoveringStates**:  *`object`[]* 

*Defined in models/fsd-jump.ts:74*





___

<a id="starpos"></a>

###  StarPos

**●  StarPos**:  *[`number`,`number`,`number`]* 

*Defined in models/fsd-jump.ts:57*





___

<a id="starsystem"></a>

###  StarSystem

**●  StarSystem**:  *`string`* 

*Defined in models/fsd-jump.ts:56*





___

<a id="systemallegiance"></a>

###  SystemAllegiance

**●  SystemAllegiance**:  *`string`* 

*Defined in models/fsd-jump.ts:65*





___

<a id="systemeconomy"></a>

###  SystemEconomy

**●  SystemEconomy**:  *`string`* 

*Defined in models/fsd-jump.ts:66*





___

<a id="systemeconomy_localised"></a>

###  SystemEconomy_Localised

**●  SystemEconomy_Localised**:  *`string`* 

*Defined in models/fsd-jump.ts:67*





___

<a id="systemfaction"></a>

###  SystemFaction

**●  SystemFaction**:  *`string`* 

*Defined in models/fsd-jump.ts:63*





___

<a id="systemgovernment"></a>

###  SystemGovernment

**●  SystemGovernment**:  *`string`* 

*Defined in models/fsd-jump.ts:68*





___

<a id="systemgovernment_localised"></a>

###  SystemGovernment_Localised

**●  SystemGovernment_Localised**:  *`string`* 

*Defined in models/fsd-jump.ts:69*





___

<a id="systemsecurity"></a>

###  SystemSecurity

**●  SystemSecurity**:  *`string`* 

*Defined in models/fsd-jump.ts:70*





___

<a id="systemsecurity_localised"></a>

###  SystemSecurity_Localised

**●  SystemSecurity_Localised**:  *`string`* 

*Defined in models/fsd-jump.ts:71*





___

<a id="wanted"></a>

###  Wanted

**●  Wanted**:  *`boolean`* 

*Defined in models/fsd-jump.ts:77*





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


