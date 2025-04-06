import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

const handleLogin = (role: string, router: ReturnType<typeof useRouter>) => {
    const token = "azertyunb541&!+nfbk/*vbf128"; 
    setCookie("token", token, { maxAge: 60 * 60 * 24, path: "/" }); 

    let page = "/";
    switch (role) {
        case "administrateur":
            page = "/administrateur";
            break;
        case "etudiant":
            page = "/etudiant";
            break;
        case "enseignant":
            page = "/enseignant";
            break;
    }
    
    router.push(page);
};

export default handleLogin;
