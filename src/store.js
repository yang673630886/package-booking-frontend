import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    submit (values) {
      axios
        .post('http://localhost:8080/bookin', {
          bookNo: values.bookNo,
          recipient: values.recipient,
          telNum: values.telNum,
          status: 'weiqianshou',
          reservationTime: '',
          bookWeight: values.bookWeight
        })
    }
  }
})
