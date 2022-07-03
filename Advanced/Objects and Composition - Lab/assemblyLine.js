function createAssemblyLine() {
    // create library with methods/functions
    const functions = {

        // hasClima function
        hasClima(obj) {
            obj.temp = 21;
			obj.tempSettings = 21;
			obj.adjustTemp = () => {
                obj.temp < obj.tempSettings ? obj.temp++ : obj.temp--;
			};
		},

        // hasAudio function
		hasAudio(obj) {
			obj.currentTrack = {
				name: null,
				artist: null,
			};
			obj.nowPlaying = () => {
                if (obj.currentTrack.name) {
					console.log(
						`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`
                        );
                    }
                };
            },

            // hasParktronic function
            hasParktronic(obj) {
                obj.checkDistance = distance => {
				if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
				} else if (distance >= 0.1 && distance < 0.25) {
                    console.log('Beep! Beep!');
				} else if (distance >= 0.25 && distance < 0.5) {
                    console.log('Beep!');
				}
			};
		},
	};

    // return the newly created library
	return functions;
}
// setup
const assemblyLine = createAssemblyLine();
const myCar = {
    make: 'Toyota',
    model: 'Avensis',
};

// input
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
	name: 'Never Gonna Give You Up',
	artist: 'Rick Astley',
};
myCar.nowPlaying();
