"use client";
import { motion } from "framer-motion";

const FormSelect = ({ label, id, options, register, error }: any) => (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-1"
    >
      <label htmlFor={id} className="text-gray-700 font-medium">
        {label}
      </label>
      <select
        id={id}
        {...register}
        className={`w-full p-3 border rounded-lg focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
        }`}
      >
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">Sélection obligatoire</p>}
    </motion.div>
  );

  export default FormSelect;
  