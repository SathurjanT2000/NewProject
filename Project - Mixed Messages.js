const astrology = [
    {
        sign: 'Aquarius',
        startDate: new Date('2021,01,21'),
        endDate: new Date('2021,02,19'),
        stone: 'Garnet',
        meaning: 'vitality and passion'
    },
    {
        sign: 'Pisces',
        startDate: new Date('2021,02,20'),
        endDate: new Date('2021,03,20'),
        stone: 'Amethyst',
        meaning: 'calm and rejuvenation'
    },
    {
        sign: 'Aries',
        startDate: new Date('2021,03,21'),
        endDate: new Date('2021,04,20'),
        stone: 'Bloodstone',
        meaning: 'action and vitality'
    },
    {
        sign: 'Taurus',
        startDate: new Date('2021,04,21'),
        endDate: new Date('2021,05,21'),
        stone: 'Sapphire',
        meaning: 'self-expression and truth'
    },
    {
        sign: 'Gemini',
        startDate: new Date('2021,05,22'),
        endDate: new Date('2021,06,21'),
        stone: 'Agate',
        meaning: 'balance and stability'
    },
    {
        sign: 'Cancer',
        startDate: new Date('2021,06,22'),
        endDate: new Date('2021,07,22'),
        stone: 'Emerald',
        meaning: 'love and kindness'
    },
    {
        sign: 'Leo',
        startDate: new Date('2021,07,23'),
        endDate: new Date('2021,08,22'),
        stone: 'Onyx',
        meaning: 'strength and calm'
    },
    {
        sign: 'Virgo',
        startDate: new Date('2021,08,23'),
        endDate: new Date('2021,09,23'),
        stone: 'Carnelian',
        meaning: 'confidence and passion'
    },
    {
        sign: 'Libra',
        startDate: new Date('2021,09,24'),
        endDate: new Date('2021,10,23'),
        stone: 'Peridot',
        meaning: 'radiance and purpose'
    },
    {
        sign: 'scorpio',
        startDate: new Date('2021,10,24'),
        endDate: new Date('2021,11,22'),
        stone: 'Topaz',
        meaning: 'strength and intelligence'
    },
    {
        sign: 'sagittarius',
        startDate: new Date('2021,11,23'),
        endDate: new Date('2021,12,21'),
        stone: 'Turquoise',
        meaning: 'wellbeing and good fortune'
    },
    {
        sign: 'Capricorn',
        startDate: new Date('2021,12,22'),
        endDate: new Date('2021,01,20'),
        stone: 'Ruby',
        meaning: 'protection and vitality'
    }
];

const dayAndMonthReturn = (inputDay) => {//gets month and day from the input
    if (typeof(inputDay) === 'string') {
        inputDate = new Date(inputDay);
    };
    let inputDayArray = [inputDay.getMonth()+1, inputDay.getDate()];
    return inputDayArray;
};

const dayInWordReturn = (input) => {//returns Day in word
    let set = [(dayAndMonthReturn(astrology[input].startDate))[1],  (dayAndMonthReturn(astrology[input].endDate))[1]];
    let dayInWord = []
    for (let element of set) {
        switch (element%10) {
            case 1:
                dayInWord.push(element + 'st');
                break;
            case 2:
                dayInWord.push(element + 'nd');
                break;
            case 3:
                dayInWord.push(element + 'rd');
                break;
            default:
                dayInWord.push(element + 'th');
                break;
        }
    };
    return dayInWord;
}

const monthInWordReturn = (input) => {//return month in word
    let group = [(dayAndMonthReturn(astrology[input].startDate))[0],  (dayAndMonthReturn(astrology[input].endDate))[0]];
    let monthInWord = [];
    for (const element of group) {
        switch (element) {
            case 1:
                monthInWord.push('Jan');
                break;
            case 2:
                monthInWord.push('Feb');
                break;
            case 3:
                monthInWord.push('Mar');
                break;
            case 4:
                monthInWord.push('Apr');
                break;
            case 5:
                monthInWord.push('May');
                break;
            case 6:
                monthInWord.push('Jun');
                break;
            case 7:
                monthInWord.push('Jul');
                break;
            case 8:
                monthInWord.push('Aug');
                break;
            case 9:
                monthInWord.push('Sep');
                break;
            case 10:
                monthInWord.push('Oct');
                break;
            case 11:
                monthInWord.push('Nov');
                break;
            case 12:
                monthInWord.push('Dec');
                break;
        }
    };
    return monthInWord;
}

const joinDay = (input) => {//combines day and month and return date in word
    return dayInWordReturn(input)[0] + ' of ' + monthInWordReturn(input)[0] + ' and ' + dayInWordReturn(input)[1] + ' of ' + monthInWordReturn(input)[1];
}

const randomNumber = Math.floor(Math.random()*astrology.length);

const randomAstrologyFacts = (birthDate) => {
    /*response for no input:
    using a random number generator, the if statment genrates a random fact */
    if (birthDate === undefined) {
        for (let i = 0; i < astrology.length; i++) { // useing for loop to shorten the if statements
            if (randomNumber === i) {
                return `If you were born between ${joinDay(i)}. Your astrological sign is ${astrology[i].sign}. Your astrological stone is ${astrology[i].stone}. The meaning associated with ${astrology[i].sign} is ${astrology[i].meaning}`;
            }
        };
        //response for inorrect input, using Date.parse method, input is changed to milliseconds passed since midnight 1st jan 1970, if the input is incorrect, the method will return 0.
    } else if (Date.parse(birthDate) === 0) {
        console.log("please enter a correct date in the format of 'YYYY/MM/DD'");
        //response for correct input, using if statement to check where the input is located within the astrology array
    } else {
        birthDate = dayAndMonthReturn(birthDate);
        birthDate.unshift(2021); //for comparison during the if stage, the year is changed.
        for (let j = 0; j < astrology.length; j++) { //using for loop to shorten the if statments
            if ((Date.parse(birthDate) >= astrology[j].startDate.getTime()) && (Date.parse(birthDate) <= astrology[j].endDate.getTime())) {
                return `Your astrological sign is ${astrology[j].sign}. Your astrological stone is ${astrology[j].stone}. The meaning associated with ${astrology[j].sign} is ${astrology[j].meaning}. People born between ${joinDay(j)} will have the same astrological sign as yours!`;
            }
        };
    };
};
console.log(randomAstrologyFacts());

