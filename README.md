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

2. Navigate to /dev/frontend and run `npm i`

3. Type `npm start -- --tunnel`
   - agree to the initial install

4. Download the Expo Go app on your phone

5. Scan the QR code on the screen with your camera