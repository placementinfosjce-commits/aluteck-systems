"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Enquiry Schema
const enquirySchema = z.object({
  fullName: z.string().min(2, "Full Name must be at least 2 characters"),
  phone: z.string().min(8, "Phone number is required"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "City is required"),
  requirements: z.string().min(5, "Please provide your project requirements"),
  productSeries: z.string().optional(),
  source: z.string().optional().default("Website Form"),
});

export async function submitEnquiryAction(data: z.infer<typeof enquirySchema>) {
  try {
    const validated = enquirySchema.parse(data);

    // Save directly to Prisma SQLite database
    const enquiry = await prisma.enquiry.create({
      data: {
        fullName: validated.fullName,
        phone: validated.phone,
        email: validated.email,
        city: validated.city,
        requirements: validated.requirements,
        productSeries: validated.productSeries || null,
        source: validated.source || "Website Form",
        status: "New",
      },
    });

    revalidatePath("/admin");
    return {
      success: true,
      message: "Enquiry submitted successfully",
      enquiryId: enquiry.id,
    };
  } catch (error: any) {
    console.error("Enquiry submission error:", error);
    return {
      success: false,
      message: error?.errors?.[0]?.message || error?.message || "Failed to submit enquiry",
    };
  }
}

// Complaint Schema
const complaintSchema = z.object({
  fullName: z.string().min(2, "Full Name must be at least 2 characters"),
  phone: z.string().min(8, "Phone number is required"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "City is required"),
  productSeries: z.string().optional(),
  projectRef: z.string().optional(),
  complaintText: z.string().min(10, "Please describe your concern in at least 10 characters"),
});

export async function submitComplaintAction(data: z.infer<typeof complaintSchema>) {
  try {
    const validated = complaintSchema.parse(data);

    // Generate unique reference number: ALT-CMP-2026-XXXX
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceNumber = `ALT-CMP-2026-${randomSuffix}`;

    const complaint = await prisma.complaint.create({
      data: {
        referenceNumber,
        fullName: validated.fullName,
        phone: validated.phone,
        email: validated.email,
        city: validated.city,
        productSeries: validated.productSeries || null,
        projectRef: validated.projectRef || null,
        complaintText: validated.complaintText,
        status: "Submitted",
      },
    });

    revalidatePath("/customer-complaint");
    revalidatePath("/admin");

    return {
      success: true,
      referenceNumber: complaint.referenceNumber,
      message: "Complaint registered successfully. Our team will review it shortly.",
    };
  } catch (error: any) {
    console.error("Complaint registration error:", error);
    return {
      success: false,
      message: error?.errors?.[0]?.message || error?.message || "Failed to register complaint",
    };
  }
}

// Track complaint
export async function trackComplaintAction(referenceNumber: string) {
  try {
    if (!referenceNumber || referenceNumber.trim() === "") {
      return { success: false, message: "Please enter a valid complaint reference number" };
    }

    const complaint = await prisma.complaint.findUnique({
      where: { referenceNumber: referenceNumber.trim() },
    });

    if (!complaint) {
      return { success: false, message: "No complaint found with this reference number" };
    }

    return {
      success: true,
      data: {
        referenceNumber: complaint.referenceNumber,
        fullName: complaint.fullName,
        city: complaint.city,
        productSeries: complaint.productSeries,
        status: complaint.status,
        createdAt: complaint.createdAt.toISOString(),
        updatedAt: complaint.updatedAt.toISOString(),
        adminNotes: complaint.adminNotes,
      },
    };
  } catch (error: any) {
    return { success: false, message: error?.message || "Error tracking complaint" };
  }
}

// Admin Data Action
export async function getAdminDataAction(pin: string) {
  const correctPin = process.env.ADMIN_PIN || "aluteck2026";
  if (pin !== correctPin) {
    return { success: false, message: "Invalid administrator PIN" };
  }

  try {
    const [enquiries, complaints] = await Promise.all([
      prisma.enquiry.findMany({ orderBy: { createdAt: "desc" } }),
      prisma.complaint.findMany({ orderBy: { createdAt: "desc" } }),
    ]);

    return {
      success: true,
      data: {
        enquiries,
        complaints,
        stats: {
          totalEnquiries: enquiries.length,
          newEnquiries: enquiries.filter((e) => e.status === "New").length,
          totalComplaints: complaints.length,
          openComplaints: complaints.filter((c) => c.status !== "Resolved" && c.status !== "Closed").length,
        },
      },
    };
  } catch (error: any) {
    return { success: false, message: error?.message || "Failed to fetch admin data" };
  }
}

// Update Enquiry Status
export async function updateEnquiryStatusAction(id: string, status: string, notes?: string, pin?: string) {
  const correctPin = process.env.ADMIN_PIN || "aluteck2026";
  if (pin !== correctPin) {
    return { success: false, message: "Unauthorized" };
  }

  try {
    const updated = await prisma.enquiry.update({
      where: { id },
      data: { status, notes: notes !== undefined ? notes : undefined },
    });
    revalidatePath("/admin");
    return { success: true, enquiry: updated };
  } catch (error: any) {
    return { success: false, message: error?.message || "Failed to update enquiry" };
  }
}

// Update Complaint Status
export async function updateComplaintStatusAction(id: string, status: string, adminNotes?: string, pin?: string) {
  const correctPin = process.env.ADMIN_PIN || "aluteck2026";
  if (pin !== correctPin) {
    return { success: false, message: "Unauthorized" };
  }

  try {
    const updated = await prisma.complaint.update({
      where: { id },
      data: { status, adminNotes: adminNotes !== undefined ? adminNotes : undefined },
    });
    revalidatePath("/admin");
    revalidatePath("/customer-complaint");
    return { success: true, complaint: updated };
  } catch (error: any) {
    return { success: false, message: error?.message || "Failed to update complaint" };
  }
}
