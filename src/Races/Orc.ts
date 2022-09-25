import Race from './Race';

enum RacePointsLifeMax {
  Orc = 74,
}

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _orcCreatedInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = RacePointsLifeMax.Orc; 
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    Orc._orcCreatedInstances += 1;
    return Orc._orcCreatedInstances;
  }
}