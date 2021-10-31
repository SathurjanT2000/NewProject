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

const randomAstrologyFacts = (birthDate) => {
    if (birthDate === undefined) {
        const randomNumber = Math.floor(Math.random()*astrology.length);
        /*console.log(randomNumber);
        console.log(astrology[1].dates)*/
        let sign1 = undefined;
        let dates1 = undefined;
        let stone1 = undefined;
        let meaning1 = undefined;
        for (let i = 0; i < astrology.length; i++) {
            if (randomNumber === i) {
                /*console.log(i);
                console.log(astrology[i].dates);*/
                sign1 = astrology[i].sign;
                dates1 = astrology[i].dates;
                stone1 = astrology[i].stone;
                meaning1 = astrology[i].meaning;
                //console.log(date1);
            }
        }
        console.log(`If you were born between ${dates1}. Your astrological sign is ${sign1}. Your astrological stone is ${stone1}. The meaning associated with ${sign1} is ${meaning1}`);
    } else if (Date.parse(birthDate) === 0) {
        console.log("please enter a correct date, e.g. '2021,11,01")
    } else {
        for (let j = 0; j < astrology.length; j++) {
            if ((Date.parse(birthDate) >= astrology[j].startDate.getTime()) && (Date.parse(birthDate) <= astrology[j].endDate.getTime())) {
                console.log(`Your astrological sign is ${astrology[j].sign}. Your astrological stone is ${astrology[j].stone}. The meaning associated with ${astrology[j].sign} is ${astrology[j].meaning}. People born between ${astrology[j].dates} will have the same astrological sign as yours!`)
            }
        }
    }
}
randomAstrologyFacts('2021,03,06');
//console.log(astrology[0].startDate)
//console.log(new Date(2021,00,21))
//randomAstrologyFacts();
//randomAstrologyFacts();
//console.log(astrology[0].dates);