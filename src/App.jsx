import { useState } from 'react'
import './styles/App.scss';
import SideNavbar from './components/SideNavbar';
import MainContent from './components/MainContent';
import TodoList from './components/TodoList';

function App() {

  return (
  <div className='master'>
   <SideNavbar />
   <MainContent />
   <TodoList />
  </div>
  )
}

export default App
