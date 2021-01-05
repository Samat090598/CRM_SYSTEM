import firebase from "firebase/app";

export default {
    actions: {
        async CREATE_RECORD({dispatch, commit}, record) {
            try {
                const uid = await dispatch('GET_UID')
                return await firebase.database().ref(`/users/${uid}/records`).push(record)
            } catch (e) {
                commit('SET_ERROR', e)
                throw e
            }
        },
        async FETCH_RECORDS({dispatch, commit}) {
            try {
                const uid = await dispatch('GET_UID')
                const records = (await firebase.database().ref(`/users/${uid}/records`).once('value')).val() || {}
                return Object.keys(records).map(key => ({...records[key], id: key}))
            } catch (e) {
                commit('SET_ERROR', e)
                throw e
            }
        },
        async FETCH_RECORD_BY_ID({dispatch, commit}, id) {
            try {
                const uid = await dispatch('GET_UID')
                const record = (await firebase.database().ref(`/users/${uid}/records`).child(id).once('value')).val() || {}
                return {...record, id}
            } catch (e) {
                commit('SET_ERROR', e)
                throw e
            }
        }
    }
}