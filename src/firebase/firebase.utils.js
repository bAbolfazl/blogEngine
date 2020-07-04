import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCpCpzxMwHjYjG4B80WrTwiFpL2LHp8DUg",
    authDomain: "blog-engine-a25c9.firebaseapp.com",
    databaseURL: "https://blog-engine-a25c9.firebaseio.com",
    projectId: "blog-engine-a25c9",
    storageBucket: "blog-engine-a25c9.appspot.com",
    messagingSenderId: "151425977155",
    appId: "1:151425977155:web:7a18d652e4fd5eb03c3df6",
    measurementId: "G-2BFY07Y21H"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

// store data
// user
export const createUserDoc = async (userAuth, otherData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`/users/${userAuth.uid}`)
    const userSnap = await userRef.get()

    if (!userSnap.exists) {

        const { email, displayName } = userAuth
        const registerDate = new Date()
        try {
            await userRef.set({
                email,
                displayName,
                registerDate,
                ...otherData
            })
        }
        catch (err) {
            console.log('error', err.message)
        }
    }
    return userRef
}
// post
export const createPostDoc = async (userAuth, otherData) => {
    if (!userAuth) return

    const postRef = firestore.doc('posts/')

    const { img, text, cat, title } = otherData
    const writeDate = new Date()

    try {
        await postRef.set({
            img,
            text,
            title,
            cat,
            writeDate,
        })
    } catch (err) {
        console.log('err', err.message)
    }
    return postRef
}

// add data to database
export const addCollectionAndDocs = async (collectionName, documents) => {
    const collectionRef = firestore.collection(collectionName)
    // console.log(collectionRef)

    const batch = firestore.batch()
    // console.log(documents)
    documents.forEach(doc => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, doc)
    })

    return await batch.commit()
}

// fetch data convert
// posts
export const convertCollectionSnapshotToMap = collection => {
    const newCollection = collection.docs.map(doc => {
        // console.log(doc.data())
        const { img, text, comments, cat, title } = doc.data()
        // console.log(img, text, comments, cat, title)
        return {
            id: doc.id,
            title,
            img,
            cat,
            text,
            comments
        }
    })
    // console.log(newCollection)
    return newCollection
}
// users
export const convertCollectionUsersSnapshotToMap = collection => {
    const newCollection = collection.docs.map(doc => {
        console.log(doc.data())
        const { displayName, registerDate } = doc.data()

        return {
            id: doc.id,
            displayName,
            registerDate,
            img: 'https://www.w3schools.com/howto/img_avatar.png'
        }
    })
    return newCollection
}