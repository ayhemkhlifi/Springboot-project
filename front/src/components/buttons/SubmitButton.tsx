"use client";
import { motion } from "framer-motion";

const SubmitButton = ({ loading }: { loading: boolean }) => (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type="submit"
      disabled={loading}
      className={`w-full py-3 font-semibold text-white rounded-lg transition-colors ${
        loading 
          ? "bg-gray-400 cursor-not-allowed" 
          : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {loading ? "Envoi en cours..." : "Ajouter"}
    </motion.button>
  );
  export default SubmitButton