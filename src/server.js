import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import express from 'express';

const app = express();

const adminjs = new AdminJS({
    database: [],
    rootPath: '/admin',
    resources: []
});

const router = AdminJSExpress.buildRouter(adminjs);

app.use(adminjs.options.rootPath, router); // Corrigido para adminjs.options.rootPath
app.listen(5000, () => {
    console.log("AdminJS está em http://localhost:5000/admin");
});