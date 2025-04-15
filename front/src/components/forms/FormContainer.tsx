"use client";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import StudentForm from "./StudentForm";
import TeacherForm from "./TeacherForm";
import { SwitchContext } from "@src/contexts/SwitchContext"; // À importer depuis un contexte partagé

const FormContainer = () => {
  const { isStudent } = useContext(SwitchContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: unknown) => {
    setIsLoading(true);
    try {
      // Simulation de requête API
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Données soumises:", data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6"
    >
      {isStudent ? (
        <StudentForm onSubmit={handleSubmit} isLoading={isLoading} />
      ) : (
        <TeacherForm onSubmit={handleSubmit} isLoading={isLoading} />
      )}
    </motion.div>
  );
};

export default FormContainer;