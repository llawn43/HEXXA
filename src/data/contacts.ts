/** Management and booking contacts, as published by AB Touring. */
export interface Contact {
  role: string;
  name: string;
  email: string;
  company: string;
  /** Territory or scope note, when relevant. */
  note?: string;
}

export const contacts: Contact[] = [
  {
    role: "Management",
    name: "Paige Schmidt",
    email: "paige@divergentmgmt.com",
    company: "Divergent Management",
  },
  {
    role: "Booking",
    name: "Camila Giudice",
    email: "camila@abtouring.com",
    company: "AB Touring",
    note: "Worldwide",
  },
];

/** Pre-fills the subject line so enquiries arrive already sorted. */
export function mailto(contact: Contact, subject: string): string {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;
}
