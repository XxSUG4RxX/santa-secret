// Ce composant affiche la liste des assignments
// Il prend en props le tableau d'assignments
export function AssignmentDisplay({ assignments }) {
  return (
    <ul className="flex flex-col items-center gap-4">
      {assignments.map((assignment, index) => (
        <li className="flex space-x-2 font-bold px-4 py-2 items-center rounded-lg bg-orange justify-center w-fit" key={index}>
          <span>{assignment.giver}</span> offre <img className="w-12 pl-2" src="img/cado.svg" alt="" /> <p>à</p> {" "}
          <span>{assignment.receiver}</span>
        </li>
      ))}
    </ul>
  );
}
