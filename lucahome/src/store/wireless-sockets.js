'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import Requests from '../services/requests'

Vue.use(Vuex)

const state = {
    wirelessSockets: [],
    wirelessSocketSelected: null
}

const getters = {
    wirelessSockets: state => state.wirelessSockets,
    wirelessSocketSelected: state => state.wirelessSocketSelected,
    wirelessSocketsForArea: (state, getters, area) => {
        var wirelessSocketsForArea = area.filter === "" 
            ? getters.wirelessSockets 
            : getters.wirelessSockets.filter(x => x.area === area.filter);
        return wirelessSocketsForArea;
    }
}

const mutations = {
    /**
     * Stores all available wireless sockets in the state
     *
     * @param {Object} state The store data
     * @param {Object} payload The collections payload
     */
    setWirelessSockets(state, payload) {
        state.wirelessSockets = payload.wirelessSockets;
    },

    /**
     * Stores selected wireless socket in the state
     *
     * @param {Object} state The store data
     * @param {Object} payload The collections payload
     */
    setWirelessSocketSelected(state, payload) {
        state.wirelessSocketSelected = payload.wirelessSocket;
    },

    /**
     * Adds the wireless socket to the list of the state
     *
     * @param {Object} state The store data
     * @param {Object} payload The collections payload
     */
    addWirelessSocket(state, payload) {
        state.wirelessSockets.push(payload.wirelessSocket);
        state.wirelessSocketSelected = payload.wirelessSocket;
    },

    /**
     * Updates the wireless socket in the list of the state
     *
     * @param {Object} state The store data
     * @param {Object} payload The collections payload
     */
    updateWirelessSocket(state, payload) {
        var wirelessSockets = state.wirelessSockets;
        var index = wirelessSockets.map(x => x.id).indexOf(payload.wirelessSocket.id);
        wirelessSockets[index] = payload.wirelessSocket;
        state.wirelessSockets = wirelessSockets;
        state.wirelessSocketSelected = payload.wirelessSocket;
    },

    /**
     * Deletes the wireless socket from the list of the state
     *
     * @param {Object} state The store data
     * @param {Object} payload The collections payload
     */
    deleteWirelessSocket(state, payload) {
        var wirelessSockets = state.wirelessSockets;
        wirelessSockets.splice(wirelessSockets.indexOf(payload.wirelessSocket), 1);
        state.wirelessSockets = wirelessSockets;
        var wirelessSocketSelected = wirelessSockets.length > 0 ? wirelessSockets[0] : null;
        state.wirelessSocketSelected = wirelessSocketSelected;
    }
}

const actions = {
    /**
     * Requests all wireless sockets from the server
     *
     * @param {Object} commit The store mutations
     * @returns {Promise}
     */
    loadWirelessSockets({commit}) {
        return new Promise(function (resolve) {
            Requests.get(OC.generateUrl('apps/lucahome/api/v1/wireless_socket'))
                .then(response => {
                    commit('setWirelessSockets', {
                        wirelessSockets: response.data
                    });
                    resolve();
                });
        });
    },

    /**
     * Selects a wirelessSocket
     *
     * @param {Object} commit The store mutations
     * @param {Object} wirelessSocket The selected wireless socket
     * @returns {Promise}
     */
    selectWirelessSocket({commit}, wirelessSocket) {
        commit('setWirelessSocketSelected', {
            wirelessSocket: wirelessSocket
        });
        resolve();
    },

    /**
     * Adds a wireless socket
     *
     * @param {Object} commit The store mutations
     * @returns {Promise}
     */
    addWirelessSocket({commit}) {
        var wirelessSocket = {
            id: -1,
            name: "",
            area: "",
            code: "",
            state: false,
            description: "",
            icon: ""
        };

        return new Promise(function (resolve) {
            Requests.put(OC.generateUrl('apps/lucahome/api/v1/wireless_socket'), wirelessSocket)
                .then(response => {
                    if(response.status === "success" && response.data >= 0) {
                        wirelessSocket.id = response.data;
                        commit('addWirelessSocket', {
                            wirelessSocket: wirelessSocket
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
     * Updates a wireless socket
     *
     * @param {Object} commit The store mutations
     * @param {Object} wirelessSocket The selected wireless socket
     * @returns {Promise}
     */
    updateWirelessSocket({commit}, wirelessSocket) {
        return new Promise(function (resolve) {
            Requests.post(OC.generateUrl('apps/lucahome/api/v1/wireless_socket'), wirelessSocket)
                .then(response => {
                    if(response.status === "success" && response.data === 0) {
                        commit('updateWirelessSocket', {
                            wirelessSocket: wirelessSocket
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
     * Deletes a wireless socket
     *
     * @param {Object} commit The store mutations
     * @param {Object} wirelessSocket The selected wireless socket
     * @returns {Promise}
     */
    deleteWirelessSocket({commit}, wirelessSocket) {
        return new Promise(function (resolve) {
            Requests.delete(OC.generateUrl('apps/lucahome/api/v1/wireless_socket'), wirelessSocket.id)
                .then(response => {
                    if(response.status === "success" && response.data === 0) {
                        commit('deleteWirelessSocket', {
                            wirelessSocket: wirelessSocket
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