import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    SET_DATA: (state, data) => {
      let arrayHelper = Object.values(data)
      let testCoin = {
        CharCode: "TEST",
        ID: "R01370",
        Name: "Тестовая монета",
        Nominal: 100,
        NumCode: "417",
        Previous: 89.0885,
        Value: 87.8876,
      }

      arrayHelper.push(testCoin)

      let currentCoin = arrayHelper[0]

      arrayHelper.forEach( coin => {
        coin.isActive = true
      })

      console.log(arrayHelper)
      state.data = {
        currentCoin: currentCoin,
        coins: [...arrayHelper]
      }
    },
    SET_ERROR: (state, error) => {
      state.data = error
    },
    CHANGE_CURRENT_COIN: (state, coin) => {
      state.data.currentCoin = coin
    }
  },
  actions: {
    getData({ commit }) {
      axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
          .then(({ data }) => {
            commit("SET_DATA", data.Valute);
          })
          .catch((error) => {
            commit("SET_ERROR", error);
          });
    },
  },
  getters: {
    DATA: state => state.data,
  }
})
