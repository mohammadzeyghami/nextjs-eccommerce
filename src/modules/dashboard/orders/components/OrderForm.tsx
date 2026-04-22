"use client";

import * as React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslation } from "react-i18next";
import { 
  User, 
  MapPin, 
  CreditCard, 
  Wallet, 
  Landmark, 
  ChevronLeft,
  ShoppingBag,
  Info
} from "lucide-react";
import { Button } from "@/src/share-components/atoms/button";
import { Typography } from "@/src/share-components/atoms/typography";
import { ControllerInput } from "@/src/share-components/molecules/inputs/controller-input";
import { ControllerTextarea } from "@/src/share-components/molecules/inputs/controller-textarea";
import { toast } from "@/src/share-components/molecules/sonner";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const orderSchema = z.object({
  fullName: z.string().min(1, { message: "order_form.errors.full_name_required" }),
  phone: z.string().min(1, { message: "order_form.errors.phone_required" }),
  provinceCity: z.string().min(1, { message: "order_form.errors.province_city_required" }),
  address: z.string().min(1, { message: "order_form.errors.address_required" }),
  zipCode: z.string().length(10, { message: "order_form.errors.zip_code_invalid" }),
  note: z.string().optional(),
  paymentMethod: z.enum(["mellat", "wallet"]),
});

type OrderValues = z.infer<typeof orderSchema>;

interface OrderFormProps {
  onSuccess?: () => void;
}

