# Wedding Website

A mobile responsive website I made for my wedding with React and `react-bootstrap`

Live demo: [https://taniach.github.io/wedding-site/](https://taniach.github.io/wedding-site/)

## Features

- Cover photo
- Countdown to the big day
- Event details
- Link to get directions to venue with Google Maps
- RSVP feature for guests attending physically, virtually or unable to attend
- Invite code for guests attending physically
- Google Sheets as database
- Story cards with images

## Getting Started

After you clone, `cd wedding-site` to enter the project directory.

Run `npm install` to install dependencies.

Replace the images in `src\img` with your own images.

Create `config.json` in `src` directory. This is already added to `.gitignore`. Create the following variables:

- `ENDPOINT`: This is the URL to post your RSVP data to. I followed [this nocodeapi link](https://nocodeapi.com/integrate-google-sheets-with-your-feedback-form) and created an account to post data to Google Sheets. The endpoint should be of the format: `<your_google_sheet_nocodeapi_endpoint>?tabId=`
- `IN_PERSON`: Tab name to store data for guests attending in person - I try not to have any spaces/special characters for sheet names
- `VIRTUALLY`: Tab name to store data for guests attending virtually
- `UNABLE`: Tab name for guests unable to attend
- `INVITE_CODES`: Array of invite codes

Run `npm start` the app in the development mode. It will open [http://localhost:3000](http://localhost:3000) and you can view it in the browser.

The page will reload if you make edits.

### Theme colours and styling

Edit `App.scss` and `custom.scss` to set your preferred fonts, colours and styles.

### Countdown

Enter your wedding date and time in `Countdown.js`.

### Directions to venue

I followed [this article](https://aiocollective.com/blog/how-to-add-a-link-to-google-maps-with-directions/) to get a link to Google Maps with directions.

### Google Sheets Columns

In my Google Sheets, the columns are:

- `IN_PERSON`: Datetime, Name, Phone number, Invite Code, Message for couple
- `VIRTUALLY`: Datetime, Name, Email, Message for couple
- `UNABLE`: Datetime, Name, Message for couple

You may edit the above according to your requirements but remember to change the code in `src/components/RSVP.js`

## Deploying to GitHub pages

1. In `package.json`, set the `homepage` field as your site URL.
2. Ensure that your GitHub repository source branch in Settings is set to `gh-pages /(root)`.
2. Push changes to `master`.
3. `npm run deploy`
4. Wait for a few minutes to view your page.

The `gh-pages` dependency publishes pages to the `gh-pages` branch on GitHub.