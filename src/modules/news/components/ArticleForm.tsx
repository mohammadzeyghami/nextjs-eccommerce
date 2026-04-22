"use client";

import * as React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslation } from "react-i18next";
import {
  Image as ImageIcon,
  Tag as TagIcon,
  Search as SearchIcon,
  Plus,
  Save,
  Send,
  Calendar as CalendarIcon,
} from "lucide-react";
import { Button } from "@/src/share-components/atoms/button";
import { Typography } from "@/src/share-components/atoms/typography";
import { ControllerInput } from "@/src/share-components/molecules/inputs/controller-input";
import { ControllerSelect } from "@/src/share-components/molecules/inputs/controller-select";
import { ControllerTextarea } from "@/src/share-components/molecules/inputs/controller-textarea";
import { ControllerDatePicker } from "@/src/share-components/molecules/inputs/controller-date-picker";
import { ControllerMultiSelect } from "@/src/share-components/molecules/inputs/controller-multi-select";
import { toast } from "@/src/share-components/molecules/sonner";
import { motion } from "framer-motion";

// Schema defined with translation keys as error messages
const articleSchema = z.object({
  title: z.string().min(1, { message: "admin.news_management.article_form.errors.title_required" }),
  content: z.string().min(1, { message: "admin.news_management.article_form.errors.content_required" }),
  category: z.string().min(1, { message: "admin.news_management.article_form.errors.category_required" }),
  tags: z.array(z.string()).min(1, { message: "admin.news_management.article_form.errors.tags_required" }),
  visibility: z.string(),
  publishDate: z.date(),
  seoTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  featuredImage: z.string().optional(),
});

type ArticleValues = z.infer<typeof articleSchema>;

