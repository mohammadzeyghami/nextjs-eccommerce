"use client";

import React from 'react';
import { useTranslation } from "react-i18next";
import { 
  TrendingUp, 
  Package, 
  Users, 
  CreditCard, 
  Plus, 
  ChevronLeft,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  XCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/src/share-components/atoms/card";
import { Button } from "@/src/share-components/atoms/button";
import { Badge } from "@/src/share-components/atoms/badge";
import { Progress } from "@/src/share-components/atoms/progress";
import { Separator } from "@/src/share-components/atoms/separator";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/src/share-components/atoms/table";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function AdminDashboard() {
  const { t } = useTranslation();

  const stats = [
    { 
      title: t('admin.dashboard.stats.total_sales'), 
      value: "۱۲۸,۴۵۰,۰۰۰", 
      unit: t('admin.dashboard.stats.currency'),
      trend: "+۱۲٪", 
      icon: CreditCard,
      color: "text-indigo-600",
      bg: "bg-indigo-500/10"
    },
    { 
      title: t('admin.dashboard.stats.active_orders'), 
      value: "۸۴", 
      unit: "",
      sub: t('admin.dashboard.stats.active_orders_sub'),
      icon: Package,
      color: "text-amber-600",
      bg: "bg-amber-500/10"
    },
    { 
      title: t('admin.dashboard.stats.new_users'), 
      value: "۱۵", 
      unit: "",
      sub: t('admin.dashboard.stats.new_users_sub'),
      icon: Users,
      color: "text-emerald-600",
      bg: "bg-emerald-500/10"
    },
  ];

  const recentOrders = [
    { id: "ORD-8924", client: "سارا عباسی", product: "عطر نیش لاوندر", date: "۱۴:۳۰ - ۲۴ مهر", status: "completed", amount: "۴,۲۰۰,۰۰۰" },
    { id: "ORD-8923", client: "محمد نوری", product: "ست مراقبت پوست", date: "۱۲:۱۵ - ۲۴ مهر", status: "processing", amount: "۱,۸۵۰,۰۰۰" },
    { id: "ORD-8922", client: "رضا احمدی", product: "شمع دست‌ساز صندل", date: "۱۰:۴۵ - ۲۴ مهر", status: "cancelled", amount: "۹۸۰,۰۰۰" },
    { id: "ORD-8921", client: "مریم کریمی", product: "ادکلن آریا سیگنچر", date: "۰۹:۲۰ - ۲۴ مهر", status: "completed", amount: "۵,۶۰۰,۰۰۰" },
  ];

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black text-foreground font-headline tracking-tighter">
            {t('admin.dashboard.title')}
          </h1>
          <p className="text-muted-foreground font-sans font-bold uppercase tracking-[0.2em] mt-2">
            {t('admin.dashboard.date_today')}
          </p>
        </div>
        <Button size="lg" className="rounded-2xl h-14 px-8 font-black text-md shadow-xl shadow-primary/20 gap-3 group">
          <Plus className="size-5 transition-transform group-hover:rotate-90" />
          {t('admin.dashboard.new_order')}
        </Button>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <Card key={i} className="rounded-[2rem] border-none shadow-xl bg-card overflow-hidden group">
            <CardContent className="p-8 flex flex-col gap-6">
               <div className="flex justify-between items-start">
                <div className={cn("p-4 rounded-2xl transition-all duration-500 group-hover:scale-110", stat.bg, stat.color)}>
                  <stat.icon className="size-8 stroke-[2.5px]" />
                </div>
                {stat.trend && (
                   <Badge className="bg-emerald-500/10 text-emerald-600 border-none font-black px-3 py-1 gap-1">
                    {stat.trend}
                    <TrendingUp className="size-3" />
                  </Badge>
                )}
                {stat.sub && (
                   <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">{stat.sub}</span>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground font-sans font-bold text-xs uppercase tracking-widest">{stat.title}</p>
                <h3 className="text-3xl font-black text-foreground flex items-baseline gap-2">
                  {stat.value}
                  {stat.unit && <span className="text-sm font-bold text-muted-foreground">{stat.unit}</span>}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Recent Orders Table */}
        <Card className="lg:col-span-2 rounded-[2.5rem] border-none shadow-xl bg-card overflow-hidden">
          <CardHeader className="p-8 pb-4 flex flex-row justify-between items-center bg-muted/20 dark:bg-muted/5">
            <div>
              <CardTitle className="text-2xl font-black text-foreground font-headline uppercase tracking-tight">
                {t('admin.dashboard.recent_orders')}
              </CardTitle>
            </div>
            <Button variant="link" className="font-black text-primary gap-2 p-0 h-auto uppercase tracking-tighter">
              {t('admin.dashboard.see_all')}
              <ChevronLeft className="size-4 rtl:rotate-0 rotate-180" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted/30 dark:bg-muted/10">
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="font-black h-14 text-muted-foreground uppercase text-xs tracking-widest px-8">{t('admin.dashboard.orders_table.client')}</TableHead>
                  <TableHead className="font-black text-muted-foreground uppercase text-xs tracking-widest">{t('admin.dashboard.orders_table.product')}</TableHead>
                  <TableHead className="font-black text-muted-foreground uppercase text-xs tracking-widest">{t('admin.dashboard.orders_table.status')}</TableHead>
                  <TableHead className="font-black text-muted-foreground uppercase text-xs tracking-widest text-left rtl:text-right px-8">{t('admin.dashboard.orders_table.amount')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id} className="border-border/50 hover:bg-muted/5 group transition-colors">
                    <TableCell className="py-6 px-8">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black text-xs">
                          {order.client.charAt(0)}
                        </div>
                        <div>
                          <p className="font-headline font-black text-foreground group-hover:text-primary transition-colors cursor-pointer">{order.client}</p>
                          <p className="text-[10px] text-muted-foreground font-sans font-bold uppercase tracking-widest">{order.id}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-sans font-medium text-muted-foreground">{order.product}</TableCell>
                    <TableCell>
                      <Badge 
                        variant="secondary"
                        className={cn(
                          "rounded-xl px-4 py-1.5 font-bold text-[10px] uppercase border-none",
                          order.status === 'completed' && "bg-emerald-500/10 text-emerald-600",
                          order.status === 'processing' && "bg-amber-500/10 text-amber-600",
                          order.status === 'cancelled' && "bg-destructive/10 text-destructive",
                        )}
                      >
                         {t(`admin.dashboard.order_status.${order.status}`)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left rtl:text-right px-8">
                      <span className="font-headline font-black text-foreground text-lg">{order.amount}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Side Panel: Popular Products */}
        <div className="space-y-10">
          <Card className="rounded-[2.5rem] border-none shadow-xl bg-card p-8 space-y-8">
            <CardHeader className="p-0">
              <CardTitle className="text-2xl font-black text-foreground font-headline uppercase tracking-tighter">
                {t('admin.dashboard.top_products')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer">
                  <div className="relative size-16 rounded-2xl overflow-hidden bg-muted">
                    <Image 
                      src={`https://picsum.photos/seed/admin-prod${i}/200/200`} 
                      alt="Product" 
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-headline font-black text-foreground group-hover:text-primary transition-colors">{t('shop_products.item_title')} {i}</h4>
                    <p className="text-[10px] text-muted-foreground font-sans font-bold uppercase tracking-widest mt-1">۴۲ {t('shop.footer.journal')} فروش</p>
                  </div>
                  <div className="text-left rtl:text-right">
                    <span className="font-headline font-black text-primary">۵.۶ م</span>
                  </div>
                </div>
              ))}

              <Separator className="my-8 opacity-30" />

              <div className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-xs font-black text-primary uppercase tracking-widest">{t('admin.dashboard.sales_goal')}</p>
                  <Badge variant="outline" className="text-[10px] bg-background">۷۲٪</Badge>
                </div>
                <Progress value={72} className="h-2" />
                <div className="flex justify-between items-center text-[10px] font-black text-muted-foreground uppercase tracking-tighter">
                  <span>{t('admin.dashboard.goal_completed')}</span>
                  <span className="text-primary">{t('admin.dashboard.goal_target')}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions / Newsletter-style Status */}
          <Card className="rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-container p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 size-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/20 transition-all duration-1000"></div>
            <div className="relative z-10 space-y-6">
              <div className="size-12 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                <ArrowUpRight className="size-6 stroke-[3px]" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-white font-headline leading-tight italic">{t('admin.dashboard.winter_campaign')}</h4>
                <p className="text-white/70 text-sm mt-3 font-medium leading-relaxed">{t('admin.dashboard.winter_campaign_desc')}</p>
              </div>
              <Button variant="secondary" className="w-full h-14 rounded-2xl font-black uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all text-primary border-none">
                {t('admin.dashboard.check_settings')}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
