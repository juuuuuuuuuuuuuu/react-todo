import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import store from './store';
import FormGroup from './containers/FormGroup';
import TodoList from './containers/TodoList';
import Layout from './components/Layout';
import ImmutableList from './containers/ImmutableList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">TODO List</span>
        </nav>
        <div className="container">
          <div className="row">
            {/* 할일 목록 추가 */}
            <Layout title='할일 목록 추가'>
              <FormGroup />
            </Layout>
            {/* 할일 목록 리스트 */}
            <Layout title='할일 목록 리스트'>
              <TodoList/>
            </Layout>
            {/* 마감기한 지난 할일 목록 리스트 */}
            <Layout title='마감기한 지난 할일 목록 리스트'>
              <ImmutableList type='past' />
            </Layout>
            <Layout title='완료 리스트'>
              <ImmutableList type='complete' />
            </Layout>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
