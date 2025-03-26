import { Profile,AddUser } from "@src/components/icons/Icons"
import { SideMenuItemProps } from "@src/types/sideMenu";

const sideList: Record<string, SideMenuItemProps[]> = {
    student: [
      { title: "Profile", icon: Profile, href: "etudiant/profile" },
    ],
    administration: [
      { title: "Ajouter un utilisateur", icon: AddUser, href: "administrateur/ajouter-utilisateur" },
    ],
  };
  
  export { sideList };