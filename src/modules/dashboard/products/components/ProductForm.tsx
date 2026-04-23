"use client";

import * as React from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { 
  Plus, 
  Trash2, 
  X, 
  Eye, 
  Save, 
  Image as ImageIcon, 
  Tag as TagIcon,
  Package,
  DollarSign
} from "lucide-react";
import { Button } from "@/src/share-components/atoms/button";
import { Typography } from "@/src/share-components/atoms/typography";
import { ControllerInput } from "@/src/share-components/molecules/inputs/controller-input";
import { ControllerSelect } from "@/src/share-components/molecules/inputs/controller-select";
import { ControllerTextarea } from "@/src/share-components/molecules/inputs/controller-textarea";
import { toast } from "@/src/share-components/molecules/sonner";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Schema defined with translation keys as error messages
const productSchema = yup.object({
  name: yup.string().required("product_form.errors.name_required"),
  category: yup.string().required("product_form.errors.category_required"),
  stock: yup.number().required("product_form.errors.stock_required").min(0),
  description: yup.string().required(),
  price: yup.number().required("product_form.errors.price_required").min(0),
  features: yup.array().of(
    yup.object({
      title: yup.string().required(),
      value: yup.string().required(),
    })
  ).default([]),
  images: yup.array().of(yup.string()).default([]),
});

type ProductValues = yup.InferType<typeof productSchema>;

