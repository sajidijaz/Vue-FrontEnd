import Vuex from 'vuex'
import axios from 'axios'
import Vue from "vue";
import vuex from 'vuex';
axios.defaults.baseURL = 'https://api.myjson.com/bins/'
Vue.use(vuex);
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export default new Vuex.Store({
    state :{
        rosterSettings: [],
        statuses:[],
    },
    mutations:{
        setRosterSettings(state,data){
            state.rosterSettings = data;
        },
        setStatus(state,data){
            state.statuses = data;
        },
    },
    actions:{
        getRosterSettings({commit}){
            axios.get('bab9g').then((response)=>{
                commit('setRosterSettings',response.data);
            })
        },
        getStatuses({commit}){
            axios.get('1d34gk').then((response)=>{
                commit('setStatus',response.data);
            })
        },
        login({commit},data){
            axios.post('login',data)
        }
    }
})
