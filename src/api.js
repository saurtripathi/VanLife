
// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, where, query } from "firebase/firestore/lite"


const firebaseConfig = {
    apiKey: "AIzaSyCWFAjmVdGP8Im2OP79qVSvKqi4ztm9G5Q",
    authDomain: "vanlife-f5a54.firebaseapp.com",
    projectId: "vanlife-f5a54",
    storageBucket: "vanlife-f5a54.appspot.com",
    messagingSenderId: "275017194769",
    appId: "1:275017194769:web:327c5c04c1e19dfa9e40b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)


export async function getVans() {
    const vansCollection = collection(db, "vans")
    const snapshot = await getDocs(vansCollection)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    console.log(vans)
    return vans
}



export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans() {

    const vansCollection = collection(db, "vans")
    const q = query(vansCollection, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    console.log(vans)
    return vans
}





// A function whose only purpose is to delay execution
// for the specified # of milliseconds when used w/ `await`
// e.g. inside an async function:
// await sleep(2000)  => pauses the function for 2 seconds before moving on
function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}