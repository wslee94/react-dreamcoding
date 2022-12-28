import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from "uuid";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getDatabase,
  ref,
  set,
  get,
  onValue,
  child,
  remove,
} from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "shoppy-6a6c3.firebaseapp.com",
  databaseURL:
    "https://shoppy-6a6c3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shoppy-6a6c3",
  storageBucket: "shoppy-6a6c3.appspot.com",
  messagingSenderId: "945086836515",
  appId: "1:945086836515:web:8bf85890b48c0c3139a696",
  measurementId: "G-V9KQSN3QXB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInGoogle = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      return user;
    })
    .catch(console.error);
};

export const signOutGoogle = async () => {
  return signOut(auth)
    .then(() => null)
    .catch(console.error);
};

export const onAuthChanged = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

export const writeProductData = async (
  image,
  name,
  price,
  category,
  description,
  options
) => {
  const db = getDatabase();
  const id = uuidv4();
  await set(ref(db, "products/" + uuidv4()), {
    image,
    name,
    price,
    category,
    description,
    options,
  });

  return id;
};

export const readProductsData = () => {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    const productsRef = ref(db, "products/");
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();

      const result = [];
      for (const id in data) {
        result.push({ id, ...data[id] });
      }

      resolve(result);
    });
  });
};

export const readProductData = (id) => {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    const productsRef = ref(db, `products/${id}`);
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      resolve({
        id,
        selectOptions: data.options.split(",").map((n) => n.trim()),
        ...data,
      });
    });
  });
};

export const writeCartData = async (uid, productId, option, count) => {
  const db = getDatabase();
  await set(ref(db, `carts/${uid}/${productId}`), {
    option,
    count,
  });

  return productId;
};

export const readCartsData = async (uid) => {
  const result = [];
  const dbRef = ref(getDatabase());

  const cartsSnapshot = await get(child(dbRef, `carts/${uid}`));
  const carts = cartsSnapshot?.val() || [];

  for (const productId in carts) {
    const productSnapshot = await get(child(dbRef, `products/${productId}`));
    const product = productSnapshot.val();
    result.push({ productId, ...carts[productId], ...product });
  }

  return result;
};

export const deleteCartsData = async (uid, productId) => {
  const db = getDatabase();
  const cartProductRef = ref(db, `carts/${uid}/${productId}`);

  return remove(cartProductRef);
};
