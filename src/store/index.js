import Vuex from 'vuex'
import axios from 'axios'
import Vue from "vue";
import vuex from 'vuex';
axios.defaults.baseURL = 'https://api.myjson.com/bins/'
Vue.use(vuex);

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
    }
})
