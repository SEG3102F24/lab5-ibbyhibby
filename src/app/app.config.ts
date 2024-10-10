import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"lab5final-b29b2","appId":"1:37256600131:web:82e80efdd249281fd752f6","storageBucket":"lab5final-b29b2.appspot.com","apiKey":"AIzaSyCJ9cGnkzRXkgaknzQ7fS1ysRe_Nuxm1H8","authDomain":"lab5final-b29b2.firebaseapp.com","messagingSenderId":"37256600131"})), provideFirestore(() => getFirestore())]
};
