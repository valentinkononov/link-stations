import { Station } from './station';
import { Point } from './point';

export const getBestStation = (point: Point, stations: Station[]): { station: Station, power: number } => {
    let maxPower = 0;
    let maxStation = undefined;

    for (let i = 0; i < stations.length; i++) {
        const iPower = stations[i].getPowerByCoordinate(point.x, point.y);
        if (iPower > maxPower) {
            maxPower = iPower;
            maxStation = stations[i];
        }
    }

    return { station: maxStation, power: maxPower };
}
