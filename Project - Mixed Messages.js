const astrology = [
    {
        sign: 'Aquarius',
        startDate: new Date('2021,01,21'),
        endDate: new Date('2021,02,19'),
        dates: 'Jan 21st and Feb 19th',
        stone: 'Garnet',
        meaning: 'vitality and passion'
    },
    {
        sign: 'Pisces',
        startDate: new Date('2021,02,20'),
        endDate: new Date('2021,03,20'),
        dates: 'Feb 20th and Mar 20th',
        stone: 'Amethyst',
        meaning: 'calm and rejuvenation'
    },
    {
        sign: 'Aries',
        startDate: new Date('2021,03,21'),
        endDate: new Date('2021,04,20'),
        dates: 'Mar 21st and Apr 20th',
        stone: 'Bloodstone',
        meaning: 'action and vitality'
    },
    {
        sign: 'Taurus',
        startDate: new Date('2021,04,21'),
        endDate: new Date('2021,05,21'),
        dates: 'Apr 21st and May 21st',
        stone: 'Sapphire',
        meaning: 'self-expression and truth'
    },
    {
        sign: 'Gemini',
        startDate: new Date('2021,05,22'),
        endDate: new Date('2021,06,21'),
        dates: 'May 22nd and Jun 21st',
        stone: 'Agate',
        meaning: 'balance and stability'
    },
    {
        sign: 'Cancer',
        startDate: new Date('2021,06,22'),
        endDate: new Date('2021,07,22'),
        dates: 'Jun 22nd and Jul 22nd',
        stone: 'Emerald',
        meaning: 'love and kindness'
    },
    {
        sign: 'Leo',
        startDate: new Date('2021,07,23'),
        endDate: new Date('2021,08,22'),
        dates: 'Jul 23rd and Aug 22nd',
        stone: 'Onyx',
        meaning: 'strength and calm'
    },
    {
        sign: 'Virgo',
        startDate: new Date('2021,08,23'),
        endDate: new Date('2021,09,23'),
        dates: 'Aug 23rd and Sep 23rd',
        stone: 'Carnelian',
        meaning: 'confidence and passion'
    },
    {
        sign: 'Libra',
        startDate: new Date('2021,09,24'),
        endDate: new Date('2021,10,23'),
        dates: 'Sep 24th and Oct 23rd',
        stone: 'Peridot',
        meaning: 'radiance and purpose'
    },
    {
        sign: 'scorpio',
        startDate: new Date('2021,10,24'),
        endDate: new Date('2021,11,22'),
        dates: 'Oct 24th and Nov 22nd',
        stone: 'Topaz',
        meaning: 'strength and intelligence'
    },
    {
        sign: 'sagittarius',
        startDate: new Date('2021,11,23'),
        endDate: new Date('2021,12,21'),
        dates: 'Nov 23rd and Dec 21st',
        stone: 'Turquoise',
        meaning: 'wellbeing and good fortune'
    },
    {
        sign: 'Capricorn',
        startDate: new Date('2021,12,22'),
        endDate: new Date('2021,01,20'),
        dates: 'Dec 22nd and Jan 20th',
        stone: 'Ruby',
        meaning: 'protection and vitality'
    }
]

const randomNumber = Math.floor(Math.random()*astrology.length);

const randomAstrologyFacts = (birthDate) => {
    /*response for no input:
    using a random number generator, the if statment genrates a random fact */
    if (birthDate === undefined) {
        for (let i = 0; i < astrology.length; i++) { // useing for loop to shorten the if statements
            if (randomNumber === i) {
                console.log(`If you were born between ${astrology[i].dates}. Your astrological sign is ${astrology[i].dates}. Your astrological stone is ${astrology[i].stone}. The meaning associated with ${astrology[i].sign} is ${astrology[i].meaning}`);
            }
        }
        //response for inorrect input, using Date.parse method, input is changed to milliseconds passed since midnight 1st jan 1970, if the input is incorrect, the method will return 0.
    } else if (Date.parse(birthDate) === 0) {
        console.log("please enter a correct date in the format of 'YYYY,MM,DD'")
        //response for correct input, using if statement to check where the input is located within the astrology array
    } else {
        for (let j = 0; j < astrology.length; j++) { //using for loop to shorten the if statments
            if ((Date.parse(birthDate) >= astrology[j].startDate.getTime()) && (Date.parse(birthDate) <= astrology[j].endDate.getTime())) {
                console.log(`Your astrological sign is ${astrology[j].sign}. Your astrological stone is ${astrology[j].stone}. The meaning associated with ${astrology[j].sign} is ${astrology[j].meaning}. People born between ${astrology[j].dates} will have the same astrological sign as yours!`)
            }
        }
    }
}
console.log(astrology[0].startDate)
let test = new Date('2019,06,12').toLocaleString()
console.log(test.split('/'));
