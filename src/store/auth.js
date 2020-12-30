import firebase from 'firebase/app'

export default {
    actions: {
        async LOGIN({dispatch, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                throw e
            }
        }
    }
}