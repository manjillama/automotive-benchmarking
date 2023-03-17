## Project Introduction

Automotive benchmarking app. Just a fun little project I created for no particular reason. This app uses-

- AWS s3 for assets storage
- MySQL as a database
- Svelte for frontend
- Strapi for backend

## Server Setup

- Navigate to `api` folder. Copy the `example.env` and save as `.env`. Update the variables. In the project directory, you can run:

```bash
  yarn install
  yarn develop
```

Runs the app in the development mode.\
Open [http://localhost:3008](http://localhost:3008) to view it in the browser.

## Site setup

- Navigate to `app` folder. Copy the `example.env` and save as `.env`. Update the variables. In the project directory, you can run:

```bash
  yarn install
  yarn dev
```

Runs the app in the development mode.\
Open [http://localhost:3007](http://localhost:3007) to view it in the browser. You can change the default port by editing `vite.config.ts` file.
