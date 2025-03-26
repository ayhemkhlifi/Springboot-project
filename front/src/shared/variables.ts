type UserRole = "student" | "administration" | "prof";

const whoami: UserRole = 
  typeof window !== "undefined" 
    ? (localStorage.getItem("whoami") as UserRole) || "student"
    : "student"; 

export { whoami };
