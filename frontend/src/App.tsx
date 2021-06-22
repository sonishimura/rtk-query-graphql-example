import { useGetToDosQuery } from "./api/toDo";

function App() {
  const { data } = useGetToDosQuery({});
  console.log(data?.toDos);

  return <div className="App"></div>;
}

export default App;
