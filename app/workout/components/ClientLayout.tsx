"use client";

import { usePathname } from "next/navigation";
import Header from "../../components/Header";
import { HeaderData } from "@/StaticData/HeaderData";
import Footer from "@/sections/Footer";
import MainLayout from "../../layouts/MainLayout";
import { shouldShowFooter, shouldShowNavbar } from "@/Utils/LayoutOptions";

export default function ClientLayoutController({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const header = <Header links={HeaderData} className="fixed top-0 left-0 right-0 z-10 px-8 bg-transparent text-white" LinksStyle="gap-8" icon={<div className="w-fit">My Website</div>} />;
  const footer = <Footer />;

  if (shouldShowNavbar(pathname) && shouldShowFooter(pathname)) {
    return <MainLayout Header={header} Footer={footer}>{children}</MainLayout>;
  }
  if (shouldShowNavbar(pathname) && !shouldShowFooter(pathname)) {
    return <MainLayout Header={header}>{children}</MainLayout>;
  }
  if (shouldShowFooter(pathname) && !shouldShowNavbar(pathname)) {
    return <MainLayout Footer={footer}>{children}</MainLayout>;
  }
  return <MainLayout>{children}</MainLayout>;
}
