import '../styles/TodoList.scss';

function TodoList() {
  return (
    <div className="todo-master">
      <h2 className='todo-title'>Todo List <i className="fa-solid fa-plus plus"></i></h2>
      <div className="todo-list">
        <div className="list-item"><div className='checks'></div>Stop having no friends</div>
        <div className="list-item"><div className='checks'></div>Join together with newly aquired friends</div>
        <div className="list-item"><div className='checks'></div>Come up with a kickass project idea</div>
        <div className="list-item"><div className='checks'></div>Hash out the details for the project</div>
        <div className="list-item"><div className='checks'></div>Work on my part for Monday</div>
        <div className="list-item"><div className='checks'></div>Present my super cool mockup</div>
      </div>
    </div>
  );
}

export default TodoList;
