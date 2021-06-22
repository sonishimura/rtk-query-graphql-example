import React from "react";
import { useCreateToDoMutation, useGetToDosQuery } from "./services/toDo";

const App: React.VFC = () => {
  const { data } = useGetToDosQuery();
  const [createToDo] = useCreateToDoMutation();

  if (!data?.toDos) return null;

  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <button
        onClick={() => {
          createToDo({ title: "test" });
        }}
      >
        Create Todo
      </button>
      <div>
        {data.toDos.map((todo) => {
          return <div key={todo.id}>{todo.title}</div>;
        })}
      </div>
    </div>
  );
};

export default App;
