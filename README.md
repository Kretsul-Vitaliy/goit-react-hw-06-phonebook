# goit-react-hw-06-phonebook

goit-react-hw-06-phonebook

# Getting Started with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn't feel obligated to use this
feature. However we understand that this tool wouldn't be useful if you couldn't
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here:
[https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here:
[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here:
[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here:
[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here:
[https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here:
[https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

**Читати іншими мовами: [Русский](README.md), [Українська](README.ua.md).**

# Критерії приймання

- Створений репозиторій `goit-react-hw-06-phonebook`
- При здачі домашньої роботи є посилання: на вихідні файли та робочу сторінку
  проекту на `GitHub Pages` або `Netlify`
- В Redux-стані зберігається мінімально необхідний набір даних
- Під час запуску коду завдання в консолі відсутні помилки та попередження.
- Для кожного компонента є окрема папка з файлом React-компонента та файлом
  стилів
- Для компонентів описані `propTypes`
- Використана бібліотека `Redux Toolkit`

## Телефонна книга

Виконай рефакторинг коду застосунку «Телефонна книга», додавши управління станом
за допомогою бібліотеки [Redux Toolkit](https://redux-toolkit.js.org/).

Нехай Redux-стан виглядає наступним чином.

```bash
{
  contacts: {
    items: [],
    filter: ''
  }
}
```

- Створи сховище з `configureStore()`
- Створи дії збереження та видалення контакту, а також оновлення фільтра.
  Використовуй функцію `createAction()`.
- Створи редюсери контактів та фільтра. Використовуй функцію `createReducer()`
  або `createSlice()`.
- Зв'яжи React-компоненти з Redux-логікою за допомогою хуків бібліотеки
  [react-redux](https://react-redux.js.org/)
