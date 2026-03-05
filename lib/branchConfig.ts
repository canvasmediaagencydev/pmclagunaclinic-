export interface BranchConfig {
  name: string;
  domain: string;
  phone: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsapp: string;
  line: string;
  hours: string;
  hoursDisplay: string;
  hoursBadge: string;
  address: string[];
  addressFull: string;
  mapUrl: string;
}

export const branches: Record<string, BranchConfig> = {
  "pmcphukettown.net": {
    name: "PMC Phuket Town",
    domain: "pmcphukettown.net",
    phone: "+66962282449",
    phoneDisplay: "096-228-2449",
    phoneHref: "tel:+66962282449",
    whatsapp: "66962282449",
    line: "@pmcphuket",
    hours: "09:00-20:00",
    hoursDisplay: "9:00 AM - 8:00 PM",
    hoursBadge: "OPEN 9AM - 8PM",
    address: [
      "41/7-41/8 ต. ตลาดเหนือ",
      "อ. เมืองภูเก็ต จ.ภูเก็ต 83000"
    ],
    addressFull: "ภูเก็ต เมดิคอล คลินิก สาขาเมือง ภูเก็ต 41/7-41/8 ต. ตลาดเหนือ อ. เมืองภูเก็ต จ.ภูเก็ต 83000",
    mapUrl: "https://maps.app.goo.gl/yeU9qNArGg3qdwZw9",
  },
  "pmccircleclocktower.net": {
    name: "PMC Circle Clock Tower",
    domain: "pmccircleclocktower.net",
    phone: "+66966962449",
    phoneDisplay: "096-696-2449",
    phoneHref: "tel:+66966962449",
    whatsapp: "66966962449",
    line: "@pmcphuket",
    hours: "10:00-19:00",
    hoursDisplay: "10:00 AM - 7:00 PM",
    hoursBadge: "OPEN 10AM - 7PM",
    address: [
      "206/8 ถ. ภูเก็ต Taladyai",
      "อำเภอเมืองภูเก็ต ภูเก็ต 83000"
    ],
    addressFull: "206/8 ถ. ภูเก็ต Taladyai, อำเภอเมืองภูเก็ต ภูเก็ต 83000",
    mapUrl: "https://share.google/mxy7PwLaauoHoZ1yW",
  },
  "pmclagunaclinic.net": {
    name: "PMC Laguna",
    domain: "pmclagunaclinic.net",
    phone: "+66962362449",
    phoneDisplay: "096-236-2449",
    phoneHref: "tel:+66962362449",
    whatsapp: "66962362449",
    line: "@pmclaguna",
    hours: "09:00-22:00",
    hoursDisplay: "9:00 AM - 10:00 PM",
    hoursBadge: "OPEN 9AM - 10PM",
    address: [
      "58/1, Choeng Thale Subdistrict",
      "Thalang District, Phuket 83100"
    ],
    addressFull: "Phuket Medical Clinic Laguna - ภูเก็ต เมดิคอล คลินิก ลากูน่า",
    mapUrl: "https://maps.app.goo.gl/7PwP7N4AF3F2JHxL8",
  },
};

// Default branch (fallback)
export const defaultBranch = branches["pmclagunaclinic.com"];

export function getBranchByDomain(hostname: string): BranchConfig {
  // Remove www. prefix if present
  const domain = hostname.replace(/^www\./, "").toLowerCase();

  // Check for exact match
  if (branches[domain]) {
    return branches[domain];
  }

  // Check for partial match (for subdomains or localhost testing)
  for (const key of Object.keys(branches)) {
    if (domain.includes(key.replace(".com", ""))) {
      return branches[key];
    }
  }

  return defaultBranch;
}
