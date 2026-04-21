import { Header } from "@/src/modules/shop/components/header";
import { BottomNav } from "@/src/modules/shop/components/bottom-nav";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20 pb-20 md:pb-0">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}


