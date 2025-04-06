import { Profile, AddUser, Consulter, GestionList, Poster, PFE, ConsulterList,AddFile,Progress } from "@src/components/icons/Icons";
import { SideMenuItemProps } from "@src/types/sideMenu";


const sideList: Record<"etudiant" | "administrateur" | "enseignant", SideMenuItemProps[]> = {
  etudiant: [
      { title: "Profile", icon: Profile, href: "/etudiant",active: false  },
      { title: "Suivi d'Avancement", icon: Progress, href: "/etudiant/etu_avan",active: false  },
      { title: "Add Documents", icon: AddFile, href: "/etudiant/etu_upload",active: false  },
      { title: "Meilleurs posters", icon: Poster, href: "/meilleur-poster",active: false  },
  ],
  administrateur: [
    { title: "Ajouter un utilisateur", icon: AddUser, href: "/administrateur/ajouter-utilisateur",active: false },
    { title: "Consulter etudiants", icon: Consulter, href: "/administrateur/consulter-etudiant",active: false  },
    { title: "Consulter enseignants", icon: ConsulterList, href: "/administrateur/consulter-enseignant",active: false  },
    { title: "Gestion des Étudiants", icon: GestionList, href: "/administrateur/gestion-etudiant",active: false  },
    { title: "PFE", icon: PFE, href: "/administrateur/pfe",active: false  },
    { title: "Meilleurs posters", icon: Poster, href: "/meilleur-poster",active: false  },  
 
  ],
  enseignant: [
    { title: "Consulter etudiants", icon: Consulter, href: "/enseignant/consulter-etudiant",active: false  },
    { title: "Meilleurs posters", icon: Poster, href: "/meilleur-poster",active: false  },  
  ],
};

export { sideList };

