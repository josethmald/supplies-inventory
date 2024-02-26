import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableTwo from "@/components/Almacen/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Almacen ",
  description:
    "Almacen",
};

const AlmacenPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Almacen" />

      <div className="flex flex-col gap-10">
        <TableTwo />
      </div>
    </DefaultLayout>
  );
};

export default AlmacenPage;