export const ArticleForm: React.FC = () => {
  const { t } = useTranslation();

  const methods = useForm<ArticleValues>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: "",
      content: "",
      category: "technology",
      tags: ["technology"],
      visibility: "public",
      publishDate: new Date(),
      seoTitle: "",
      metaDescription: "",
      featuredImage: "",
    },
  });

  const content = methods.watch("content") || "";
  const wordCount = React.useMemo(() => content.trim().split(/\s+/).filter(Boolean).length, [content]);
  const readingTime = React.useMemo(() => Math.ceil(wordCount / 200), [wordCount]);

  const onSubmit = async (data: ArticleValues) => {
    console.log("Submitting article:", data);
    toast.success(t("admin.news_management.article_form.publish_success"));
  };

  const handleSaveDraft = () => {
    toast.info(t("admin.news_management.article_form.draft_saved"));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: Math.random() * 0.5 }}
          >
            <Typography variant="h1" weight="black" className="text-primary">
              {t("admin.news_management.article_form.create_title")}
            </Typography>
            <Typography variant="large" className="text-muted-foreground mt-1">
              {t("admin.news_management.article_form.create_desc")}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: Math.random() * 0.5 }}
            className="flex gap-4"
          >
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="rounded-2xl h-12 px-8"
              onClick={handleSaveDraft}
            >
              <Save className="mr-2 size-4" />
              {t("admin.news_management.article_form.save_draft")}
            </Button>
            <Button
              type="submit"
              size="lg"
              className="rounded-2xl h-12 px-10 bg-gradient-to-r from-primary to-primary-container shadow-xl shadow-primary/20 text-white"
            >
              <Send className="mr-2 size-4" />
              {t("admin.news_management.article_form.publish")}
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card rounded-2xl p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/20 dark:border-primary/10"
            >
              <ControllerInput<ArticleValues>
                name="title"
                placeholder={t("admin.news_management.article_form.article_title_placeholder")}
                className="[&_input]:text-3xl [&_input]:font-black [&_input]:h-20 [&_input]:bg-transparent [&_input]:border-none [&_input]:focus:ring-0"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/20 dark:border-primary/10 overflow-hidden flex flex-col min-h-[600px]"
            >
              {/* Toolbar Placeholder */}
              <div className="bg-muted/20 px-6 py-4 flex items-center gap-4 border-b border-primary/10 overflow-x-auto no-scrollbar">
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="size-9 rounded-xl"><Plus className="size-4" /></Button>
                  <div className="w-px h-6 bg-border mx-1" />
                  <Button variant="ghost" size="icon" className="size-9 rounded-xl"><ImageIcon className="size-4" /></Button>
                </div>
                <Typography variant="small" weight="black" className="uppercase tracking-widest text-muted-foreground ml-auto">
                  {t("admin.news_management.article_form.rich_editor")}
                </Typography>
              </div>

              <div className="p-8 flex-grow">
                <ControllerTextarea<ArticleValues>
                  name="content"
                  placeholder={t("admin.news_management.article_form.content_placeholder")}
                  className="[&_textarea]:min-h-[500px] [&_textarea]:bg-transparent [&_textarea]:border-none [&_textarea]:focus:ring-0 [&_textarea]:text-lg [&_textarea]:leading-relaxed [&_textarea]:text-foreground/80 [&_textarea]:font-light"
                />
              </div>

              <div className="px-8 py-4 bg-muted/20 text-[10px] text-muted-foreground flex justify-between border-t border-border/50">
                <span className="font-bold">{t("admin.news_management.article_form.last_saved")}</span>
                <div className="flex gap-6 font-black uppercase tracking-widest">
                  <span>{t("admin.news_management.article_form.words")}: {wordCount}</span>
                  <span>{t("admin.news_management.article_form.reading_time")}: {readingTime} {t("admin.news_management.article_form.minutes_abbr")}</span>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card p-6 rounded-2xl shadow-sm border border-primary/20 dark:border-primary/10"
              >
                <ControllerDatePicker<ArticleValues>
                  name="publishDate"
                  label={t("admin.news_management.article_form.publish_date")}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-card p-6 rounded-2xl shadow-sm border border-primary/20 dark:border-primary/10"
              >
                <ControllerSelect<ArticleValues>
                  name="visibility"
                  label={t("admin.news_management.article_form.visibility")}
                  options={[
                    { label: t("admin.news_management.article_form.visibility_public"), value: "public" },
                    { label: t("admin.news_management.article_form.visibility_private"), value: "private" },
                  ]}
                />
              </motion.div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            {/* Featured Image */}
            <motion.section
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/20 dark:border-primary/10"
            >
              <Typography variant="small" weight="black" className="uppercase tracking-[0.2em] text-muted-foreground mb-6 flex items-center gap-3">
                <ImageIcon className="size-4" />
                {t("admin.news_management.article_form.featured_image")}
              </Typography>

              <div className="aspect-[4/3] bg-muted/20 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-border hover:border-primary/40 cursor-pointer transition-all group overflow-hidden relative">
                <div className="relative z-10 flex flex-col items-center text-center p-6">
                  <Plus className="size-10 text-primary/30 group-hover:scale-110 group-hover:text-primary/50 transition-all" />
                  <Typography variant="small" className="text-muted-foreground mt-4 font-bold">
                    {t("admin.news_management.article_form.upload_hint")}
                  </Typography>
                </div>
              </div>
            </motion.section>

            {/* Taxonomy */}
            <motion.section
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-card rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/20 dark:border-primary/10"
            >
              <Typography variant="small" weight="black" className="uppercase tracking-[0.2em] text-muted-foreground mb-8 flex items-center gap-3">
                <TagIcon className="size-4" />
                {t("admin.news_management.article_form.taxonomy")}
              </Typography>

              <div className="space-y-8">
                <ControllerSelect<ArticleValues>
                  name="category"
                  label={t("admin.news_management.article_form.category")}
                  options={[
                    { label: t("admin.news_management.article_form.cat_tech"), value: "technology" },
                    { label: t("admin.news_management.article_form.cat_culture"), value: "culture" },
                    { label: t("admin.news_management.article_form.cat_economics"), value: "economics" },
                    { label: t("admin.news_management.article_form.cat_history"), value: "history" },
                  ]}
                />

                <ControllerMultiSelect<ArticleValues>
                  name="tags"
                  label={t("admin.news_management.article_form.tags")}
                  placeholder={t("admin.news_management.article_form.tags_placeholder")}
                  options={[
                    { label: t("admin.news_management.article_form.tag_ai"), value: "ai" },
                    { label: t("admin.news_management.article_form.tag_future"), value: "future" },
                    { label: t("admin.news_management.article_form.tag_archive"), value: "archive" },
                    { label: t("admin.news_management.article_form.tag_philosophy"), value: "philosophy" },
                  ]}
                />
              </div>
            </motion.section>

            {/* SEO Settings */}
            <motion.section
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-card rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/20 dark:border-primary/10"
            >
              <Typography variant="small" weight="black" className="uppercase tracking-[0.2em] text-muted-foreground mb-8 flex items-center gap-3">
                <SearchIcon className="size-4" />
                {t("admin.news_management.article_form.seo_settings")}
              </Typography>

              <div className="space-y-6">
                <ControllerInput<ArticleValues>
                  name="seoTitle"
                  label={t("admin.news_management.article_form.seo_title")}
                />

                <ControllerTextarea<ArticleValues>
                  name="metaDescription"
                  label={t("admin.news_management.article_form.meta_desc")}
                  placeholder={t("admin.news_management.article_form.meta_desc_placeholder")}
                  rows={3}
                />

                <div className="p-5 bg-muted/20 rounded-2xl border border-border/30 space-y-2">
                  <div className="text-primary text-sm font-bold hover:underline cursor-pointer truncate">
                    {methods.watch("seoTitle") || t("admin.news_management.article_form.seo_preview_placeholder")}
                  </div>
                  <div className="text-emerald-600 text-[10px] font-black uppercase tracking-widest">
                    {t("admin.news_management.article_form.seo_preview_domain")}
                  </div>
                  <div className="text-muted-foreground text-[11px] font-medium line-clamp-2">
                    {methods.watch("metaDescription") || t("admin.news_management.article_form.google_preview_hint")}
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
