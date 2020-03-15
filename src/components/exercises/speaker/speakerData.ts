export interface Speaker {
  id: number;
  firstName: string;
  lastName: string;
  bio: string;
  favorite: boolean;
}
export const speakerData: Speaker[] = [
  {
    id: 122,
    firstName: "Larry",
    lastName: "Blomberg",
    bio: "Chief Officer Technology",
    favorite: false
  },
  {
    id: 4500,
    firstName: "Grace-Thanks",
    lastName: "Tammara",
    bio: "Technology Analyst",
    favorite: false
  },
  {
    id: 10032,
    firstName: "Neville",
    lastName: "Alexander",
    bio: "Solution Architect",
    favorite: true
  },
  {
    id: 1400,
    firstName: "Megan",
    lastName: "Mini-Mike",
    bio: "Business Analyst",
    favorite: false
  },
  {
    id: 6320,
    firstName: "Paul",
    lastName: "Celestin",
    bio: "Business Analyst",
    favorite: false
  },
  {
    id: 6950,
    firstName: "Esha",
    lastName: "Celinah",
    bio: "Software Technology",
    favorite: false
  }
];
