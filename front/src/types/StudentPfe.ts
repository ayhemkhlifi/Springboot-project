export type StudentPfe = {
    id: number;
    name: string;
    groupe: string;
    departement : "mecatronique" | "informatique" | "industrielle" | "infotronique";
    cin: string;
    hasSentence: boolean;
    sentenceLanguage: string;
    profs: string[];
    note:number;
  };
  