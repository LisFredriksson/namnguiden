import { createStore } from 'vuex'
import moment from "moment/min/moment-with-locales";

const mutations = {
    increment(state) {
        state.date += moment(1).dayOfYear()
        state.datefixed = moment(state.datefixed).add(1, "days").format("LL")
    },
    previous(state) {
        state.date -= moment(1).dayOfYear()
        state.datefixed = moment(state.datefixed).subtract(1, "days").format("LL")
    }
},
    state = {
        date: moment().dayOfYear(),
        datefixed: moment().format("LL"),
        girls22: ["1. Astrid", "2. Maja", "3. Alma", "4. Vera", "5. Freja", "6. Leah", "7. Ella", "8. Alice", "9. Selma", "10. Lilly"],
        boys22: ["1. William", "2. Liam", "3. Noah", "4. Hugo", "5. Oliver", "6. Lucas", "7. Nils", "8. Matteo", "9. Valter", "10. August"],
        articles: [
            {
                id: "0001",
                url: "https://www.femina.se/livsstil/stor-lista-28-fina-konsneutrala-namn-hitta-din-favorit/2373731",
                title: "Femina: 28 fina könsneutrala namn",
                img: 'baby-623417_640.jpg'
            },
            {
                id: "0002",
                url: "https://www.expressen.se/mama/barn-baby/barn-namn-inspirerade-fran-sagor/",
                title: "Expressen: Inspirerande namn från sagor och böcker",
                img: "baby-6578335_640.jpg"
            },
            {
                id: "0003",
                url: "https://www.aftonbladet.se/family/a/pWvyVX/franska-barnnamn",
                title: "Aftonbladet: 118 Franska namn",
                img: "brothers-457234_1920.jpg"
            },
            {
                id: "0004",
                url: "https://www.aftonbladet.se/family/a/EpWbXG/320-ovanliga-och-unika-namn",
                title: "Aftonbladet: 320 ovanliga och unika namn",
                img: "feet-619399_640.jpg"
            }
        ]
    }

export default createStore({ mutations, state, strict: true })
