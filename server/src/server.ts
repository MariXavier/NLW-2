import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);


/*yarn init -y
yarn tsc --init
yarn add ts-node-dev -D
yarn add express*/