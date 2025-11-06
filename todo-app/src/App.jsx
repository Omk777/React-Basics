import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'


import './App.css'
import TodoList from './components/TodoList.jsx'
import AddTodo from './components/AddTodo.jsx'
import EditTodo from './components/EditTodo.jsx'
import NotFound from './components/NotFound.jsx'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TodoList />} />
          <Route path="add" element={<AddTodo />} />
          <Route path="edit/:id" element={<EditTodo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
