import firebase from 'firebase/app'

export default {
    actions: {
        async LOGIN({dispatch, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                commit('SET_ERROR', e)
                throw e
            }
        },
        async REGISTER({dispatch, commit}, {email, password, name}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('GET_UID')
                await firebase.database().ref(`/users/${uid}/info`).set({
                    bill: 10000,
                    name
                })
            } catch (e) {
                commit('SET_ERROR', e)
                throw e
            }
        },
        GET_UID(){
          const user = firebase.auth().currentUser
          return user ? user.uid : null
        },
        async LOGOUT() {
            await firebase.auth().signOut()
        }
    }
}