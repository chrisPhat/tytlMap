var pastLocations = [
    {
        venueName: 'The Depo',
        cityName: 'Plymouth',
        long: '-4.150011327399327',
        lat: '50.369704406589236',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'The Junction',
        cityName: 'Plymouth',
        long: '-4.133639606104258',
        lat: '50.38024153071487',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'The Old Bakery Studios',
        cityName: 'Truo',
        long: '-5.046436183821125',
        lat: '50.262454927145185',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'The Palladium Club',
        cityName: 'Bideford',
        long: '-4.206497669219971 ',
        lat: '51.01866999203654',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'The CobbleStones',
        cityName: 'Bridgwater',
        long: '-2.997440023609499',
        lat: '51.129228212923124',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'Clwb Ifor Bach',
        cityName: 'Cardiif',
        long: '-3.1814935446239256',
        lat: '51.480531578594054',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'Teddy Rocks',
        cityName: 'Blandford Forum',
        long: '-2.1653625939893284 ',
        lat: '50.8580313320059',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'Crofters Rights',
        cityName: 'Bristol',
        long: '-2.5899529814151756 ',
        lat: '51.46383136161254',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'The Crauford Arms',
        cityName: 'Milton Keynes',
        long: '-0.8146521695120712 ',
        lat: '52.06234864908397',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'The Hobbit',
        cityName: 'Southampton',
        long: '-1.3951992988586426',
        lat: '50.91880841508977',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'Suburbia',
        cityName: 'Southampton',
        long: '-1.3992071798855399 ',
        lat: '50.91349868733543',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'The Electric Banana',
        cityName: 'Weston-Super-Mare',
        long: '-2.9781427595275045',
        lat: '51.34659668199154',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'The Corn Exchange',
        cityName: 'Hertford',
        long: '-0.07607704449364316 ',
        lat: '51.79649691877504',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'Asylum 2',
        cityName: 'Birmingham',
        long: '-1.9024391535895435 ',
        lat: '52.488337503182',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'Burn It Down Festival',
        cityName: 'Torquay',
        long: '-3.5230186234740213',
        lat: '50.46111536589897',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'The Witchwood',
        cityName: 'Ashton-Under-Lyne',
        long: '-2.099708318710327',
        lat: '53.48622618372893',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'Network',
        cityName: 'Sheffield',
        long: '-1.4715224031616736',
        lat: '53.37647423218478',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'The Black Prince',
        cityName: 'Northampton',
        long: '-0.8884549140930176',
        lat: '52.24019184981627',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'Exeter Pheonix',
        cityName: 'Exeter',
        long: '-3.531338053971287 ',
        lat: '50.725187928720665',
        showDate: '',
        soldout: true
    },
    {
        venueName: 'The Pioneer Club',
        cityName: 'St Albans',
        long: '-0.3334951400756836',
        lat: '51.76289980391499',
        showDate: '',
        soldout: true
    }
]

var liveLocations = [

    {
        venueName: 'The New Cross Inn',
        cityName: 'London',
        long: '-0.03717541694641113 ',
        lat: '51.47577336021085',
        ticketLink: 'https://www.seetickets.com/event/ten-years-too-late-00-s-emo-tribute-/new-cross-inn/2748914',
        showDate: '06.01.2024',
        soldout: false
    }, {
        venueName: 'The Old Bakery Studios',
        cityName: 'Truo',
        long: '-5.046436183821125',
        lat: '50.262454927145185',
        ticketLink: 'https://www.seetickets.com/event/ten-years-too-late-00-s-emo-tribute-/old-bakery-studios/2740529?joinwaitinglist=true',
        showDate: '19.01.2024',
        soldout: true
    },
    {
        venueName: 'The Palladium Club',
        cityName: 'Bideford',
        long: '-4.206497669219971 ',
        lat: '51.01866999203654',
        ticketLink: 'https://www.seetickets.com/event/ten-years-too-late-00-s-emo-tribute-/the-palladium/2845782',
        showDate: '02.02.2024',
        soldout: false
    },
    {
        venueName: 'Sin City',
        cityName: 'Swansea',
        long: '-3.949906826019287 ',
        lat: '51.61888254181055',
        ticketLink: 'https://www.seetickets.com/event/ten-years-too-late-00-s-emo-tribute-/sin-city/2845783',
        showDate: '03.02.2024',
        soldout: false
    }, {
        venueName: 'The Electric Banana',
        cityName: 'Weston-Super-Mare',
        long: '-2.9781427595275045',
        lat: '51.34659668199154',
        ticketLink: 'https://www.seetickets.com/event/ten-years-too-late-00-s-emo-tribute-/the-electric-banana/2855900',
        showDate: '09.03.2024',
        soldout: false
    },
    {
        venueName: 'The Depo',
        cityName: 'Plymouth',
        long: '-4.150011327399327',
        lat: '50.369704406589236',
        ticketLink: 'https://www.seetickets.com/event/ten-years-too-late-00-s-emo-tribute-/the-depo/2859308',
        showDate: '30.03.2024',
        soldout: true
    },
    {
        venueName: 'Saltbox',
        cityName: 'Nottingham',
        long: '-1.14060255557479 ',
        lat: '52.952675829766946',
        ticketLink: 'https://www.seetickets.com/event/ten-years-too-late-00-s-emo-tribute-/saltbox/2859309',
        showDate: '27.04.2024',
        soldout: true
    },
    {
        venueName: 'Moonshine',
        cityName: 'Portsmouth',
        long: '-1.0797607898712158 ',
        lat: '50.78143866775428',
        ticketLink: 'https://www.seetickets.com/event/ten-years-too-late-00-s-emo-tribute-/moonshine/2897178',
        showDate: '03.05.2024',
        soldout: true
    },
    {
        venueName: 'Teddy Rocks',
        cityName: 'Blandford Forum',
        long: '-2.1653625939893284 ',
        lat: '50.8580313320059',
        ticketLink: '',
        showDate: '04.05.2024',
        soldout: true
    },
    {
        venueName: 'The Arch',
        cityName: 'Brighton',
        long: '-0.1427292062097063 ',
        lat: '50.82005248965071',
        ticketLink: 'https://www.seetickets.com/event/ten-years-too-late-00-s-emo-tribute-/the-arch/2897180',
        showDate: '05.05.2024',
        soldout: true
    },
    {
        venueName: 'The Crauford Arms',
        cityName: 'Milton Keynes',
        long: '-0.8146521695120712 ',
        lat: '52.06234864908397',
        ticketLink: 'https://www.seetickets.com/event/ten-years-too-late-00-s-emo-tribute-/the-craufurd-arms/2897181',
        showDate: '11.05.2024',
        soldout: true
    },
    {
        venueName: 'The Corn Exchange',
        cityName: 'Hertford',
        long: '-0.07607704449364316 ',
        lat: '51.79649691877504',
        ticketLink: '',
        showDate: '21.06.2024',
        soldout: true
    },
    {
        venueName: 'Rebellion',
        cityName: 'Manchester',
        long: '-2.250502109527588',
        lat: '53.47424204366048',
        ticketLink: 'https://www.seetickets.com/event/ten-years-too-late-00-s-emo-tribute-/rebellion/2895173',
        showDate: '13.06.2024',
        soldout: true
    },
]
