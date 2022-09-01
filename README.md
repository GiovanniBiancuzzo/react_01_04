Crea un componente chiamato WarningSign che riceva una stringa dalle prop.

Questo testo dovrà essere visualizzato all’interno di un componente Alert di react-bootstrap di tipo danger.

Crea un componente chiamato MyBadge che riceva sia una stringa di testo che un colore come prop.

Questo componente dovrà renderizzare un componente Badge con quelle proprietà.

Crea un componente SingleBook e questa volta dovrà essere un componente creato a funzione. Il componente riceve un oggetto corrispondente ad un singolo libro come prop, e visualizzerà la sua copertina e il titolo del libro.

Usa le Card di react-bootstrap per renderizzare il libro (l’oggetto del libro può esser letto da un file .json che hai ricevuto ieri).

Crea un componente BookList. Questo componente riceverà dalle prop una lista di libri da visualizzare utilizzando il componente SingleBook.

Crea una funzione filterBookList. Scrivendo una stringa di ricerca dentro un campo input, il componente BookList dovrà renderizzare solo i libri contenente la stringa cercata come titolo del libro (suggerimento: salva la stringa di ricerca dentro allo stato del componente BookList e filtra i libri di conseguenza).

Converti il tuo componente SingleBook in una classe, e crea il suo stato contenente una proprietà booleana selected.
Cliccare sul SingleBook dovrà fare il toggle della proprietà selected. Se la proprietà selected sarà true, il SingleBook dovrà ricevere dello stile che rifletta il cambio di stato, visivamente.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
