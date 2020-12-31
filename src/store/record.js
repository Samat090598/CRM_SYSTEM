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
        }
    }
}