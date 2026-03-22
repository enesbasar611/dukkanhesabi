"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// --- Müşteri Eylemleri ---
export async function getCustomers() {
  return await prisma.customer.findMany({
    orderBy: { createdAt: 'desc' }
  });
}

// --- Envanter Eylemleri ---
export async function getProducts() {
  return await prisma.product.findMany({
    orderBy: { name: 'asc' }
  });
}

// --- Teknik Servis Eylemleri ---
export async function getServiceTickets() {
  return await prisma.serviceTicket.findMany({
    include: {
      customer: true,
      technician: true
    },
    orderBy: { createdAt: 'desc' }
  });
}

// --- Finans Eylemleri ---
export async function getTransactions() {
  return await prisma.transaction.findMany({
    include: {
      customer: true,
      cashDrawer: true
    },
    orderBy: { createdAt: 'desc' }
  });
}

export async function getCashDrawers() {
  return await prisma.cashDrawer.findMany();
}

// --- Tedarikçi Eylemleri ---
export async function getSuppliers() {
  return await prisma.supplier.findMany({
    include: {
      orders: true
    }
  });
}

// --- Kampanya & Otomasyon Eylemleri ---
export async function getCampaigns() {
  return await prisma.campaign.findMany({
    orderBy: { createdAt: 'desc' }
  });
}

export async function getAutomationRules() {
  return await prisma.automationRule.findMany();
}

export async function getSystemSettings() {
  return await prisma.systemSettings.findUnique({
    where: { id: 'default' }
  });
}
