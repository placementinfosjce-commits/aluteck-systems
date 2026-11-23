const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function runTests() {
  console.log("=== RUNNING AUTOMATED INTERACTION & DATABASE TESTS ===");

  try {
    // 1. Test Enquiry Creation
    console.log("1. Testing Enquiry creation and persistence...");
    const testEnquiry = await prisma.enquiry.create({
      data: {
        fullName: "Test Architect Ar. Sharma",
        phone: "+91 98765 43210",
        email: "test.architect@studio.com",
        city: "Mumbai",
        requirements: "Need 6 panels of CS.25 Slim sliding system with DGU acoustic glass.",
        productSeries: "CS.25",
        source: "Automated Test Suite",
        status: "New",
      },
    });
    console.log("✔ Enquiry created with ID:", testEnquiry.id);

    // 2. Test Complaint Registration & Tracking
    console.log("2. Testing Complaint generation with unique reference...");
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const ref = `ALT-CMP-2026-${randomSuffix}`;
    const testComplaint = await prisma.complaint.create({
      data: {
        referenceNumber: ref,
        fullName: "Test Customer Rajiv Patel",
        phone: "+91 98111 22233",
        email: "rajiv@patelresidence.in",
        city: "Pune",
        productSeries: "CC.50",
        complaintText: "Sliding handle needs alignment adjustment on master bedroom door.",
        status: "Submitted",
      },
    });
    console.log("✔ Complaint created with Reference:", testComplaint.referenceNumber);

    // 3. Test Tracking Lookup
    console.log("3. Testing Complaint lookup by reference number...");
    const lookup = await prisma.complaint.findUnique({
      where: { referenceNumber: ref },
    });
    if (lookup && lookup.status === "Submitted") {
      console.log("✔ Found complaint:", lookup.referenceNumber, "Status:", lookup.status);
    } else {
      throw new Error("Complaint lookup failed");
    }

    // 4. Test Status Update
    console.log("4. Testing Admin status update on complaint...");
    const updated = await prisma.complaint.update({
      where: { referenceNumber: ref },
      data: {
        status: "In Progress",
        adminNotes: "Technician assigned for on-site alignment inspection on Nov 25.",
      },
    });
    console.log("✔ Complaint status updated to:", updated.status, "| Note:", updated.adminNotes);

    console.log("\n=== ALL CRITICAL TESTS PASSED SUCCESSFULLY! ===");
  } catch (err) {
    console.error("❌ Test failed:", err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

runTests();
