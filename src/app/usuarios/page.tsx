import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableTwo from "@/components/Usuarios/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Usuarios ",
  description:
    "Usuarios",
};

const UsuariosPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Usuarios" />

      <div className="flex flex-col gap-10">
        <TableTwo />
      </div>
    </DefaultLayout>
  );
};

export default UsuariosPage;
