import express from 'express';
import next from 'next';

import routes from '../routes';

const app = next({ dev : true});
const handler = app.getRequestHandler();
const routeHandler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  const port = '3000';

  server.use(routeHandler);
  server.all('*', (req, res) => handler(req, res));

  server.listen(3000, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
});