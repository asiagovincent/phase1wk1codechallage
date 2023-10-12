const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateDemeritPoints(speed) {
    const speedLimit = 70;// Speed limit in km/h
    const excessSpeed = speed - speedLimit;
    const demeritPoints = Math.floor(excessSpeed / 5);
    return demeritPoints;
}
 
function getValidSpeedInput() {
    return new Promise((resolve) => {
        rl.question('Enter car speed (in km/h): ', (speedInput) => {
            const speed = parseInt(speedInput);
            if (!isNaN(speed) && speed >= 0) {
                resolve(speed);
            } else {
                console.log('Invalid input. Please enter a valid non-negative number.');
                getValidSpeedInput().then(resolve);
            }
        });
    });
}

async function main() {
    const speed = await getValidSpeedInput();
    if (speed < 70) {
        console.log('Ok');
    } else {
        const demeritPoints = calculateDemeritPoints(speed);
        console.log(`Points: ${demeritPoints}`);
        if (demeritPoints > 12) {
            console.log('License suspended');
        }
    }
    rl.close();
}

main();