export const OrderForm: React.FC<OrderFormProps> = ({ onSuccess }) => {
  const { t } = useTranslation();

  const methods = useForm<OrderValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      provinceCity: "",
      address: "",
      zipCode: "",
      note: "",
      paymentMethod: "mellat",
    },
  });

  const onSubmit = async (data: OrderValues) => {
    console.log("Submitting order:", data);
    toast.success(t("order_form.success"));
    onSuccess?.();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Step 1: Customer Info */}
            <motion.section
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl border border-primary/20 dark:border-primary/10 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">۱</div>
                <Typography variant="h3" weight="black" className="text-xl">
                  {t("order_form.customer_info")}
                </Typography>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ControllerInput<OrderValues>
                  name="fullName"
                  label={t("order_form.full_name")}
                  placeholder={t("order_form.full_name_placeholder")}
                />
                <ControllerInput<OrderValues>
                  name="phone"
                  label={t("order_form.phone")}
                  placeholder={t("order_form.phone_placeholder")}
                  className="text-left"
                />
              </div>
            </motion.section>

            {/* Step 2: Shipping Address */}
            <motion.section
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-8 rounded-2xl border border-primary/20 dark:border-primary/10 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">۲</div>
                <Typography variant="h3" weight="black" className="text-xl">
                  {t("order_form.shipping_info")}
                </Typography>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <ControllerInput<OrderValues>
                  name="provinceCity"
                  label={t("order_form.province_city")}
                  placeholder={t("order_form.province_city_placeholder")}
                />
                <div className="md:col-span-2">
                  <ControllerInput<OrderValues>
                    name="address"
                    label={t("order_form.address")}
                    placeholder={t("order_form.address_placeholder")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ControllerInput<OrderValues>
                  name="zipCode"
                  label={t("order_form.zip_code")}
                  placeholder={t("order_form.zip_code_placeholder")}
                  className="text-left"
                />
                <ControllerInput<OrderValues>
                  name="note"
                  label={t("order_form.note")}
                  placeholder={t("order_form.note_placeholder")}
                />
              </div>
            </motion.section>

            {/* Step 3: Payment Method */}
            <motion.section
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl border border-primary/20 dark:border-primary/10 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black">۳</div>
                <Typography variant="h3" weight="black" className="text-xl">
                  {t("order_form.payment_method")}
                </Typography>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label 
                  className={cn(
                    "relative flex items-center p-6 rounded-xl cursor-pointer border-2 transition-all duration-300",
                    methods.watch("paymentMethod") === "mellat" 
                      ? "bg-primary/5 border-primary/40 shadow-sm" 
                      : "bg-muted/20 border-transparent hover:bg-muted/30"
                  )}
                >
                  <input 
                    type="radio" 
                    {...methods.register("paymentMethod")} 
                    value="mellat" 
                    className="hidden" 
                  />
                  <Landmark className="text-primary size-6 ml-4" />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">{t("order_form.payment_mellat")}</span>
                    <span className="text-[10px] text-muted-foreground">{t("order_form.payment_mellat_desc")}</span>
                  </div>
                </label>

                <label 
                  className={cn(
                    "relative flex items-center p-6 rounded-xl cursor-pointer border-2 transition-all duration-300",
                    methods.watch("paymentMethod") === "wallet" 
                      ? "bg-primary/5 border-primary/40 shadow-sm" 
                      : "bg-muted/20 border-transparent hover:bg-muted/30"
                  )}
                >
                  <input 
                    type="radio" 
                    {...methods.register("paymentMethod")} 
                    value="wallet" 
                    className="hidden" 
                  />
                  <Wallet className="text-primary size-6 ml-4" />
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">{t("order_form.payment_wallet")}</span>
                    <span className="text-[10px] text-muted-foreground">{t("order_form.payment_wallet_desc")}</span>
                  </div>
                </label>
              </div>
            </motion.section>
          </div>

          {/* Sidebar: Order Summary */}
          <aside className="lg:col-span-4 lg:sticky lg:top-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card p-6 rounded-2xl border border-primary/20 dark:border-primary/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <Typography variant="h3" weight="black" className="text-lg mb-6 flex items-center gap-3">
                <ShoppingBag className="size-5 text-primary" />
                {t("order_form.summary")}
              </Typography>

              <div className="space-y-4 mb-6">
                <div className="flex gap-4 p-3 bg-muted/10 rounded-xl border border-border/50">
                  <div className="w-16 h-16 rounded-lg bg-muted/20 flex-shrink-0" />
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-bold block mb-1">{t("order_form.item_vase", "Minimal Glass Vase")}</span>
                    <span className="text-[10px] text-muted-foreground">{t("order_form.item_vase_desc", "1 unit • Misty Blue")}</span>
                    <span className="text-xs font-black text-primary mt-1">۱,۲۰۰,۰۰۰ {t("order_form.toman")}</span>
                  </div>
                </div>
                <div className="flex gap-4 p-3 bg-muted/10 rounded-xl border border-border/50">
                  <div className="w-16 h-16 rounded-lg bg-muted/20 flex-shrink-0" />
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-bold block mb-1">{t("order_form.item_notebook", "Leather Notebook")}</span>
                    <span className="text-[10px] text-muted-foreground">{t("order_form.item_notebook_desc", "2 units • Dark Brown")}</span>
                    <span className="text-xs font-black text-primary mt-1">۴۵۰,۰۰۰ {t("order_form.toman")}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 py-4 border-t border-border/50 mb-6">
                <div className="flex justify-between text-[11px]">
                  <span className="text-muted-foreground">{t("order_form.subtotal")}</span>
                  <span className="font-bold">۱,۶۵۰,۰۰۰ {t("order_form.toman")}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-muted-foreground">{t("order_form.shipping_cost")}</span>
                  <span className="font-bold">۴۵,۰۰۰ {t("order_form.toman")}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-muted-foreground">{t("order_form.tax")}</span>
                  <span className="font-bold">۰ {t("order_form.toman")}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8 bg-primary/5 p-4 rounded-xl border border-primary/10">
                <span className="text-sm font-bold">{t("order_form.payable_amount")}</span>
                <span className="text-lg font-black text-primary">۱,۶۹۵,۰۰۰ {t("order_form.toman")}</span>
              </div>

              <Button
                type="submit"
                className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-primary-container text-white font-bold text-base shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                {t("order_form.submit_order")}
                <ChevronLeft className="mr-2 size-5" />
              </Button>

              <div className="mt-6 flex items-start gap-2 p-3 bg-muted/5 rounded-lg">
                <Info className="size-4 text-muted-foreground shrink-0 mt-0.5" />
                <p className="text-[9px] text-muted-foreground leading-relaxed">
                  {t("order_form.terms_hint")}
                </p>
              </div>
            </motion.div>
          </aside>
        </div>
      </form>
    </FormProvider>
  );
};
