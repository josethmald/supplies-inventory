import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableThree from "@/components/Productos/TableThree";
import TableTwo from "@/components/Productos/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Productos ",
  description:
    "Productos",
};

const ProductosPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Productos" />

      <div className="flex flex-col gap-10">
        <TableTwo />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default ProductosPage;
