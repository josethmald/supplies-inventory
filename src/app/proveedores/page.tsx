import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableTwo from "@/components/Proveedores/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Proveedores ",
  description:
    "Proveedores",
};

const ProveedoresPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Proveedores" />

      <div className="flex flex-col gap-10">
        <TableTwo />
      </div>
    </DefaultLayout>
  );
};

export default ProveedoresPage;
