const astrology = [
    {
        sign: 'Aquarius',
        dates: 'Jan 21st and Feb 19th',
        stone: 'Garnet',
        meaning: 'vitality and passion'
    },
    {
        sign: 'Pisces',
        dates: 'Feb 20th and Mar 20th',
        stone: 'Amethyst',
        meaning: 'calm and rejuvenation'
    },
    {
        sign: 'Aries',
        dates: 'Mar 21st and Apr 20th',
        stone: 'Bloodstone',
        meaning: 'action and vitality'
    },
    {
        sign: 'Taurus',
        dates: 'Apr 21st and May 21st',
        stone: 'Sapphire',
        meaning: 'self-expression and truth'
    },
    {
        sign: 'Gemini',
        dates: 'May 22nd and Jun 21st',
        stone: 'Agate',
        meaning: 'balance and stability'
    },
    {
        sign: 'Cancer',
        dates: 'Jun 22nd and Jul 22nd',
        stone: 'Emerald',
        meaning: 'love and kindness'
    },
    {
        sign: 'Leo',
        dates: 'Jul 23rd and Aug 22nd',
        stone: 'Onyx',
        meaning: 'strength and calm'
    },
    {
        sign: 'Virgo',
        dates: 'Aug 23rd and Sep 23rd',
        stone: 'Carnelian',
        meaning: 'confidence and passion'
    },
    {
        sign: 'Libra',
        dates: 'Sep 24th and Oct 23rd',
        stone: 'Peridot',
        meaning: 'radiance and purpose'
    },
    {
        sign: 'scorpio',
        dates: 'Oct 24th and Nov 22nd',
        stone: 'Topaz',
        meaning: 'strength and intelligence'
    },
    {
        sign: 'sagittarius',
        dates: 'Nov 23rd and Dec 21st',
        stone: 'Turquoise',
        meaning: 'wellbeing and good fortune'
    },
    {
        sign: 'Capricorn',
        dates: 'Dec 22nd and Jan 20th',
        stone: 'Ruby',
        meaning: 'protection and vitality'
    }
]

const randomAstrologyFacts = () => {
    const randomNumber = Math.floor(Math.random()*astrology.length);
    /*console.log(randomNumber);
    console.log(astrology[1].dates)*/
    let sign1 = undefined;
    let date1 = undefined;
    let stone1 = undefined;
    let meaning1 = undefined;
    for (let i = 0; i < astrology.length; i++) {
        if (randomNumber === i) {
            /*console.log(i);
            console.log(astrology[i].dates);*/
            sign1 = astrology[i].sign;
            date1 = astrology[i].dates;
            stone1 = astrology[i].stone;
            meaning1 = astrology[i].meaning;
            //console.log(date1);
        }
    }
    console.log(`If you were born between ${date1}. Your astrological sign is ${sign1}. Your astrological stone is ${stone1}. The meaning associated with ${sign1} is ${meaning1}`);
}
console.log(new Date(2021,00,21))
//randomAstrologyFacts();
//randomAstrologyFacts();
//console.log(astrology[0].dates);