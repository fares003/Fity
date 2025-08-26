export interface FooterSection {
    id: number;
    title: string;
    links?: string[];
    contact?: ContactInfo[];
}

export interface ContactInfo {
    type: "location" | "phone" | "email";
    value: string;
}
