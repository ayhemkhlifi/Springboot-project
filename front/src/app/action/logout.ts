import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const handleLogout = (router: ReturnType<typeof useRouter>) => {
  deleteCookie("token"); 
  router.push("/sign-in"); 
};

export default handleLogout;
