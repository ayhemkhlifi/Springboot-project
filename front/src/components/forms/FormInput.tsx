"use client";
import { motion } from "framer-motion";

const FormInput = ({ label, id, type = "text", register, error, errorMessage }: any) => (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-1"
    >
      <label htmlFor={id} className="text-gray-700 font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register}
        className={`w-full p-3 border rounded-lg focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
        }`}
        max={type === "date" ? new Date().toISOString().split('T')[0] : undefined}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">
          {errorMessage || "Ce champ est obligatoire"}
        </p>
      )}
    </motion.div>
  );
  
  export default FormInput;