import gupta from './assets/gupta.jpg';

export const appData = {
        h1: 'Oncomedica gabinety lekarskie',
        h2: 'oferta',
        //image as h2 
        //jak mozemy pomoc
        //poznajmy sie
        //skontaktujmy sie
        //nawigacja 3 podpunkty
        //images and alts to them
        //umow wizyte
        //szczegoly umowienia wizyta
        //znany lekarz text

        p: 'Oncomedica jest nowym miejscem na mapie Zgorzelca, które zrzesza lekarzy od wielu lat dbających o zdrowie pacjentów. Chcemy, by każda osoba odwiedzająca nasze gabinety otrzymała kompleksową pomoc i bezpieczeństwo.',
        contact: {
            title: 'ONCOMEDICA gabinety lekarskie',
            email: 'info@oncomedica.eu',
            street: 'ul. Wyspiańskiego 45c/2',
            city: '59-900 Zgorzelec',
        },
        details: {
            'chirurgia' : {
                list: ['Konsultacje w zakresie chirurgii ogólnej oraz chirurgii onkologicznej',
                        'Dermatoskopia - Badanie zmian barwnikowych i znamion dermatoskopem',
                        'Diagnostyka i leczenie chorób piersi',
                        'Diagnostyka i leczenie chirurgiczne czerniaka i innych nowotworów skóry',
                        'wycinanie zmian podskórnych, tłuszczaków, kaszaków, włókniaków, torbieli',
                        'operacje wrastających paznokci',
                        'leczenie torbieli włosowej pilonidalnej',
                        ],
                doctor: 'Anil Gupta',
                doctorImg : gupta,
                gabinet: 'pn. do pt',
                recepcja: ' od 15:00 do 19:00',
                link: 'https://www.znanylekarz.pl/anil-kumar-gupta/chirurg-onkolog/zgorzelec',
                about: 'W roku 2017 odbyłem staż w Oddziale Chirurgii Onkologicznej I Dolnośląskiego Centrum Onkologii we Wrocławiu. W roku 2018 odbyłem staż w Oddziale Chirurgii Onkologicznej II Pododdziale Chirurgii Piersi Breast Unit we Wrocławiu.                Od 1993 leczę na Oddziale Chirurgii Ogólnej i Onkologicznej w Wielospecjalistycznym Szpitalu im. Jana Pawła II w Zgorzelcu. Pełnię tam funkcję zastępcy ordynatora. Jestem pracownikiem poradni chirurgii ogólnej i chirurgii onkologicznej. W ramach poradni onkologicznej od 3 lat prowadzę poradnię profilaktyki i leczenia raka piersi. Przyjmuję pacjentów w poradni onkologicznej w Łużyckim Centrum Medycznym w Żarach. Jestem również przewodniczącym komisji orzekającej o niepełnosprawności w Zgorzelcu.W pracy na co dzień zajmuj',
            },
            'radiologia' : {
                list: ['badanie USG jamy brzusznej',
                        'badanie USG tarczycy',
                        'badanie USG piersi',
                        'badanie dopplerowskie (USG dopplera) oceniające stan tętnic i żył',
                        'badania ortopedyczne',
                        'badanie USG przezciemiączkowe',
                        'badanie USG stawów biodrowych u dzieci',],
                        doctor: 'Maciej Sozański',
                        gabinet: 'pn. i czw, od 14:00 do 21:00',
                        recepcja: 'codziennie, oddzwaniamy w razie nie odebrania',
                        tel: '+48 720 833 338',
                        link: null,
            },
            'ortopedia' : {
                list: ['endoprotezoplastyka biodra i kolana (pierwotna i rewizyjna)',
                        'zabiegi z zakresu chirurgi stawów kończyn',
                        'chirurgia urazowa kończyn i miednicy',],
                        doctor: 'Andrzej Rosiek',
                        gabinet: 'wt do czw',
                        recepcja: ' od 10:00 do 12:00',
                        tel: '+48 576 681 237',
                        link: null,
            },
            'urologia' : {
                list: ['operacje endoskopowe',
                        'duże zabiegi onkologiczne',
                        'zabiegi małoinwazyjne metodą laparoskopową',],
                        doctor: 'Jarosław Mazur',
                        gabinet: 'śr od 18:00',
                        recepcja: 'codziennie',
                        tel: '+48 75 67 14 200',
                        link: 'https://e-rejestracja.mp.pl/Tickets/d1ce38e5-bf27-407b-a7fc-4e20b2e9d653?resourceKind=0',
            },
            'kardiologia' : {
                list: ['serce',
                        'naczynia',
                        'intenista',],
                        doctor: 'Anna Jachowicz & Michał Olech',
                        gabinet: 'różnie bywa',
                        recepcja: 'śr od 16:00 do 19:00',
                        tel: '+48 787 833 877',
                        link: null,
            },
        },

};