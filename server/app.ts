import express, { Express } from 'express';
import './config/database'
import routes from './api/routes';

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;
