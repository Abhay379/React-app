const Todos=({todos})=>{
  console.log("child render");
  return(
    <>
    <h2>My Todos</h2>
    {todos.map((todo,inex)=>{
      return <p key={index}>{todo}</p>
    })}
    </>
  );
}

export default Todos;