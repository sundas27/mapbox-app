## Install Dependencies

Run `npm install` to install all dependencies listed in package.json.

## Install Dependencies

Run `npm run dev` to start this project.

## Project Description

Currently, there is only one home page, which renders a map with user's location.
One button to import csv file, once it is imported you will see a horizontal list of location names retrieved from the file.
All of their lat lngs are also being calculated. When you click on any location, it changed viewport value, but due to some issue in useEffect, still needed to figure out checks so that map marker should be dynamically updated.

## Missing Work

i) Marker is not dyanmically updating when user selects a location, although processing is done.
ii) Directions are not shown between user given input and selected location.
------- I was unable to import react-map-gl-directions module, although I had written its code in a separate file but failed to import it however tried many things.
------- Tried to use mapbox-gl module to show map and directions, spent a lot of time in it too, but got a xml module error.
