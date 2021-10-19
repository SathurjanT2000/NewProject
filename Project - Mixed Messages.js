const workout = {
    _push: {
        chest: ['incline bench presses', 'bench presses', 'close-grip bench presses', 'decline bench presses', 'machine bench press', 'parallel bar dips', 'push ups', 'dumbbell presses', 'dumbbell flys', 'incline dumbbell presses', 'incline dumbbell flys', 'pec deck flys', 'cable crossover flys', 'dumbbell pullovers', 'barbell pullovers'],
        shoulders: ['back presses', 'seated front presses', 'seated dumbbell presses', 'arnold presses', 'bent-over lateral raises', 'alternate front arm raises', 'side-lying lateral raises', 'low-pulley front raises, underhand grip', 'low-pulley front raises, neutral grip', 'high-pulley lateral extensions', 'external arm rotations at a pulley', 'low-pulley bent-over lateral raises', 'low-pulley lateral raises', 'one-dumbbell front raises', 'barbell front raises', 'upright rows', 'machine lateral raises', 'pec deck rear-delt laterals'],
        triceps: ['push-downs', 'reverse push-downs', 'one-arm reverse push-downs', 'overhead cable tricps extentions', 'lying tricpes extentions', 'one-arm overhead dumbbell triceps extentions', 'ticeps kickbacks', 'seated dumbbell tricpes extentions', 'seated E-Z bar triceps extentions', 'triceps dips'],
    },
    _pull: {
        back: ['chin-ups', 'reverse chin-ups', 'lat pull-downs', 'back lat pull-down', 'close-grip lat pull-downs', 'seated rows', 'wide grip seated rows', 'straight-arm lat pull-downs', 'one-arm dumbbell rows', 'dumbbell rows', 'barbell rows', 't-bar rows', 't-bar rows with abdominal support', 'stiff-legged deadlifts', 'sumo deadlifts', 'deadlifts', 'trap bar deadifts', 'back extension', 'machine back extention', 'upright rows', 'barbell shrugs', 'dumbbell shrugs', 'trap bar shrugs', 'machine shrugs'],
        biceps: ['dumbbell curls', 'concentration curls', 'incline dumbbell curls', 'hammer curls', 'low-pulley curls', 'high-pulley curls', 'barbell curls', 'machine curls', 'preacher curls', 'reverse wrist curls', 'wrist curls', 'reverse barbell curls'],
    },
    _legs: ['dumbbell squats', 'squats with a dumbell held between the legs', 'front squats', 'squats', 'power squats', 'incline leg presses', 'hack squats', 'box squats', 'leg extentions', 'lying leg curls', 'standing leg curls', 'seated leg curls', 'good morning', 'cable adductions', 'machine adductions', 'flexion and extension of the feet', 'standing calf raises', 'one-leg tow raises', 'donkey calf raises', 'seated machine calf raises', 'seated barbell calf raises'],
    _core: ['crunches', 'sit-ups', 'gym ladder sit=ups', 'calves over bench sit-ups', 'incline bench sit-ups', 'suspended bench sit-ups', 'high-pulley crunches', 'machine crunches', 'incline leg raises', 'leg raises', 'hanging leg raises', 'trunk rotations', 'dumbbell side bends', 'roman chair side bends', 'machine trunk rotations'],
    get chest() {
        return this._push.chest;
    },
    set chest(chestInput) {
        this._push.chest = chestInput;
    },
    get shoulders() {
        return this._push.shoulders;
    },
    set shoulders(shouldersInput) {
        this._push.shoulders = shouldersInput;
    },
    get triceps() {
        return this._push.triceps;
    },
    set triceps(tricepsInput) {
        this._push.triceps = tricepsInput;
    },
    get back() {
        return this._pull.back;
    },
    set back(backInput) {
        this._pull.back = backInput;
    },
    get biceps() {
        return this._pull.biceps;
    },
    set biceps(bicepsInput) {
        this._pull.biceps = bicepsInput;
    },
    get legs() {
        return this._legs;
    },
    set legs(legsInput) {
        this._legs = legsInput;
    },
    get core() {
        return this._core;
    },
    set core(coreInput) {
        this._core = coreInput;
    },
    addExercise(muscleGroup, exerciseName) {
        if (exerciseName === undefined) {
            console.log('Please enter a exercise')
        }
        muscleGroup = muscleGroup.toLowerCase();
        exerciseName = exerciseName.toLowerCase();
        switch (muscleGroup) {
            case chest:
                return this._push.chest.push(exerciseName);
                break;
            case shoulders:
                return this._push.shoulders.push(exerciseName);
                break;
            case triceps:
                return this._push.triceps.push(exerciseName);
                break;
            case back:
                return this._pull.back.push(exerciseName);
                break;
            case biceps:
                return this._pull.biceps.push(exerciseName);
                break;
            case legs:
                return this._legs.push(exerciseName);
                break;
            case core:
                return this._core.push(exerciseName);
                break;
            default:
                console.log('Please enter one of the reconigzed muscle groups, the reconigzed muscle groups are chest, shoulders, triceps, back, biceps, legs or core!');
        }
    },  
}