export const ProductForm: React.FC = () => {
  const { t } = useTranslation();
  
  const methods = useForm<ProductValues>({
    resolver: yupResolver(productSchema) as any,
    defaultValues: {
      name: "",
      category: "",
      stock: 0,
      description: "",
      price: 4500000,
      features: [
        { title: "رنگ", value: "نقره‌ای" },
        { title: "جنس", value: "چرم طبیعی" }
      ],
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCSjTYlnLsMAiAvjbiXe8odNu3qSboxpFepZDpFfy1EZ6bq9W-m6ZMZ63dLkYyWOxXt5Irvgf_SE0rV8Ms7ZjMigA082zMNHTdBudNn-A-yiTx1A2YzFBdt3yKqVjFGQu8v7h6iC1rql5Me0KS7MZA-eR5nWFpLbknISRgQKUedXZxoQ_h3gY4eu-d1LS4JLICFJ40dqtdAj7ZH_h2B-a10gw6Nl-FVal3y_qunOpg0XCIXYzyrBAFqtAxn6UebNHZ_F4TYbpNCfX4"
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "features",
  });

  const [featureTitle, setFeatureTitle] = React.useState("");
  const [featureValue, setFeatureValue] = React.useState("");

  const addFeature = () => {
    if (featureTitle && featureValue) {
      append({ title: featureTitle, value: featureValue });
      setFeatureTitle("");
      setFeatureValue("");
    }
  };

  const onSubmit = async (data: ProductValues) => {
    console.log("Submitting product:", data);
    toast.success(t("product_form.success"));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-10">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: Math.random() * 0.5 }}
          >
            <Typography variant="h1" weight="black" className="text-foreground tracking-tighter">
              {t("product_form.title")}
            </Typography>
            <Typography variant="large" className="text-muted-foreground mt-2">
              {t("admin.products_management.create_subtitle")}
            </Typography>
          </motion.div>
          
          <motion.nav 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: Math.random() * 0.5 }}
            className="flex gap-2 text-sm font-medium"
          >
            <span className="text-muted-foreground">{t("admin.nav.products")}</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-primary font-bold">{t("product_form.title")}</span>
          </motion.nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Form Area */}
          <div className="lg:col-span-8 space-y-8">
            {/* Basic Info Section */}
            <motion.section
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card rounded-3xl p-8 shadow-sm border border-border/50"
            >
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="w-2.5 h-7 bg-primary rounded-full"></span>
                {t("product_form.basic_info")}
              </h3>

              <div className="space-y-8">
                <ControllerInput<ProductValues>
                  name="name"
                  label={t("product_form.name")}
                  placeholder={t("product_form.name_placeholder")}
                  className="[&_input]:h-14 [&_input]:rounded-2xl [&_input]:bg-muted/30 [&_input]:border-none [&_input]:px-6"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ControllerSelect<ProductValues>
                    name="category"
                    label={t("product_form.category")}
                    options={[
                      { label: t("admin.products_management.category_fashion", "Fashion"), value: "fashion" },
                      { label: t("admin.products_management.category_digital", "Digital"), value: "digital" },
                      { label: t("admin.products_management.category_home", "Home"), value: "home" },
                    ]}
                    className="[&_button]:h-14 [&_button]:rounded-2xl [&_button]:bg-muted/30 [&_button]:border-none [&_button]:px-6"
                  />
                  <ControllerInput<ProductValues>
                    name="stock"
                    type="number"
                    label={t("product_form.stock")}
                    placeholder={t("product_form.stock_placeholder")}
                    className="[&_input]:h-14 [&_input]:rounded-2xl [&_input]:bg-muted/30 [&_input]:border-none [&_input]:px-6"
                  />
                </div>

                <ControllerTextarea<ProductValues>
                  name="description"
                  label={t("product_form.description")}
                  placeholder={t("product_form.description_placeholder")}
                  rows={5}
                  className="[&_textarea]:rounded-2xl [&_textarea]:bg-muted/30 [&_textarea]:border-none [&_textarea]:p-6 [&_textarea]:resize-none"
                />
              </div>
            </motion.section>

            {/* Features Section */}
            <motion.section
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-3xl p-8 shadow-sm border border-border/50"
            >
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="w-2.5 h-7 bg-primary rounded-full"></span>
                {t("product_form.features")}
              </h3>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 items-end">
                  <div className="flex-1 space-y-2 w-full">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground mr-1">{t("product_form.feature_title")}</label>
                    <input 
                      value={featureTitle}
                      onChange={(e) => setFeatureTitle(e.target.value)}
                      className="w-full h-12 bg-muted/30 border-none rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-primary/20" 
                      placeholder={t("product_form.feature_title_placeholder")}
                    />
                  </div>
                  <div className="flex-1 space-y-2 w-full">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground mr-1">{t("product_form.feature_value")}</label>
                    <input 
                      value={featureValue}
                      onChange={(e) => setFeatureValue(e.target.value)}
                      className="w-full h-12 bg-muted/30 border-none rounded-xl px-4 text-sm font-medium focus:ring-2 focus:ring-primary/20" 
                      placeholder={t("product_form.feature_value_placeholder")}
                    />
                  </div>
                  <Button 
                    type="button"
                    onClick={addFeature}
                    className="bg-primary/10 text-primary h-12 w-full md:w-12 rounded-xl hover:bg-primary hover:text-white transition-all shadow-none"
                  >
                    <Plus className="size-5" />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  <AnimatePresence>
                    {fields.map((field, index) => (
                      <motion.div
                        key={field.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-primary/5 text-primary px-4 py-2.5 rounded-2xl text-sm flex items-center gap-3 font-bold border border-primary/10 group"
                      >
                        <span className="opacity-60">{field.title}:</span>
                        <span>{field.value}</span>
                        <button 
                          type="button"
                          onClick={() => remove(index)}
                          className="hover:text-destructive transition-colors"
                        >
                          <X className="size-4" />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-8">
            {/* Price Card */}
            <motion.section
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-primary rounded-[2.5rem] p-10 text-white shadow-2xl shadow-primary/30 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/20 transition-all duration-700"></div>
              
              <label className="block text-xs font-black uppercase tracking-[0.2em] opacity-70 mb-6">{t("product_form.price")}</label>
              <div className="relative">
                <ControllerInput<ProductValues>
                  name="price"
                  type="number"
                  className="[&_input]:h-20 [&_input]:bg-white/10 [&_input]:border-none [&_input]:rounded-3xl [&_input]:text-4xl [&_input]:font-black [&_input]:text-center [&_input]:text-white [&_input]:focus:ring-white/20 [&_input]:p-0"
                />
                <div className="text-center mt-4 text-xs font-bold opacity-60 tracking-tight">
                  {t("product_form.price_hint")}
                </div>
              </div>
            </motion.section>

            {/* Image Gallery */}
            <motion.section
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card rounded-3xl p-8 shadow-sm border border-border/50"
            >
              <h3 className="text-lg font-black uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-3">
                <ImageIcon className="size-5" />
                {t("product_form.upload_images")}
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {methods.watch("images")?.map((img, idx) => (
                  <div key={idx} className="relative group aspect-square rounded-2xl overflow-hidden bg-muted/20 border border-border/50">
                    <img src={img} alt="Product" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-[2px]">
                      <Button variant="ghost" className="text-white hover:text-destructive hover:bg-transparent">
                        <Trash2 className="size-6" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div className="border-2 border-dashed border-border/60 rounded-2xl flex flex-col items-center justify-center p-6 hover:bg-muted/30 hover:border-primary/40 cursor-pointer transition-all group aspect-square">
                  <Plus className="size-8 text-primary/40 group-hover:text-primary group-hover:scale-110 transition-all mb-3" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground text-center">
                    {t("product_form.add_photo")}
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground text-center font-bold tracking-tight">
                {t("product_form.upload_hint")}
              </p>
            </motion.section>

            {/* Quick Status Info */}
            <motion.section
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-muted/20 rounded-3xl p-6 border-r-4 border-emerald-500 shadow-sm"
            >
              <div className="flex items-center gap-4 text-emerald-600">
                <div className="p-2 bg-emerald-500/10 rounded-xl">
                  <Eye className="size-5" />
                </div>
                <span className="text-sm font-black uppercase tracking-widest">
                  {t("product_form.preview_active")}
                </span>
              </div>
            </motion.section>
            
            {/* Delete Option (Subtle) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <button className="w-full flex items-center justify-center gap-3 text-destructive/60 hover:text-destructive font-black uppercase tracking-widest text-[10px] p-6 rounded-2xl bg-destructive/5 hover:bg-destructive/10 transition-all">
                <Trash2 className="size-4" />
                {t("product_form.delete_product")}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Action Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-card/50 backdrop-blur-xl rounded-[2rem] p-6 flex flex-col md:flex-row items-center justify-end gap-4 border border-border/50 sticky bottom-8 z-20 shadow-2xl shadow-black/5"
        >
          <Button 
            variant="ghost" 
            className="w-full md:w-auto h-16 px-12 text-muted-foreground font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-muted/50"
          >
            <Link href="/dashboard/products">
              {t("product_form.cancel")}
            </Link>
          </Button>
          <Button 
            type="submit"
            className="w-full md:w-auto h-16 px-16 bg-gradient-to-r from-primary to-primary-container text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-4 whitespace-nowrap"
          >
            <Save className="size-5" />
            {t("product_form.save")}
          </Button>
        </motion.div>
      </form>
    </FormProvider>
  );
};
