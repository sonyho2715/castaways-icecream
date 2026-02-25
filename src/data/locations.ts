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
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  hoursDisplay: string;
  mapEmbedUrl: string;
  directionsUrl: string;
  accentColor: string;
  studentDiscount?: {
    school: string;
    offer: string;
    requirement: string;
  };
}

export const locations: Location[] = [
  {
    id: "moiliili",
    name: "Mo\u02BBili\u02BBili",
    neighborhood: "Mo\u02BBili\u02BBili",
    address: "2346 South King St",
    city: "Honolulu",
    state: "HI",
    zip: "96826",
    phone: "(808) 744-1001",
    hours: {
      monday: "2:00 PM \u2013 10:00 PM",
      tuesday: "2:00 PM \u2013 10:00 PM",
      wednesday: "2:00 PM \u2013 10:00 PM",
      thursday: "2:00 PM \u2013 10:00 PM",
      friday: "2:00 PM \u2013 Midnight",
      saturday: "12:00 PM \u2013 Midnight",
      sunday: "12:00 PM \u2013 10:00 PM",
    },
    hoursDisplay:
      "Mon\u2013Thu: 2PM\u201310PM \u00B7 Fri: 2PM\u2013Midnight \u00B7 Sat: 12PM\u2013Midnight \u00B7 Sun: 12PM\u201310PM",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.1!2d-157.832!3d21.292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006df5b3f07f55%3A0xc3f5c48e69e99d6c!2sCastaways%20Ice%20Cream!5e0!3m2!1sen!2sus!4v1",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=2346+South+King+St+Honolulu+HI+96826",
    accentColor: "#5BAED6",
    studentDiscount: {
      school: "UH M\u0101noa Students",
      offer: "10% off your purchase",
      requirement: "Show your student ID",
    },
  },
];
