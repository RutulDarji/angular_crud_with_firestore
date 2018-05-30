// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDuWYYr_JenMq3ksBVo4psz4EK5EBoAqQM",
    authDomain: "firestoreproduction1.firebaseapp.com",
    databaseURL: "https://firestoreproduction1.firebaseio.com",
    projectId: "firestoreproduction1",
    storageBucket: "firestoreproduction1.appspot.com",
    messagingSenderId: "149733323061"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
