# Schedulr

## About

Schedulr is a web-based application that allows temporary staffing companies to post available shifts and track metrics accross shifts, clients, and their workforce. My goal is to provide staffing agencies with an easier scheduling and tracking process with metric tracking to empower agencies to better understand their market health.

## Most Recent Developments
 - Reporting Suite
 - Metric Visualization Tools
 - Enhanced Logic and QOL Improvements
 - Improved Staff Management on Orders

## Future Development Goals

 - Worker Portal & Functionality
 - User Authentication
 - Filtering
 - More Robust Metrics
 - Further QOL Improvements
 - See Issues for known bugs

## Stack

 - Front-end: 
    - React.js
 - Back-end: 
    - Django
 - Database
    - PostgreSQL

## Libraries & API's
- Kendo React Library
   > Used for data visualization.
   > [Install Guide](https://www.telerik.com/kendo-react-ui/getting-started/)
- Hammer.js Library
  > Used for enhanced gestures in Kendo React charts.
  > [NPM Install](https://www.npmjs.com/package/hammerjs)
- JS File Download Library
  > Used for csv downloading of reports.
  > [NPM Install](https://www.npmjs.com/package/js-file-download)
- Axios
  > Used for API calls.
  > [NPM Install](https://www.npmjs.com/package/axios)
- React Google Maps
  > Enables binding for the Google Maps API into a component.
  > [NPM Install](https://www.npmjs.com/package/@react-google-maps/api)
- Google Maps API
- Google Geocoding API 


## Inital Wireframe
![Admin View](./public/Admin_View.png)

## User Stories

 - As an admin user, I should be able to input a shift with start/end times, the company, location, and all shift details
 - As an admin user, I should be able to see what the fill rate is for each of the posted shifts
 - As an admin user, I should be able to see, edit, and delete all my posted shifts
 - As an admin user, I should be able to add a new company
 - As an admin user, I should be able to see and edit all companies
 - As an admin user, I should be able to see all shifts associated with a company
 - As an admin user, I should be able to see a list of workers
 - As an admin user, I should be able to see a worker's upcoming and past claimed shifts
 - As an admin user, I should be able to see when a shift was posted

### What needs work?
My list could go on and on about what needs work. Most of the time, these projects could never end in that there is always something to be worked on. 

Outside of feature additions, there are a few hiccups along the way that could use improvement. There are UI components that need to be reworked such as the shift creation workflow. Some pieces are not perfectly formatted for mobile. While I am proud of my shift creation workflow, it isn't as responsive as it should be. Sometimes, you have to hit create twice for it to send to the back-end.
