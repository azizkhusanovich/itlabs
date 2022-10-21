import { createStore } from 'vuex'

export default createStore({
    state: {
        currentLanguage: localStorage.getItem('lang') || 'uz',
        fields: [
            {
                id: 1,
                title: 'Front End <br> <span> Development </span>',
                src: require('@/assets/images/front.png'),
                color: '#2CC56F',
                value: 'FrontEnd',
                info: {
                    uz: {
                        front: `Front-end kursida siz asosiy dasturlash tillarini, zamonaviy saytlar yaratishni va umumman olganda noldan-dasturchigacha bo'lgan qadamlarni bosib o'tasiz.
<br>
                        Eng asosiysi atigi 6 oy ichida siz, dasturlash uchun kerak bo'ladigan barcha ko'nikma va qobiliyatlarga ega bo'lasiz. 
                        <br>
                        Bunday zamonaviy kasbga qiziqar ekansiz, tabiyki har xil savol va hayollar: O'qisammikan?, eplay olamanmi?, balki mening soham emasdir? kabi savollar sizni tinch qo'ymaydi, chunki hayotingizdagi eng muhim qadamlardan biri bu-kasb tanlashdir va shu bosqichga yetib kelganingizning o'zi quvonarlidir.
                        <br>
                        Shuni ishonch bilan ayta olamizki, siz tashlayotgan qadam, sizning kelajagingiz uchun eng yaxshi tanlovdir. 
                        "Eng yaxshi investitsiya, bilimga qilingan investitsiyadir."`,

                        back: `To'g'ri yo'lda ekanligingizga aminmiz.
                        Ismingiz va Telefon raqamingizni qoldiring va tez orada siz bilan bog'lanamiz.`,
                    },
                    ru: {
                        front: `В курсе Front-end вы узнаете об основных языках программирования, создании современных сайтов и в целом, о шагах от нуля до программиста.
<br>
                        Главное, что всего за 6 месяцев вы,  приобретете все навыки и умения, необходимые для программирования. 
                        <br>
                        Интересуясь такой современной профессией, естественно возникают всевозможные вопросы: может я не смогу?, может быть, не моя профессия? такие вопросы, не оставят вас в покое, потому что один из самых важных шагов в вашей жизни-это выбор профессии, и приятно, что вы достигли этой стадии выбора.
                        <br>
                        Мы можем с уверенностью сказать, что шаг, который вы делаете, является лучшим выбором для вашего будущего. 
                        "Лучшее вложение-это вложение в знания."
                       `,
                        back: `Мы уверены, что вы на правильном пути.
                        Оставьте свое имя и номер телефона, и мы свяжемся с вами в ближайшее время.`,
                    },
                },
            },
            {
                id: 2,
                title: 'Back End <br> <span> Development </span>',
                src: require('@/assets/images/back.png'),
                color: '#2878EB',
                value: 'BackEnd',
                info: {
                    uz: {
                        front: `Back-end - ko'p qirrali va mashhur dasturlash yo'nalishi. Back-end kursida siz zamonaviy veb-ilovalar, onlayn-do'konlar va murakkab Telegram-Botlarni yaratishni o'rganasiz.
<br>
                        Atigi 6 oylik kursda siz, hozirgi zamonning eng mashhur kasblaridan biri bo'lgan Back-end yo'nalishining barcha kerakli ko'nikmalarni o'zlashtirasiz.
                        <br>
                        Bunday zamonaviy kasbga qiziqar ekansiz, tabiiyki har xil savol va hayollar: O'qisammikan?, eplay olamanmi?, balki mening soham emasdir? kabi savollar sizni tinch qo'ymaydi, chunki hayotingizdagi eng muhim qadamlardan biri bu-kasb tanlashdir va shu bosqichga yetib kelganingizning o'zi quvonarlidir.
                        <br>
                        Shuni ishonch bilan ayta olamizki, siz tashlayotgan qadam, sizning kelajagingiz uchun eng yaxshi tanlovdir. 
                        "Eng yaxshi investitsiya, bilimga qilingan investitsiyadir."`,
                        back: `To'g'ri yo'lda ekanligingizga aminmiz.
                        Ismingiz va Telefon raqamingizni qoldiring va tez orada siz bilan bog'lanamiz.`,
                    },
                    ru: {
                        front: `Back-end-Это универсальное и популярное направление в программирования. На курсе Back-end вы узнаете, как создавать современные веб-приложения, интернет-магазины и сложных ботов Telegram.
<br>
                        Всего за 6 месяцев курса вы овладеете всеми необходимыми навыками Back-end.
                        <br>
                        Интересуясь такой современной профессией, естественно возникают всевозможные вопросы: можно ли научиться этому?,может я не смогу?, может быть, не моя профессия? Такие вопросы не оставят вас в покое, потому что один из самых важных шагов в вашей жизни-это выбор профессии, и приятно, что вы достигли этой стадии.
                        <br>
                        Мы можем с уверенностью сказать, что шаг, который вы делаете, является лучшим выбором для вашего будущего.
                        "Лучшее вложение-это вложение в знания."`,
                        back: `Мы уверены, что вы на правильном пути.
                        Оставьте свое имя и номер телефона, и мы свяжемся с вами в ближайшее время.`,
                    },
                },
            },
            {
                id: 3,
                title: 'Mobile <br> <span> Development </span>',
                src: require('@/assets/images/flutter.jpg'),
                color: '#F14D5D',
                value: 'Flutter',
                info: {
                    uz: {
                        front: `Mobile development kursida siz, turli murakkab dasturlarni ishlab chiqishni, shuningdek Android, iOS va Windows operatsion tizimlari bilan ishlashni o'rganasiz.
<br>
                        Mobil ilovalarni yaratish, ularni o'zgartirish hamda ular orqali daromad qilish zamonamizning eng yaxshi kasblaridan biriga aylanishga ulgurib bo'lgan.
                        <br>
                        Bunday zamonaviy kasbga qiziqar ekansiz, tabiiyki har xil savol va hayollar: O'qisammikan?, eplay olamanmi?, balki mening soham emasdir? kabi savollar sizni tinch qo'ymaydi, chunki hayotingizdagi eng muhim qadamlardan biri bu-kasb tanlashdir va shu bosqichga yetib kelganingizning o'zi quvonarlidir.
                        <br>
                        Shuni ishonch bilan ayta olamizki, siz tashlayotgan qadam, sizning kelajagingiz uchun eng yaxshi tanlovdir. 
                        "Eng yaxshi investitsiya, bilimga qilingan investitsiyadir."`,
                        back: `To'g'ri yo'lda ekanligingizga aminmiz.
                        Ismingiz va Telefon raqamingizni qoldiring va tez orada siz bilan bog'lanamiz.`,
                    },
                    ru: {
                        front: `На курсе Mobile development вы узнаете, как разрабатывать различные сложные приложения, а также работать с операционными системами Android, iOS и Windows.
                        <br>
                        Создание мобильных приложений, их модификация и заработок на них стали одной из лучших профессий современности.
                        <br>
                        Интересуясь такой современной профессией, естественно возникают всевозможные вопросы: можно ли научиться этому?,может я не смогу?, может быть, не моя профессия? Такие вопросы не оставят вас в покое, потому что один из самых важных шагов в вашей жизни-это выбор профессии, и приятно, что вы достигли этой стадии.
                        <br>
                        Мы можем с уверенностью сказать, что шаг, который вы делаете, является лучшим выбором для вашего будущего. 
                        "Лучшее вложение-это вложение в знания."`,
                        back: `Мы уверены, что вы на правильном пути.
                        Оставьте свое имя и номер телефона, и мы свяжемся с вами в ближайшее время.`,
                    },
                },
            },
            {
                id: 4,
                title: 'Graphic Design <br> <span> Development </span>',
                src: require('@/assets/images/design.png'),
                color: '#f1f10c',
                value: 'Design',
                info: {
                    uz: {
                        front: `Grafik dizayn kursida siz Photoshop, Adobe Illustrator, Figma kabi dasturlarni to'liq o'rganasiz, undan tashqari dizayndagi texnikalar va qoidalarni qo'llashni tushunib yetasiz.
<br>
                        Eng asosiysi atigi 4 oy ichida siz, butun dunyodagi professional studiyalar foydalanadigan grafik dizaynerning ishi uchun eng dolzarb dasturlarni to'liq o'rganasiz. U dasturlar orqali hozirda talab ko'p bo'lgan Brending, Web-dizayn, SMM dizayn, Banner reklama kabi ishlarni osonlik bilan qila boshlaysiz,. 
                        <br>
                        Bunday zamonaviy kasbga qiziqar ekansiz, tabiyki har xil savol va hayollar: O'qisammikan?, eplay olamanmi?, balki mening soham emasdir? kabi savollar sizni tinch qo'ymaydi, chunki hayotingizdagi eng muhim qadamlardan biri bu-kasb tanlashdir va shu bosqichga yetib kelganingizning o'zi quvonarlidir.
                        <br>
                        Shuni ishonch bilan ayta olamizki, siz tashlayotgan qadam, sizning kelajagingiz uchun eng yaxshi tanlovdir. 
                        "Eng yaxshi investitsiya, bilimga qilingan investitsiyadir."`,
                        back: `To'g'ri yo'lda ekanligingizga aminmiz.
                        Ismingiz va Telefon raqamingizni qoldiring va tez orada siz bilan bog'lanamiz.`,
                    },
                    ru: {
                        front: `На курсе графического дизайна вы полностью изучите такие программы, как Photoshop, Adobe Illustrator, Figma а также поймете, как применять методы и правила в дизайне.
<br>
                        Самое главное, что всего за 4 месяца вы полностью изучите самые актуальные программы для работы графического дизайнера. С помощью этих программ вы можете легко начать делать такие вещи, как брендинг, веб-дизайн, SMM-дизайн, баннерная реклама, которые сейчас пользуются большим спросом.
                        <br>
                        Интересуясь такой современной профессией, естественно возникают всевозможные вопросы: может я не смогу?, может быть, не моя профессия? такие вопросы, как "почему?" не оставят вас в покое, потому что один из самых важных шагов в вашей жизни-это выбор профессии, и приятно, что вы достигли этой стадии.
                        <br>
                        Мы можем с уверенностью сказать, что шаг, который вы делаете, является лучшим выбором для вашего будущего.
                        "Лучшее вложение-это вложение в знания."`,
                        back: `Мы уверены, что вы на правильном пути.
                        Оставьте свое имя и номер телефона, и мы свяжемся с вами в ближайшее время.`,
                    },
                },
            },
            // {
            //   id: 5,
            //   title: 'SMM <br> <span>  Social Media Marketing</span> ',
            //   src: require('@/assets/images/smm.png'),
            //   color: '#FF723A',
            //   value: 'SMM'
            // },
        ],
        // employees: [
        //     {
        //         id: 1,
        //         fullName: 'Aziz Sobirjonov',
        //         position: 'Front-End Developer',
        //         img: require('@/assets/images/employee.png'),
        //         info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro recusandae veritatis reiciendis in consectetur dolore repudiandae doloribus aliquam deserunt, autem id.',
        //     },
        //     {
        //         id: 2,
        //         fullName: 'Aziz Sobirjonov',
        //         position: 'Front-End Developer',
        //         img: require('@/assets/images/employee.png'),
        //         info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro recusandae veritatis reiciendis in consectetur dolore repudiandae doloribus aliquam deserunt, autem id.',
        //     },
        //     {
        //         id: 3,
        //         fullName: 'Aziz Sobirjonov',
        //         position: 'Front-End Developer',
        //         img: require('@/assets/images/employee.png'),
        //         info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro recusandae veritatis reiciendis in consectetur dolore repudiandae doloribus aliquam deserunt, autem id.',
        //     },
        //     {
        //         id: 4,
        //         fullName: 'Aziz Sobirjonov',
        //         position: 'Front-End Developer',
        //         img: require('@/assets/images/employee.png'),
        //         info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro recusandae veritatis reiciendis in consectetur dolore repudiandae doloribus aliquam deserunt, autem id.',
        //     },
        //     {
        //         id: 5,
        //         fullName: 'Aziz Sobirjonov',
        //         position: 'Front-End Developer',
        //         img: require('@/assets/images/employee.png'),
        //         info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro recusandae veritatis reiciendis in consectetur dolore repudiandae doloribus aliquam deserunt, autem id.',
        //     },
        // ],
    },
    getters: {
        getFields(state) {
            return state.fields.map((elem) => {
                return {
                    id: elem.id,
                    title: elem.title,
                    src: elem.src,
                }
            })
        },
        getOption(state) {
            return state.fields.map((elem) => {
                return {
                    title: elem.title,
                    value: elem.value,
                }
            })
        },
        getCards(state) {
            return state.fields.map((elem) => {
                return {
                    title: elem.title,
                    color: elem.color,
                }
            })
        },
        getMoreInfo(state) {
            const lang = state.currentLanguage
            if (lang === 'uz') {
                return state.fields.map((elem) => {
                    return {
                        id: elem.id,
                        front: elem.info.uz.front,
                        back: elem.info.uz.back,
                    }
                })
            } else {
                return state.fields.map((elem) => {
                    return {
                        id: elem.id,
                        front: elem.info.ru.front,
                        back: elem.info.ru.back,
                    }
                })
            }
        },
        // getEmployees(state) {
        //     return state.employees
        // },
    },
    mutations: {
        changeLanguage(state, lang) {
            return (state.currentLanguage = lang)
        },
    },
    actions: {},
    modules: {},
})
