interface Student {
  id: number;
  name: string;
  niveau: "1ère" | "2ème" | "3ème";
  groupe: "A" | "B" | "C" | "D" | "E";
  departement : "mécatronique" | "informatique" | "industrielle" | "infotronique";
  note: number;
  stage: "Oui" | "Non" | "En cours";
  soutenance?: "Oui" | "Non";
}
export default Student;