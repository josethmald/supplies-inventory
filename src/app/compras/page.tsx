import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableTwo from "@/components/Compras/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Compras ",
  description:
    "Compras",
};

const ComprasPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Compras" />

      <div className="flex flex-col gap-10">
        <TableTwo />
      </div>
    </DefaultLayout>
  );
};

export default ComprasPage;
