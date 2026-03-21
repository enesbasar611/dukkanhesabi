"use server";

import { prisma } from "@/lib/prisma";
import { TicketStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function updateTicketStatus(id: string, status: TicketStatus) {
  try {
    await prisma.serviceTicket.update({
      where: { id },
      data: { status },
    });

    // Log the change
    await prisma.serviceLog.create({
      data: {
        ticketId: id,
        content: `Status updated to ${status.replace('_', ' ')}`,
      }
    });

    revalidatePath(`/technical-service/${id}`);
    revalidatePath("/technical-service");
    return { success: true };
  } catch {
    return { success: false, error: "Failed to update status" };
  }
}

export async function addTicketNote(id: string, content: string, isPublic: boolean = false) {
  try {
    await prisma.serviceLog.create({
      data: {
        ticketId: id,
        content,
        isPublic,
      }
    });
    revalidatePath(`/technical-service/${id}`);
    return { success: true };
  } catch {
    return { success: false, error: "Failed to add note" };
  }
}
