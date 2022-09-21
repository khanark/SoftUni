class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500,
        };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!Object.keys(this.priceForTheCamp).some(key => key == condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.listOfParticipants.some(participant => participant.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (+money < this.priceForTheCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        if (!this.listOfParticipants.some(participant => participant.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        const participantIndex = this.listOfParticipants.findIndex(participant => participant.name == name);
        this.listOfParticipants.splice(participantIndex, 1);

        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        const firstParticipant = this.listOfParticipants.find(participant => participant.name == participant1);
        const secondParticipant = this.listOfParticipants.find(participant => participant.name == participant2);

        // WaterBallonFights game
        if (typeOfGame == 'WaterBalloonFights') {
            if (!firstParticipant || !secondParticipant) {
                throw new Error('Invalid entered name/s.');
            }

            if (firstParticipant.condition != secondParticipant.condition) {
                throw new Error('Choose players with equal condition.');
            }

            let winner;

            if (firstParticipant.power > secondParticipant.power) {
                winner = participant1;
                firstParticipant.wins++;
            } else if (firstParticipant.power < secondParticipant.power) {
                winner = participant2;
                secondParticipant.wins++;
            } else {
                return 'There is no winner.';
            }

            return `The ${winner} is winner in the game ${typeOfGame}.`;
        } else if (typeOfGame == 'Battleship') {
            if (!firstParticipant) {
                throw new Error('Invalid entered name/s.');
            }

            firstParticipant.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        const sortedParticipants = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        const participantsInfo = sortedParticipants.map(
            participant => `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`
        );
        const output = [
            `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`,
            participantsInfo.join('\n'),
        ];

        return output.join('\n');
    }
}

let camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');

console.logA(camp.registerParticipant('Petar Petarson', 'student', 300)), // "The Petar Petarson was successfully registered.";
    console.log(camp.registerParticipant('Sara Dickinson', 'child', 200)), // "The Sara Dickinson was successfully registered.";
    console.log(camp.unregisterParticipant('Sara Dickinson')), // "The Sara Dickinson removed successfully.";
    console.log(camp.unregisterParticipant('John Petarson')); // "The John Petarson is not registered in the camp.";

