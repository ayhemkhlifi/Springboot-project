"use client";
import { useMemo, useState, memo } from "react";
import { Calendar, User } from "react-feather";

interface PFEStudent {
  name: string;
  date: string;
}

interface Enseignant {
  nom: string;
  prenom: string;
  cin: string;
  premiere: string;
  datePremiere: string;
  deuxieme: string;
  dateDeuxieme: string;
  pfe: PFEStudent[];
}

const PfeEtudiant = memo(({ list }: { list: PFEStudent[] }) => (
  <div className="max-w-xs mx-auto space-y-2">
    {list.length > 0 ? (
      list.map((student, i) => (
        <div key={i} className="flex items-center justify-between bg-gray-100 p-2 rounded-lg shadow-sm">
          <span className="flex items-center gap-2 text-sm text-gray-700">
            <User className="w-4 h-4 text-blue-500" aria-label="User icon" />
            {student.name}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <Calendar className="w-3 h-3" aria-label="Calendar icon" />
            {new Date(student.date).toLocaleDateString()}
          </span>
        </div>
      ))
    ) : (
      <div className="text-center text-gray-400 text-sm italic">Aucun étudiant</div>
    )}
  </div>
));

const SessionCell = ({ salle, date }: { salle: string; date: string }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="relative">
      <input
        type="text"
        aria-label="Salle"
        className="w-24 text-center border border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-blue-300 shadow-sm"
        defaultValue={salle || ""}
        placeholder="Salle"
      />
       
        <span className="absolute -right-7 top-1/2 -translate-y-1/2 text-gray-400 text-xs whitespace-nowrap">
          {new Date(date).toLocaleDateString()}
        </span>
      
    </div>
    
  </div>
);

const TableRow = memo(({ prof }: { prof: Enseignant }) => (
  <tr className="border-b hover:bg-gray-50 transition-colors">
    <td className="p-3 font-medium text-gray-800">{prof.nom} {prof.prenom}</td>
    <td className="p-3 text-gray-600">{prof.cin}</td>
    <td className="p-3"><SessionCell salle={prof.premiere} date={prof.datePremiere} /></td>
    <td className="p-3"><SessionCell salle={prof.deuxieme} date={prof.dateDeuxieme} /></td>
    <td className="p-3"><PfeEtudiant list={prof.pfe} /></td>
  </tr>
));

const initialProfs: Enseignant[] = [
  {
    nom: "Dupont",
    prenom: "Jean",
    cin: "12345678",
    premiere: "LC21",
    datePremiere: "2024-03-15",
    deuxieme: "",
    dateDeuxieme: "",
    pfe: [
      { name: "Étudiant 1", date: "2024-03-10" },
      { name: "Étudiant 2", date: "2024-03-12" },
    ],
  },
  {
    nom: "Martin",
    prenom: "Sophie",
    cin: "87654321",
    premiere: "",
    datePremiere: "",
    deuxieme: "LC22",
    dateDeuxieme: "2024-03-20",
    pfe: [],
  },
  {
    nom: "Bernard",
    prenom: "Luc",
    cin: "56781234",
    premiere: "LC23",
    datePremiere: "2024-03-25",
    deuxieme: "LC24",
    dateDeuxieme: "2024-04-01",
    pfe: [{ name: "Étudiant 3", date: "2024-03-28" }],
  },
];

export default function Page() {
  const [search, setSearch] = useState("");
  const [enseignants] = useState(initialProfs);

  const filteredProfs = useMemo(
    () =>
      enseignants.filter((prof) =>
        `${prof.nom} ${prof.prenom}`.toLowerCase().includes(search.toLowerCase())
      ),
    [search, enseignants]
  );

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 sticky top-4 z-10">
        <input
          type="text"
          placeholder="🔍 Rechercher un enseignant..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 text-gray-700 shadow-sm"
          aria-label="Recherche"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 border-b text-left">
              {["Enseignant", "CIN", "1ère Session", "2ème Session", "Encadrements PFE"].map((header) => (
                <th key={header} className="p-3 font-semibold text-gray-700">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredProfs.map((prof) => (
              <TableRow key={prof.cin} prof={prof} />
            ))}
          </tbody>
        </table>

        {filteredProfs.length === 0 && (
          <div className="p-6 text-center text-gray-400">Aucun résultat trouvé</div>
        )}
      </div>
    </div>
  );
}
