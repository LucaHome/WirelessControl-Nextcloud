'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import Requests from '../services/requests'

Vue.use(Vuex)

const state = {
    periodicTasks: [],
    periodicTaskSelected: null
}

const getters = {
    periodicTasks: state => state.periodicTasks,
    periodicTaskSelected: state => state.periodicTaskSelected
}

const mutations = {
    /**
     * Stores all available periodicTasks in the state
     *
     * @param {Object} state The store data
     * @param {Object} payload The collections payload
     */
    setPeriodicTasks(state, payload) {
        state.periodicTasks = payload.periodicTasks;
        if(!state.periodicTaskSelected || state.periodicTasks.filter(x => x.id == state.periodicTaskSelected.id).length === 0){
            state.periodicTaskSelected = state.periodicTasks[0];
        }
    },

    /**
     * Stores selected periodicTask in the state
     *
     * @param {Object} state The store data
     * @param {Object} payload The collections payload
     */
    setPeriodicTaskSelected(state, payload) {
        state.periodicTaskSelected = payload.periodicTask;
    },

    /**
     * Adds the periodicTask to the list of the state
     *
     * @param {Object} state The store data
     * @param {Object} payload The collections payload
     */
    addPeriodicTask(state, payload) {
        state.periodicTasks.push(payload.periodicTask);
        state.periodicTaskSelected = payload.periodicTask;
    },

    /**
     * Updates the periodicTask in the list of the state
     *
     * @param {Object} state The store data
     * @param {Object} payload The collections payload
     */
    updatePeriodicTask(state, payload) {
        var periodicTasks = state.periodicTasks;
        var index = periodicTasks.map(x => x.id).indexOf(payload.periodicTask.id);
        periodicTasks[index] = payload.periodicTask;
        state.periodicTasks = periodicTasks;
        state.periodicTaskSelected = payload.periodicTask;
    },

    /**
     * Deletes the periodicTask from the list of the state
     *
     * @param {Object} state The store data
     * @param {Object} payload The collections payload
     */
    deletePeriodicTask(state, payload) {
        var periodicTasks = state.periodicTasks;
        periodicTasks.splice(periodicTasks.indexOf(payload.periodicTask), 1);
        state.periodicTasks = periodicTasks;
        var periodicTaskSelected = periodicTasks.length > 0 ? periodicTasks[0] : null;
        state.periodicTaskSelected = periodicTaskSelected;
    }
}

const actions = {
    /**
     * Requests all periodicTasks from the server
     *
     * @param {Object} commit The store mutations
     * @returns {Promise}
     */
    loadPeriodicTasks({commit}) {
        return new Promise(function (resolve) {
            Requests.get('periodic_task')
                .then(response => {
                    if(response.data === false){
                        // eslint-disable-next-line
                        console.error(JSON.stringify(response));
                        commit('setPeriodicTasks', {
                            periodicTasks: []
                        });
                    } else {
                        commit('setPeriodicTasks', {
                            periodicTasks: !!response.data ? response.data : []
                        });
                    }
                    
                    resolve();
                });
        });
    },

    /**
     * Selects an periodicTask
     *
     * @param {Object} commit The store mutations
     * @param {Object} periodicTask The selected periodicTask
     * @returns {Promise}
     */
    selectPeriodicTask({commit}, periodicTask) {
        commit('setPeriodicTaskSelected', {
            periodicTask: periodicTask
        });
    },

    /**
     * Adds a periodicTask
     *
     * @param {Object} commit The store mutations
     * @param {Object} periodicTask The selected periodicTask
     * @returns {Promise}
     */
    addPeriodicTask({commit}, periodicTask) {
        return new Promise(function (resolve) {
            Requests.post('periodic_task', periodicTask)
                .then(response => {
                    if(response.data === false){
                        // eslint-disable-next-line
                        console.error(JSON.stringify(response));
                        return;
                    }

                    if (response.status === "success" && response.data >= 0) {
                        periodicTask.id = response.data;
                        commit('addPeriodicTask', {
                            periodicTask: periodicTask
                        });
                        resolve();
                    } else {
                        // eslint-disable-next-line
                        console.error(JSON.stringify(response));
                    }
                });
        });
    },

    /**
     * Updates a periodicTask
     *
     * @param {Object} commit The store mutations
     * @param {Object} periodicTask The selected periodicTask
     * @returns {Promise}
     */
    updatePeriodicTask({commit}, periodicTask) {
        return new Promise(function (resolve) {
            Requests.put('periodic_task', periodicTask)
                .then(response => {
                    if(response.data === false){
                        // eslint-disable-next-line
                        console.error(JSON.stringify(response));
                        return;
                    }

                    if (response.status === "success" && response.data === 0) {
                        commit('updatePeriodicTask', {
                            periodicTask: periodicTask
                        });
                        resolve();
                    } else {
                        // eslint-disable-next-line
                        console.error(JSON.stringify(response));
                    }
                });
        });
    },

    /**
     * Deletes a periodicTask
     *
     * @param {Object} commit The store mutations
     * @param {Object} periodicTask The selected periodicTask
     * @returns {Promise}
     */
    deletePeriodicTask({commit}, periodicTask) {
        return new Promise(function (resolve) {
            Requests.delete('periodic_task', periodicTask.id)
                .then(response => {
                    if(response.data === false){
                        // eslint-disable-next-line
                        console.error(JSON.stringify(response));
                        return;
                    }
                    
                    if (response.status === "success" && response.data === 0) {
                        commit('deletePeriodicTask', {
                            periodicTask: periodicTask
                        });
                        resolve();
                    } else {
                        // eslint-disable-next-line
                        console.error(JSON.stringify(response));
                    }
                });
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}