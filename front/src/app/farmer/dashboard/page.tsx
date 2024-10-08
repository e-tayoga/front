import FarmerLayout from "@/components/Layouts/FarmerLayout";
import BreadcrumbFarmer from "@/components/Breadcrumbs/BreadcrumbFarmer";
import DashboardBox from "@/components/DashboardBox";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard | e-ⵟⴰⵢoⴳⴰ",
  description: "Dashboard page for e-Tayoga",
};

export default function Dashboard() {
  return (
    <>
      <FarmerLayout>
        <div className="mx-auto w-full max-w-[970px]">
          <BreadcrumbFarmer pageName="Dashboard" />

          <DashboardBox />
        </div>
      </FarmerLayout>
    </>
  );
}
