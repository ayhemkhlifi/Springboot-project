export type StudentPfe = {
    id: number;
    name: string;
    groupe: string;
    niveau:string;
    departement : "mécatronique" | "informatique" | "industrielle" | "infotronique";
    cin: string;
    hasSentence: boolean;
    sentenceLanguage: string;
    pfeDate: string;
    profs: string[];
    note:number;
    stage:"Oui" | "Non" | "En cours";
   
  };
  