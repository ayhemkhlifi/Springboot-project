import { Profile, AddUser, Consulter, GestionList, Poster } from "@src/components/icons/Icons";
import { SideMenuItemProps } from "@src/types/sideMenu";

const sideList: Record<"student" | "administration" | "prof", SideMenuItemProps[]> = {
  student: [
    { title: "Profile", icon: Profile, href: "etudiant/profile" },
  ],
  administration: [
    { title: "Ajouter un utilisateur", icon: AddUser, href: "/administrateur/ajouter-utilisateur" },
    { title: "Consulter etudiants", icon: Consulter, href: "/administrateur/consulter-etudiant" },
    { title: "Gestion des Étudiants", icon: GestionList, href: "/administrateur/gestion-etudiant" },
    { title: "Meilleurs posters", icon: Poster, href: "/administrateur/meilleur-poster" },  
  ],
  prof: [{ title: "Consulter utilisateurs", icon: AddUser, href: "administrateur/consulter-utilisateur" },], 
};

export { sideList };