const randomNumberGenerator = array => {
    return Math.floor(Math.random()*input.length);
}

const randomExerciseGeneration = (day, numberOfExercises) => {
    const amountOfChestWorkoutNumber = Math.ceil(0.5*numberOfExercises);
    const amountOfShouldersWorkoutNumber = Math.ceil(0.5*(numberOfExercises - amountOfChestWorkoutNumber));
    const amountOfTricepsWorkoutNumber = numberOfExercises - (amountOfChestWorkoutNumber+amountOfShouldersWorkoutNumber);
    const amountOfBackWorkoutNumber = Math.ceil(0.5*numberOfExercises);
    const amountOfBicepsWorkoutNumber = numberOfExercises - amountOfBackWorkoutNumber;
    const chestWorkouts = [];
    const shouldersWorkouts = [];
    const tricepsWorkouts = [];
    const backWorkouts = [];
    const bicepsWorkouts = [];
    const legWorkouts = [];
    if (day === 'push') {
        do {
            let prevExercise = workout.chest[randomExerciseGeneration(workout.chest)]
            if (!chestWorkouts.includes(prevExercise)) {
                chestWorkouts.push(prevExercise);
            } 
        } while (chestWorkouts.length < amountOfChestWorkoutNumber)
        do {
            let prevExercise = workout.shoulders[randomExerciseGeneration(workout.shoulders)]
            if (!shouldersWorkouts.includes(prevExercise)) {
                shouldersWorkouts.push(prevExercise);
            }
        } while (shouldersWorkouts.length < amountOfShouldersWorkoutNumber)
        do {
            let prevExercise = workout.triceps[randomExerciseGeneration(workout.triceps)]
            if (!tricepsWorkouts.includes(prevExercise)) {
                if (tricepsWorkouts.length === (amountOfTricepsWorkoutNumber - 1)) {
                    tricepsWorkouts.push('and' + prevExercise);
                } else {
                    tricepsWorkouts.push(prevExercise);
                }
            }
        } while (tricepsWorkouts.length < amountOfTricepsWorkoutNumber)
        console.log(`Your exercises for today are ${chestWorkouts.join(', ')}, ${shouldersWorkouts.join(', ')}, ${tricepsWorkouts.join(', ')}. You may also want to do ${workout.core[randomExerciseGeneration(workout.core)]} exercise to target your core!`)
    } else if (day === 'pull') {
        do {
            let prevExercise = workout.back[randomExerciseGeneration(workout.back)]
            if (!backWorkouts.includes(prevExercise)) {
                backWorkouts.push(prevExercise);
            }
        } while (backWorkouts.length < amountOfBackWorkoutNumber)
        do {
            let prevExercise = workout.biceps[randomExerciseGeneration(workout.biceps)]
            if (!bicepsWorkouts.includes === prevExercise) {
                if (bicepsWorkouts.length === (amountOfBicepsWorkoutNumber - 1)) {
                    bicepsWorkouts.push('and' + prevExercise);
                } else {
                    tricepsWorkouts.push(prevExercise);
                }
            }
        } while (bicepsWorkouts.length < amountOfBicepsWorkoutNumber)
        console.log(`Your exercises for today are ${backWorkouts.join(', ')}, ${bicepsWorkouts.hoin(', ')}. You may also want to do ${workout.core[randomExerciseGeneration(workout.core)]} exercise to target your core!`)
    } else if (day === 'legs') {
        do {
            let prevExercise = workout.legs[randomExerciseGeneration(workout.legs)]
            if (!legWorkouts.includes === prevExercise) {
                if (legWorkouts.length === (numberOfExercises - 1)) {
                    legWorkouts.push('and' + prevExercise);
                } else {
                    legWorkouts.push(prevExercise);
                }
            }
        } while (legWorkouts.length < numberOfExercises)
        console.log(`Your exercises for today are ${legWorkouts.join(', ')}. You may also want to do ${workout.core[randomExerciseGeneration(workout.core)]} exercise to target your core!`)
    }
}
randomExerciseGeneration('legs', 3);
