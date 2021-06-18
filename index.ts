import { Station } from './station';
import { Point } from './point';
import { getBestStation } from './station.service';

function main(): void {
    // create list of stations. assume that we have such amount of stations that array is OK to store them, not more than max value of integer number
    const stations: Station[] = [
        new Station(0, 0, 10),
        new Station(20, 20, 5),
        new Station(10, 0, 12)
    ];
    // (0,0), (100, 100), (15,10) and (18, 18).
    const points: Point[] = [{x: 0, y: 0}, {x: 100, y: 100}, {x: 15, y: 10}, {x: 18, y: 18}]

    // Complexity of O(N^K), where N - number of stations, K - number of test points (devices)
    points.forEach(p => {
        const { station, power} = getBestStation(p, stations);

        // print out results
        if (station) {
            console.log(`Best link station for point ${p.x},${p.y} is ${station.x},${station.y} with power ${power}`)
        } else {
            console.log(`No link station within reach for point ${p.x},${p.y}`)
        }
    })
}

main();
