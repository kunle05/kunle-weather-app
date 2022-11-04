# My Weather App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1. To run this application, you require both Google Map API key and RapidAPI Referential Key.

## Set up your environment

Follow these instructions to set up your develoment environment and run this application.

- Ensure you have a Google map API key.
- Navigate to `index.html`.

```
 cd src/index.html
```

Insert your key in the placeholder text.

```
<script src="https://maps.googleapis.com/maps/api/js?key=<YOUR_API_KEY>" type="text/javascript"></script>
```

Sign up to get an API Key on <https://rapidapi.com/referential/api/referential/>.

Navigate to the environment file.

```
cd src/environments/environment.ts
```

Enter your referential api key in the placeholder.

```
  referentialKey: '<YOUR_REFERENTIAL_KEY>'
```

## Development server

Run the following commands from the project root directory to start a dev server.

```
 npm install
 ng serve --open
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
