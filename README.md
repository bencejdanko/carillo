# Dealership CMS (Abandoned)
This repository contains an ambitious but ultimately abandoned project: a web-based car dealership management system (CMS). Developed as part of the Zinnstarter program at San Jose State University (SJSU). It was an experimental attempt at implementing modern web technologies and frameworks. First designing in Figma, we explored Svelte, SvelteKit, React Native with Expo, and PocketBase.

While this project never reached production, it remains an artifact of our startup experience, culminating in meeting Ray Zinn. Feel free to explore, cringe, and perhaps even find some inspiration in our missteps!

# Setup Instructions

## Backend

1. Download a PocketBase binary according to your operating system    
   - https://github.com/pocketbase/pocketbase/releases

2. Place the binary in /dev/backend

3. Locate your IP Address using the command terminal
   - In Windows, type `ipconfig`
   - In Linux, type `ip addr`
   - For example, `192.168.0.177`

4. Navigate to `/dev/backend`, and run the command `./pocketbase serve --dev --http="IP_ADDRESS_HERE:8090"`

5. To have the Mobile App connect to this backend, create a new file called `.env` in `/dev/mobile`. Type in `IP_ADDRESS=192.168.0.177`, except with your own IP address. 

## Mobile

1. Download NodeJS for your operating system
   - https://nodejs.org/en/download
   - Add it to your enviroment variables
   - To make sure it is installed, run `npm -v` and make sure you get the version number

2. Navigate to /dev/mobile and run `npm i`

3. Type `npm start -- --tunnel`
   - agree to the initial install

4. Download the Expo Go app on your phone

5. Scan the QR code on the screen with your camera

## Web

1. `cd dev`
2. Install NodeJS
3. run `npm i`
4. `npm run dev`
