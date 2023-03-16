import "./styles.css";

const notas = [
  {
    id: 25,
    date: 20
  }
];

export default function App() {
  if (typeof notas === undefined || notas === null) {
    return "no hay notas";
  }
  const Note = ({ note }) => {
    return (
      <p>
        {" "}
        {note.id}
        {note.date}
      </p>
    );
  };
  return (
    <div className="App">
      {notas.map((note) => {
        return <Note note={note} />;
      })}
    </div>
  );
}
