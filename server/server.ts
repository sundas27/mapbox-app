import express from 'express';
import next from 'next';
import routes from '../routes';

const app = next({ dev : true});
const handler = app.getRequestHandler();
const routeHandler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  const port = '8000';

  // server.post('/region', async (req, res) => {
  //   const ip = String(getClientIp(req));
  //   let country;
  //   let postal;
  //   let region;
  //   let city;
  //   await ipdata.lookup(ip).then(function (data) {
  //     if (data.country_name && data.country_name !== '') {
  //       country = base64Encoder(String(data.country_name));
  //     } else {
  //       country = base64Encoder(String('United States'));
  //     }
  //     if (data.city && data.city !== '') {
  //       city = base64Encoder(String(data.city));
  //     }
  //     if (data.region && data.region !== '') {
  //       region = base64Encoder(String(data.region));
  //     }
  //     if (data.postal && data.postal !== '') {
  //       postal = base64Encoder(String(data.postal));
  //     }
  //   });

  //   res.send({ country, postal, region, city });
  // });

  server.use(routeHandler);
  server.all('*', (req, res) => handler(req, res));

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
});