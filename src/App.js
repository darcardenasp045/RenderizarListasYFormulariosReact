import "./styles.css";
import Note from "./Note.js";

const notas = [
  {
    id: 25,
    date: 20,
    object: {
      hola: "hyyy",
      idd: 25
    }
  }
];

export default function App() {
  if (typeof notas === undefined || notas === null) {
    return "no hay notas";
  }

  return (
    <div className="App">
      {notas.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            date={note.date}
            object={note.object}
          />
        );
      })}
    </div>
  );
}
