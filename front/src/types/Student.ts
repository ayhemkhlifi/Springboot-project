interface Student {
  id: number;
  name: string;
  niveau: "1ère" | "2ème" | "3ème";
  groupe: "A" | "B" | "C" | "D" | "E";
  departement : "mecatronique" | "informatique" | "industrielle" | "infotronique";
  note: number;
  stage: "Oui" | "Non";
}
export default Student;