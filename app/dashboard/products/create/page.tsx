"use client";

import React from "react";
import { ProductForm } from "@/src/modules/dashboard/products/components/ProductForm";
import { motion } from "framer-motion";

export default function CreateProductPage() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ProductForm />
      </motion.div>
    </div>
  );
}
