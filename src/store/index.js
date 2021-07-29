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
    },

    FILTER: (state, filterValue) => {
      state.data.coins.forEach(coin => {
        if(!coin.Name.toLowerCase().startsWith(filterValue.toLowerCase())) {
          if(!coin.CharCode.toLowerCase().startsWith(filterValue.toLowerCase())) {
            coin.isActive = false
          } else {
            coin.isActive = true
          }
        } else {
          coin.isActive = true
        }
      })
    },
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

    filterAction({commit}, payload) {
      commit("FILTER", payload)
    },

    changeCurrentCoinAction({commit}, payload) {
      commit('CHANGE_CURRENT_COIN', payload)
    },
  },

  getters: {
    DATA: state => state.data,
  }
})
