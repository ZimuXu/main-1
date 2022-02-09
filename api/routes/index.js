import todoRouter from './health.js'

export default (app) => {
    
    app.use('/',todoRouter);
}