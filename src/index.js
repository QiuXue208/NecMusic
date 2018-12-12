import dva from 'dva';
import './index.css';
import model1 from './models/index'
import model2 from './models/song'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
///app.model(require('./models/index'));
const models = [model1,model2]
models.forEach(model=>app.model(model))

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
