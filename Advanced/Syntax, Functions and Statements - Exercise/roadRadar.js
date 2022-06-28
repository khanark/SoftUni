function checkSpeed(speed, zone) {
    const speedRestriction = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    if (speed <= speedRestriction[zone]) {
        console.log(`Driving ${speed} km/h in a ${speedRestriction[zone]} zone`)
    } else {
        const diff = Math.abs(speedRestriction[zone] - speed)
        let status = ''

        if (diff <= 20) {
            status = "speeding"
        } else if (diff > 20 && diff <= 40) {
            status = "excessive speeding"
        } else {
            status = "reckless driving"
        }

        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedRestriction[zone]} - ${status}`);
    }
}
checkSpeed(120, 'interstate')