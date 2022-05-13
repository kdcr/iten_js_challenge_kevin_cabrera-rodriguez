# iteNlearning js challenge

## [Kevin David Cabrera Rodríguez](www.linkedin.com/in/kdcr)

### Instructions to build

After downloading the project source code, install its dependencies

```shell
#npm

$ mpm i

#yarn

$ yarn install
```

To build the app for a production environment, run

```shell
#npm

$ mpm run build

#yarn

$ yarn run build
```

The production-ready build is the "dist" folder, and can be served directly with nginx, apache, npx serve etc

### Instructions to run storybook

After installing the projects dependencies, run

```shell
#npm

$ npm run storybook

#yarn

$ yarn run storybook
```

This will serve a storybook application and open a new tab in your default web browser with it


### Management of the challenge goals

#### 1. Development of the List/View/Add/Remove actions

For the actions, I created a fake API for each action, these actions interact with the browsers localStorage, using it as a mock-up DB.

#### 2. Validate forms fields

For the form validation I wanted to use formik, but as I had never used it, and didn't have the time to learn first, I created some basic validation methods for the different input types (name, email, date).

#### 3. Responsivenes

I have experience building responsive apps for bigger screens, but I wanted to try and make the App usable in a mobile device. I used css media queries and the device sizes specified in the Tailwind CSS framework, as I am familiar with them.

#### 4. Build system

I used webpack with the necessary plugins, and babel.

#### 5. Testing

I used jest as it's a testing library I had already used in the past, it has eslint plugins so I added it too. I implemented some form validation tests.

#### 6. Internationalization

I used i18next, as i really like the approach it takes on the translation management. Also, the provided useTranslation hook comes really handy, as it not only returns the 't' function, but the selected language and more.

### Guidelines

In the past, I have used create-react-app, create-react-library, vite and next. I don't really like any of them, at least not the create-react pair, because of the loss of control of dependencies version over time, as sometimes some of those dependencies are pulled from these tools and changing it can be a time-consuming and problematic process.
For this reason, I prefer a less automated approach, and create the boilerplate by hand, or almost.
This means that every now and then I had to search for information on how to set up webpack plugins as needed, but I personally think it's worth it.

As the application is client-sided only, I used the browsers localStorage to write and read data from. In the settings menu, there is a button to reload the default mock-up data.

I tried to make, at least the atomic components reusable, and for documenting them I used Storybook, this also helped in creating this components as there was no need to run the entire application.
I have added JSdoc comments on the atomic components, as these have great integration with the IDEs.

### Extra credits

I started by adding postCSS but quickly realized there was no need, as I was going to use styled-components, and would, almost, not use css files.

Linting should be mandatory in every software development environment, as it prevents developer induced errors. When paired with prettier, it greatly helps the team as every developer has the same formatting settings.

I tried to make the best user experience, by auto updating the information on screen, and navigating to the created element when adding new students or classrooms.
