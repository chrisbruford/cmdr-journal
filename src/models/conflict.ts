export class WaringFaction {
  Name: string;
  Stake: string;
  WonDays: number;
}

export class Conflict {
  WarType: string;
  Status: string;
  Faction1: WaringFaction
  Faction2: WaringFaction;
}
