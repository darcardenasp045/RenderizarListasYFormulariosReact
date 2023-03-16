import "./styles.css";

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
  const Note = ({ id, date, object }) => {
    return (
      <div>
        <p>
          {" "}
          {id}
          {date}
        </p>
        <p>
          {object.hola}
          {object.idd}
        </p>
      </div>
    );
  };
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
