import { Profile, AddUser, Consulter, GestionList, Poster, PFE, ConsulterList } from "@src/components/icons/Icons";
import { SideMenuItemProps } from "@src/types/sideMenu";


const sideList: Record<"student" | "administration" | "prof" | "encadrant", SideMenuItemProps[]> = {
  student: [
      { title: "Profile", icon: Profile, href: "/etudiant" },
      { title: "Suivi d'Avancement", icon: Profile, href: "/etudiant/etu_avan" },
      { title: "Add Documents", icon: Profile, href: "/etudiant/etu_upload" },
      { title: "Meilleurs posters", icon: Poster, href: "/etudiant/meilleur-poster" },
  ],
  administration: [
    { title: "Ajouter un utilisateur", icon: AddUser, href: "/administrateur/ajouter-utilisateur" },
    { title: "Consulter etudiants", icon: Consulter, href: "/administrateur/consulter-etudiant" },
    { title: "Consulter professeurs", icon: ConsulterList, href: "/administrateur/consulter-professeur" },
    { title: "Gestion des Étudiants", icon: GestionList, href: "/administrateur/gestion-etudiant" },

    { title: "PFE", icon: PFE, href: "/administrateur/pfe" },
    { title: "Meilleurs posters", icon: Poster, href: "/administrateur/meilleur-poster" },  

    { title: "Meilleurs posters", icon: Poster, href: "/meilleurposter" },  
  ],
  prof: [{ title: "Consulter utilisateurs", icon: AddUser, href: "administrateur/consulter-utilisateur" },],
  encadrant: [
    { title: "Consulter etudiants", icon: Consulter, href: "/encadrant/consulter-etudiant" },
    { title: "Meilleurs posters", icon: Poster, href: "/meilleurposter" },  
  ],
};

export { sideList };

