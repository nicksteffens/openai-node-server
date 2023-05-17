# Setup

Install the required pages for the node server, run the following from the root of the repository:

```sh
yarn
```

After all dependencies have been installed you need to setup your `.env` file. Duplicate `.example.env` to `.env`

**BESURE TO NOT COMMIT THE KEYS OR .ENV**

Replace the following:
```
OPENAI_ORG="org-_ORG_KEY_"
OPENAI_API_KEY="_PERSONAL_KEY"
```
To locate your keys check out following: [personal key](https://platform.openai.com/account/api-keys) and [org key](https://platform.openai.com/account/org-settings)


# Local Development

To start the server run `npm start` from the local directory.

The server will be accessible via:
http://localhost:6666

Using express you can add whatever routes you'd like to `index.js`

### Example
The `/auto-tag` route takes a JSON body request `text` and will return a few tags associated with the provided text.

Using the following as Campaign Name we get the following result.

REQ
```json
{
  "text": "Winter holiday 2023: Get out into the snow"
}
```
RES
```json
{
    "result": "#WinterHoliday2023 #Snow #Outdoors #Vacation"
}
```