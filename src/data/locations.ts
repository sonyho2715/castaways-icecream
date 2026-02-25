export interface Location {
  id: string;
  name: string;
  neighborhood: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: {
    monThurs: string;
    friSat: string;
    sunday: string;
  };
  mapEmbedUrl: string;
  directionsUrl: string;
  accentColor: string;
}

export const locations: Location[] = [
  {
    id: "moiliili",
    name: "Moiliili",
    neighborhood: "Moiliili",
    address: "2346 S King St",
    city: "Honolulu",
    state: "HI",
    zip: "96826",
    phone: "(808) 744-1001",
    hours: {
      monThurs: "11:00 AM - 9:00 PM",
      friSat: "11:00 AM - 10:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.1!2d-157.832!3d21.292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006df5b3f07f55%3A0xc3f5c48e69e99d6c!2sCastaways%20Ice%20Cream!5e0!3m2!1sen!2sus!4v1",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=2346+S+King+St+Honolulu+HI+96826",
    accentColor: "#FF5A24",
  },
  {
    id: "waikiki",
    name: "Waikiki",
    neighborhood: "Waikiki",
    address: "2301 Kuhio Ave",
    city: "Honolulu",
    state: "HI",
    zip: "96815",
    phone: "(808) 744-1002",
    hours: {
      monThurs: "11:00 AM - 10:00 PM",
      friSat: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 10:00 PM",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.1!2d-157.822!3d21.277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWaikiki!5e0!3m2!1sen!2sus!4v1",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=2301+Kuhio+Ave+Honolulu+HI+96815",
    accentColor: "#00A9E0",
    // TODO: Waikiki location not confirmed in research. Address is placeholder.
  } as Location,
];
