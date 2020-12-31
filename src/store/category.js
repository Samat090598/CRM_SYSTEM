import firebase from "firebase/app";

export default {
    actions: {
        async CREATE_CATEGORY({commit, dispatch}, {title, limit}) {
            try {
                const uid = await dispatch('GET_UID')
                const category = await firebase.database().ref(`/users/${uid}/categories`).push({title, limit})
                return {title, limit, id: category.key}
            }
            catch (e) {
                commit('SET_ERROR', e)
                throw e
            }
        }
    }
}