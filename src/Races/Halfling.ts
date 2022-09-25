import Race from './Race';

enum RacePointsLifeMax {
  Halfling = 60,
}

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _halflingCreatedInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = RacePointsLifeMax.Halfling; 
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    Halfling._halflingCreatedInstances += 1;
    return Halfling._halflingCreatedInstances;
  }
}