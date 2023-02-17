# Requirements

## Vision

The vision of this site is to make a mapping interface and alert system for data from the open Purple Air network of citizen-run air quality sensors.

The pain point our site solves is that the current map provided by Purple Air only shows point location for each sensor and it would be helpful for a user to be able to access estimated air quality for their home or any other location in their area.  Additionally, the ability to access fine-grained alerts for air quality in their location allows users to make critical health safety decisions.

The public should care about this app because users with asthma or other pulmonary conditions would benefit greatly from more spatially accurate information about air quality. Scientists could also benefit from this app because it gives them away to quickly explore air quality data.

## Scope

### IN:

- The mapping application will provide a user-friendly interface that displays data from the Purple Air network of air quality sensors, allowing users to easily access information about air quality in their area.

- The app will allow users to enter a specific location and view the estimated air quality for that location based on the closest sensor data.

- Users will be able to receive alerts for air quality in their location, based on pre-set thresholds for various pollutants.

- The app will provide a detailed map view that displays sensor locations and estimated air quality in real time, allowing users to easily navigate and explore the data.

### OUT:

- The mapping application will not provide real-time traffic updates or directions, as its primary focus is on air quality data and related features.

- The app will not include social media integration or other features unrelated to its core purpose of providing accurate and accessible air quality data.

- It is important to note that while the app may provide estimated air quality data for a given location, it is not a substitute for official air quality monitoring and should not be relied upon as the sole source of information on air quality. The app is intended to supplement and provide additional information to users, but should not be used as a substitute for official air quality monitoring or medical advice.

## MVP

Our site will provide an interactive spatially interpolated map of air quality index data for a user specified location. The user will also have the opportunity to make an account to keep track of their favorite locations as well as sign up for alerts about air quality in their area.

## Stretch Goals

- Provide the user graphs of historical air quality data for their location.
- Create a predictive model of air quality for user location based on historical data.

## Functional Requirements:

### The mapping application will have several key functional requirements, including:

1. Displaying data from the Purple Air network of air quality sensors in a user-friendly interface.
2. Allowing users to search for air quality information in specific locations and receive real-time updates.
3. Providing alerts for air quality in a user's location based on pre-set thresholds.
4. Allowing users to view historical air quality data and trends over time.
5. Providing detailed map views that display sensor locations and estimated air quality data in real time.

### Data Flow:

1. When a user begins using the mapping application, they will first be presented with the home screen, which will display a map of their current location and estimated air quality data from the nearest sensor. From there, users can input a specific location to view estimated air quality data for that area, or browse the map to view sensor locations and estimated air quality data in different areas.

2. If a user sets a specific air quality threshold for alerts, the app will continuously monitor the air quality data and send an alert to the user if the threshold is exceeded. Users can also view historical air quality data for specific locations and compare trends over time.

## Non-Functional Requirements:

1. Two important non-functional requirements for the mapping application are security and usability.

2. Security will be implemented through various measures, such as secure login and authentication procedures to protect user information and prevent unauthorized access. Additionally, the app will use encryption and other security protocols to protect data in transit and at rest.

3. Usability will be a key consideration in the development of the mapping application, with a focus on providing a user-friendly and intuitive interface that is easy to navigate and understand. This will involve conducting user research and testing to ensure that the app meets the needs and expectations of its intended audience. Additionally, the app will be designed to be accessible to users with disabilities, with features such as text-to-speech functionality and high-contrast visual modes.
