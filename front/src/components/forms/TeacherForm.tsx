"use client";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import SubmitButton from "../buttons/SubmitButton";


const TeacherForm = ({ onSubmit, isLoading }: { 
  onSubmit: (data: any) => void, 
  isLoading: boolean 
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Ajouter un Enseignant
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          label="ID Enseignant"
          id="teacherId"
          register={register("teacherId", { 
            required: true,
            pattern: /^[A-Z]{3}-[0-9]{4}$/
          })}
          error={errors.teacherId}
          errorMessage="Format ID invalide (ex: ENS-1234)"
        />

        <FormInput
          label="Spécialité"
          id="specialty"
          register={register("specialty", { required: true })}
          error={errors.specialty}
        />
      </div>

      <SubmitButton loading={isLoading} />
    </form>
  );
};

export default TeacherForm;