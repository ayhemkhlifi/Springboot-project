"use client";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import SubmitButton from "../buttons/SubmitButton";
import { useForm } from "react-hook-form";

const StudentForm = ({ onSubmit, isLoading }: { 
    onSubmit: (data: any) => void, 
    isLoading: boolean 
  }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Ajouter un Étudiant
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Nom complet"
            id="fullName"
            register={register("fullName", { required: true })}
            error={errors.fullName}
          />
  
          <FormInput
            label="CIN"
            id="cin"
            register={register("cin", { 
              required: true,
              pattern: /^[0-9]{8}$/
            })}
            error={errors.cin}
            errorMessage="CIN invalide (8 chiffres requis)"
          />
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormSelect
            label="Niveau"
            id="level"
            options={[
              { value: "1", label: "1ère année" },
              { value: "2", label: "2ème année" },
              { value: "3", label: "3ème année" }
            ]}
            register={register("level", { required: true })}
            error={errors.level}
          />
  
          <FormSelect
            label="Département"
            id="department"
            options={[
              { value: "info", label: "Informatique" },
              { value: "meca", label: "Mécatronique" },
              { value: "infoT", label: "Infotronique" }
            ]}
            register={register("department", { required: true })}
            error={errors.department}
          />
  
          <FormSelect
            label="Groupe"
            id="groupe"
            options={[
              { value: "A", label: "Groupe A" },
              { value: "B", label: "Groupe B" },
              { value: "C", label: "Groupe C" },
              { value: "D", label: "Groupe D" },
              { value: "E", label: "Groupe E" }
            ]}
            register={register("groupe", { required: true })}
            error={errors.groupe}
          />
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Date de naissance"
            id="birthDate"
            type="date"
            register={register("birthDate", { 
              required: true,
              validate: value => {
                const date = new Date(value);
                return date < new Date() || "Date invalide";
              }
            })}
            error={errors.birthDate}
            errorMessage="Date de naissance requise"
          />
  
          <FormInput
            label="ID Étudiant"
            id="studentId"
            register={register("studentId", { 
              required: true,
              pattern: /^[A-Z0-9]{8}$/
            })}
            error={errors.studentId}
            errorMessage="ID invalide (8 caractères alphanumériques)"
          />
        </div>
  
        <SubmitButton loading={isLoading} />
      </form>
    );
  };

  export default StudentForm;
  