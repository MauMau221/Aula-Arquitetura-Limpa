// Configuração
const firebaseConfig = {
    apiKey: "AIzaSyCPmjOVuWOUkXx8hRI0KEifoxDKC8fJOPA",
    authDomain: "aula-firebase-b4ad3.firebaseapp.com",
    projectId: "aula-firebase-b4ad3",
    storageBucket: "aula-firebase-b4ad3.firebasestorage.app",
    messagingSenderId: "987342065849",
    appId: "1:987342065849:web:f8db08473b17f4a4748b68",
    measurementId: "G-06B1EB0RT0"
  };

// Inicialização
firebase.initializeApp(firebaseConfig);

//Referencia do bd
const db = firebase.firestore();