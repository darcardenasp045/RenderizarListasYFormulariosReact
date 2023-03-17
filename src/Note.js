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

export default Note;
