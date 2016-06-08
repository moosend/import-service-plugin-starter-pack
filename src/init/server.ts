import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as config from 'config';

import routes from '../routes/routes';
import accessAllowOrigin from '../middleware/accessAllowOrigin';
import handleErrors from '../middleware/handleErrors';
var app = express();

app.use('/api/doc', express.static(path.join(__dirname, '/../../doc')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//middleware
app.use(accessAllowOrigin);

//router
routes(app);

app.use(handleErrors);

export function start(cb:Function = null){

    const port: number = Number(config.get('port'));
    const host: string = String(config.get('host'));

    const server = app.listen(port, host, () => {
        const host = server.address().address;
        const port = server.address().port;

        console.log('express app is listening on http://%s:%s', host, port);
        cb && cb();
    });
}

