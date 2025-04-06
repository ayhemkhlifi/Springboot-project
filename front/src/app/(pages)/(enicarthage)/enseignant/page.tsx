import CustomImage from '@src/components/customImages/CustomImage';
import logo_encd from "@public/imgs/mentor.png"

export default function EncadrantPage() {
    // Sample student data
    const students = [
      { id: 1, cin: "12345678", name: "Alice Doe" },
      { id: 2, cin: "87654321", name: "Bob Smith" },
    ];
  
    return (
        <div className='text-white h-full overflow-hidden flex-center flex-col gap-4'>
        <h1 className='text-blue-400 text-6xl text-center'>Bienvenue sur la page de l'Enseignant</h1>
        <CustomImage src={logo_encd} alt='adm' className='w-auto h-[80%] rounded-md' />
      </div>
    );
  }
  