/*
* Station class stores data about station like:
* x - X coordinate of station
* y - Y coordinate of station
* r - radius or reach value, at which range the station has power
*
* Functions:
* getPowerByCoordinate - calculate how much power device can get from the station by device coordinates
* getPowerByDistance - calculate how much power device can get from the station by distance from device
* */
export class Station {
    x: number;
    y: number;
    r: number;

    constructor(x: number, y: number, r: number) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    getPowerByCoordinate(pointX: number, pointY: number): number {
        // use formula d=√((x_2-x_1)²+(y_2-y_1)²)
        const distance = Math.sqrt(Math.pow(this.x - pointX, 2) + Math.pow(this.y - pointY, 2));
        return this.getPowerByDistance(distance);
    }

    getPowerByDistance(distance: number): number {
        if (distance >= this.r) {
            return 0;
        }
        return Math.pow((this.r - Math.abs(distance)), 2);
    }
}
