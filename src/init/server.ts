import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as config from 'config';

import routes from '../routes/routes';
import accessAllowOriginMW from '../middleware/accessAllowOrigin';
import handleErrorsMW from '../middleware/handleErrors';
var app = express();

app.use('/api/doc', express.static(path.join(__dirname, '/../../apidoc')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//middleware
app.use(accessAllowOriginMW);

//router
routes(app);

//last middleware in order to handle the errors
app.use(handleErrorsMW);

export function start(cb:() => void = null){

    const port: number = Number(config.get('port'));
    const host: string = String(config.get('host'));

    const server = app.listen(port, host, () => {
        const host = server.address().address;
        const port = server.address().port;

        console.log('express app is listening on http://%s:%s', host, port);
        cb && cb();
    });
}

