"use client";

import React from "react";
import { ArticleForm } from "@/src/modules/news/components/ArticleForm";
import { motion } from "framer-motion";

export default function CreateArticlePage() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ArticleForm />
      </motion.div>
    </div>
  );
}
