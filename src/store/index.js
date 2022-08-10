import { createStore } from "vuex";

export default createStore({
  state: {
    fields: [
      {
        id: 1,
        title: 'Front End <br> <span>  Development </span>',
        src: require('@/assets/images/front.png'),
        color: '#2CC56F',
        value: 'FrontEnd',
        info: `Kursda nimalarni o'rganasiz? <br>
        <ul>
        <li>🔸 HTML5</li>
        <li>🔸 CCS3</li>
        <li>🔸 Sass</li>
        <li>🔸 Bootstrap 5 </li>
        <li>🔸 Git</li>
        <li>🔸 Github</li>
        <li>🔸 JavaScript</li>
        <li>🔸 VueJS</li>
        <li>🔸 Photoshop</li>
        <li>🔸 Figma</li>
        <li>🔸 BEM metodologiyasi</li>
        </ul> 
        <br>
        📌Kursda ko'plab qiziqarli loyihalar, marafonlar bo'lib o'tadi.  
        <br>
        🚀Darslarda 100% amaliy bilimlarga ega bo'lasiz.`
      },
      {
        id: 2,
        title: 'Back End <br> <span>   Development </span>',
        src: require('@/assets/images/back.png'),
        color: '#2878EB',
        value: 'BackEnd',
        info: `Kursda nimalarni o'rganasiz? <br>
        <ul>
        <li>✅ Dasturlash asoslari</li>
        <li>✅ Python bilan ishlash</li>
        <li>✅ Ma'lumotlar bazasi(Sqlite,Postgres)</li>
        <li>✅ Telegram Bot </li>
        <li>✅ Django Framework</li>
        <li>✅ REST API</li>
        <li>✅ Web loyiha yaratish</li>
        <li>✅ Git</li>
        </ul> 
        <br>
        📌Kursda ko'plab qiziqarli loyihalar, marafonlar bo'lib o'tadi.  
        <br>
        🚀Darslarda 100% amaliy bilimlarga ega bo'lasiz.`
      },
      {
        id: 3,
        title: 'Mobile <br> <span>  Development </span>',
        src: require('@/assets/images/flutter.jpg'),
        color: '#F14D5D',
        value: 'Flutter',
        info: `Kursda nimalarni o'rganasiz? <br>
        <ul>
        <li>🟢 Dasturlash asoslari</li>
        <li>🟢 Dart bilan ishlash</li>
        <li>🟢 Algoritimlar </li>
        <li>🟢 Flutter bilan ishlash</li>
        <li>🟢 Mobil dastur yaratish</li>
        <li>🟢 Play matketga joylash</li>
        </ul> 
        <br>
        📌Kurs davomida shaxsiy portfoilo yaratasiz. 
        <br>
        🚀Darslarda 100% amaliy bilimlarga ega bo'lasiz.`
      },
      {
        id: 4,
        title: 'Graphic Design <br> <span>   Development </span>',
        src: require('@/assets/images/design.png'),
        color: '#f1f10c',
        value: 'Design'
      },
      {
        id: 5,
        title: 'SMM <br> <span>  Social Media Marketing</span> ',
        src: require('@/assets/images/smm.png'),
        color: '#FF723A',
        value: 'SMM'
      },
    ]
  },
  getters: {
    getFields(state) {
      return state.fields.map(elem => {
        return {
          id: elem.id,
          title: elem.title,
          src: elem.src,
          info: elem.info
        }
      })
    },
    getOption(state) {
      return state.fields.map(elem => {
        return {
          title: elem.title,
          value: elem.value
        }
      })
    },
    getCards(state) {
      return state.fields.map(elem => {
        return {
          title: elem.title,
          color: elem.color
        }
      })
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
