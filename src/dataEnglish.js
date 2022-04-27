import gupta from './assets/gupta.jpg';
import rojek from './assets/rojek.jpg';
import mazur from './assets/mazur.jpg';
import sozanski from './assets/sozanski.png';

export const appDataEn = {
        h1: 'Oncomedica medical offices',
        sections : {
            offer: ['offer','how can we help you?'],
            about: ['about us', 'out team'],
            contact: ['contact', 'how to find us'],
        },
        appointment: 'make an appointment',
        'appointment-details': ['office open hours:', 'registration:', 'phone number:'],
        p: `Oncomedica is a new place on the map of Zgorzelec, which brings together doctors who have been caring for patients' health for many years. We want every person visiting our clinics to receive comprehensive help and safety.`,
        contact: {
            title: 'ONCOMEDICA medical offices',
            email: 'info@oncomedica.eu',
            street: 'Wyspiańskiego 45c/2 street',
            city: '59-900 Zgorzelec',
        },
        details: {
            'chirurgia' : {
                fullName : 'general and oncological surgery',
                list: ['Consultations in the field of general surgery and oncological surgery',
                        'Dermatoscopy - Examination of pigmented lesions and moles with a dermatoscope',
                        'Diagnosis and treatment of breast diseases',
                        'Diagnostics and surgical treatment of melanoma and other skin cancers',
                        'Excision of subcutaneous lesions, lipomas, atheromas, fibromas, cysts',
                        'Ingrown nail surgery',
                        'Treatment of pilonidal hair cyst',
                        'Qualification for other surgical procedures',],
                doctor: 'Anil Gupta',
                doctorImg : gupta,
                gabinet: 'monday to friday',
                recepcja: 'from 15:00 to 19:00',
                link: 'https://www.znanylekarz.pl/anil-kumar-gupta/chirurg-onkolog/zgorzelec',
                about: `I graduated in medicine in July 1992 at the Medical Academy. Silesian Piasts in Wrocław. Then I started my specialization in general surgery, which I completed on March 9, 1996. I continued to gain experience and skills during the second degree in general surgery to obtain the title of specialist on January 24, 2001. Five years later, on January 28, 2006, I completed my specialization in oncological surgery. I believe that the work of a doctor requires constant development of qualifications in order to take best care of the patient's health. For this reason, I am constantly supplementing my knowledge. In 2010 I did an internship at the Breast Cancer Clinic and Reconstructive Surgery at the Oncology Center in Warsaw. In 2017 I did an internship at the Department of Oncological Surgery of the First Lower Silesian Oncology Center in Wrocław. In 2018 I did an internship at the Department of Oncological Surgery, 2nd Breast Unit Breast Unit in Wrocław. Since 1993 I have been treating at the Department of General and Oncological Surgery at the Multispecialist Hospital of John Paul II in Zgorzelec. I am the deputy head there. I am an employee of the general surgery and oncological surgery clinic. As part of the oncology clinic, I have been running a breast cancer prevention and treatment clinic for 3 years. I see patients at the oncology clinic at the Lusatian Medical Center in Żary. I am also the chairman of the disability adjudication committee in Zgorzelec. At work, he deals with consultation and treatment in the field of general surgery and oncological surgery. I perform, among others surgical treatment of hernia, gastrointestinal neoplasms, skin melanoma. My main interest is diagnostics and surgical treatment of breast diseases, especially breast cancer. I also perform: diagnosis of skin lesions, mammotomic biopsy, oncoplastic surgery, breast reconstruction using silicone implants and my own tissues, as well as reconstruction of the nipples.`,
            
            },
            'radiologia' : {
                fullName : 'radiology',
                list: ['ultrasound examination of the abdominal cavity',
                        'ultrasound of the thyroid gland',
                        'breast ultrasound examination',
                        'Doppler examination (USG) assessing the condition of arteries and veins',
                        'orthopedic examination',
                        'ultrasound ezamination of hips in children',],
                        doctor: 'Maciej Sozański',
                        doctorImg : sozanski,
                        gabinet: 'mondays and thursdays from 14:00 to 21:00',
                        recepcja: `everyday, if we won't answear we will call you back`,
                        tel: '+48 720 833 338',
                        link: null,
                        about: 'I have been dealing with imaging diagnostics since 1994. The field that interests me most in radiology is magnetic resonance and vascular examinations in ultrasound. Computers are my passion. I try to combine these two areas of knowledge and support diagnostics with IT. I perform ultrasound examinations of the abdominal cavity, thyroid gland, breasts, Doppler examinations, orthopedic and pediatric examinations (for pre-period and hip joints).'
            },
            'ortopedia' : {
                fullName : 'orthopedics',
                list: ['arthroplaty of knee and hip (primary and revision)',
                        'minor procedures in the field of limb joints surgery',
                        'trauma surgery in limbs and pelvis',],
                        doctor: 'Andrzej Rojek',
                        doctorImg : rojek,
                        gabinet: 'tuesday to thursday',
                        recepcja: 'from 10:00 to 12:00',
                        tel: '+48 576 681 237',
                        link: null,
                        about: 'I am a general surgeon, specialist in orthopedics and traumatology of the musculoskeletal system. I am 49 years old and have lived in Lower Silesia for 30 years. For 13 years I have been working at the Orthopedics Department at the Hospital. Jana Pawła II in Zgorzelec, which I have had the honor of managing for 6 years. I graduated in 1995 with the highest distinction, and then I learned my profession in provincial hospitals in Jelenia Góra and Wałbrzych. I gave up my academic career and stayed in Wrocław to work for the benefit of people, which gives me great pleasure. I have completed several dozen postgraduate courses and participated in a similar number of conferences and trainings, largely abroad. I use the knowledge acquired there in my daily work.'
            },
            'urologia' : {
                fullName : 'urology, oncology and surgery',
                list: ['operacje endoskopowe',
                        'duże zabiegi onkologiczne',
                        'zabiegi małoinwazyjne metodą laparoskopową',],
                        doctor: 'Jarosław Mazur',
                        doctorImg : mazur,
                        gabinet: 'wednesdays from 18:00',
                        recepcja: 'codziennie',
                        tel: '+48 75 67 14 200',
                        link: 'https://e-rejestracja.mp.pl/Tickets/d1ce38e5-bf27-407b-a7fc-4e20b2e9d653?resourceKind=0',
                        about: 'Urologist specialist. General surgeon specialist. After graduating from medical studies in Wrocław, I worked there in 1999-2007, specializing in general surgery. Then I trained in urology in Germany for over 12 years. My treatment spectrum covers both endoscopic and major oncological procedures. From 2019. I am training at the department of general, visceral and vascular surgery of the St. Carolus in Görlitz, primarily in coloproctological procedures. I prefer minimally invasive laparoscopic procedures.',
            },
            'kardiologia' : {
                fullName : 'cardiology and internist medicine',
                list: ['will be added soon',],
                        doctor: 'Anna Jachowicz & Michał Olech',
                        doctorImg : null,
                        gabinet: 'will be added soon',
                        recepcja: 'wednesdays from 16:00 to 19:00',
                        tel: '+48 787 833 877',
                        link: null,
                        about: null,
            },
        },

};