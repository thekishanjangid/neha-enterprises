import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Neha Enterprises for custom furniture, glass partitions, and interior solutions in Jaipur. Call, WhatsApp, or visit us.",
};

export default function ContactPage() {
  return <ContactContent />;
}
