"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { OrderForm } from "@/src/modules/dashboard/orders/components/OrderForm";
import { AnimatedSections } from "@/src/share-components/molecules/animated-sections";
import { Typography } from "@/src/share-components/atoms/typography";
import { Button } from "@/src/share-components/atoms/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreateOrderPage() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <AnimatedSections className="space-y-10">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <Link href="/dashboard/orders" className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest">
            <ArrowRight className="size-3" />
            {t("admin.orders_management.title")}
          </Link>
          <ChevronRight className="size-3 opacity-20" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {t("order_form.title")}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <Typography variant="h1" weight="black" className="text-3xl tracking-tighter">
            {t("order_form.title")}
          </Typography>
          <Typography variant="small" className="text-muted-foreground">
            {t("admin.orders_management.create_subtitle", "Complete the details below to create a new order")}
          </Typography>
        </div>
      </div>

      <OrderForm onSuccess={() => router.push("/dashboard/orders")} />
    </AnimatedSections>
  );
}
