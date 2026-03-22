import { prisma } from "@/lib/prisma";
import POSClient from "./pos-client";

export default async function POSPage() {
  const products = await prisma.product.findMany({
    where: { stock: { gt: 0 } },
    orderBy: { name: 'asc' }
  });

  return <POSClient initialProducts={products} />;
}
