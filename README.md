<div style="display: flex; align-items: center;">
  <img width="100" alt="clean-air-compass logo" src="public/logo.png" style="margin-left: auto;">
  <h1 style="margin: 0;">CleanAir Compass</h1>
</div>

### _Oliver Speir_ / _Harper Foley_ / _Jason Christopher_ / _Dennis Nichols_ / _DeShon Dixon_

## Team LinkedIn

- [Oliver Speir LinkedIn](https://www.linkedin.com/in/oliverspeir/)
- [Harper Foley LinkedIn](https://www.linkedin.com/in/harper-e-foley/)
- [DeShon Dixon LinkedIn](https://www.linkedin.com/in/deshondixon)
- [Dennis Nichols LinkedIn](https://www.linkedin.com/in/dennisgnichols/)
- [Jason Christopher LinkedIn](https://www.linkedin.com/in/jasonchristopher24/)

## Overview

Clean Air Compass is a mapping interface and alert system for data from the open Purple Air network of citizen-run air quality sensors.

The pain point our site solves is that the current map provided by Purple Air only shows point location for each sensor and it would be helpful for a user to be able to access estimated air quality for their home or any other location in their area. Additionally, the ability to access fine-grained alerts for air quality in their location allows users to make critical health safety decisions. Users with asthma or other pulmonary conditions would benefit greatly from more spatially accurate information about air quality.

## Features

- Interactive spatially interpolated map of air quality index data for a user specified location. 
- Ability for users to set default locations for their account
- Users can sign up for text alerts about changing air quality levels in their area.

## Connected Repositories

- [Django backend](https://github.com/Oxygen-Oriented-Programming/Clean-Air-Compass-API/blob/dev/README.md) for user data management and email alert handling
- [Mapping API](https://github.com/Oxygen-Oriented-Programming/clean-air-compass-mapping-api) for processing data from the Purple Air API and applying a K Nearest Neighbor model to estimate air quality (PM2.5) accross a user-specified area.

