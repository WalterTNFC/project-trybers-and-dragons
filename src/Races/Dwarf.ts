import Race from './Race';

enum RacePointsLifeMax {
  Dwarf = 80,
}

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _dwarfCreatedInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = RacePointsLifeMax.Dwarf;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    Dwarf._dwarfCreatedInstances += 1;
    return Dwarf._dwarfCreatedInstances;
  }
}