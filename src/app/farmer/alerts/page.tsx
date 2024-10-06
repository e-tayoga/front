import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import FarmerLayout from "@/components/Layouts/FarmerLayout";
import Alerts from "@/components/Alerts";

export const metadata: Metadata = {
  title: "Alerts | e-ⵟⴰⵢoⴳⴰ",
  description: "This is Alerts page of e-Tayoga",
};

const alerts = () => {
  return (
    <FarmerLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <Breadcrumb pageName="Alerts" />

        <Alerts />
      </div>
    </FarmerLayout>
  );
};

export default alerts;
