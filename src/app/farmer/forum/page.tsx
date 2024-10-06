import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import FarmerLayout from "@/components/Layouts/FarmerLayout";
import ForumBox from "@/components/ForumBox";

export const metadata: Metadata = {
  title: "Forum | e-ⵟⴰⵢoⴳⴰ",
  description: "This is Forum page of e-Tayoga",
};

const forum = () => {
  return (
    <FarmerLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <Breadcrumb pageName="Forum" />

        <ForumBox />
      </div>
    </FarmerLayout>
  );
};

export default forum;
