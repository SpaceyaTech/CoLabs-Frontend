import { faker } from "@faker-js/faker";
import { z } from "zod";
const projectType = ["private", "open-source"] as const;
const platforms = ["web", "mobile", "desktop"] as const;
const compensation = ["Non-monetized", "Monetized"] as const;

// export type Monetized = {
//   type: "Monetized";
//   amount: number;
//   currency: string;
//   frequency: "Per Hour" | "Per Month" | "Per Milestone" | "Per Project";
//   duration: number;
// };
// export type NonMonetized = {
//   type: "Non-monetized";
// };
// export type CompensationType = Monetized | NonMonetized;



// export type Project = {
//   id: string;
//   title: string;
//   description: string;
//   type: (typeof projectType)[number];
//   platform: (typeof platforms)[number];
//   compensation: Monetized | NonMonetized;
//   languages: { name: string; color: string }[];
//   issuesCount: number;
//   link: string;
//   forksCount: number;
//   starCount: number;
//   lastCommitDate: string;
//   owner: string;
//   collaborators: string[];
// };


export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  type: z.enum(projectType),
  platform: z.enum(platforms),
  compensation: z.union([
    z.object({
      monetization_type: z.literal("Monetized"),
      amount: z.number(),
      currency: z.string(),
      frequency: z.enum([
        "Per Hour",
        "Per Month",
        "Per Milestone",
        "Per Project",
      ]),
      duration: z.number(),
    }),
    z.object({
      monetization_type: z.literal("Non-monetized"),
    }),
  ]),
  languages: z.array(z.object({ name: z.string(), color: z.string() })),
  issuesCount: z.number(),
  link: z.string(),
  forksCount: z.number(),
  starCount: z.number(),
  lastCommitDate: z.string(),
  owner: z.string(),
  collaborators: z.array(z.string()),
});

export type Project = z.infer<typeof projectSchema>;


export const generateProjects = (count: number): Project[] => {
  const projects: Project[] = [];

  // Ensure faker is properly imported and initialized
  if (!faker.datatype) {
    throw new Error(
      "faker.datatype is not available. Please ensure faker is installed and imported correctly.",
    );
  }
  const programing_langs = [
    { name: "JavaScript", color: "#f1e05a" },
    { name: "TypeScript", color: "#2b7489" },
    { name: "Python", color: "#3572A5" },
    { name: "Java", color: "#b07219" },
    { name: "Swift", color: "#ffac45" },
    { name: "Kotlin", color: "#A97BFF" },
    { name: "Dart", color: "#00B4AB" },
    { name: "Rails", color: "#CC0000" },
  ];

  for (let i = 0; i < count; i++) {
    projects.push({
      id: faker.string.uuid(), // Assuming faker is working correctly
      title: faker.commerce.productName(),
      type: faker.helpers.arrayElement(projectType),
      description: faker.lorem.sentence(),
      languages: faker.helpers.arrayElements(programing_langs, 3),
      issuesCount: faker.number.int({ min: 0, max: 100 }),
      link: faker.internet.url(),
      forksCount: faker.number.int({ min: 0, max: 100 }),
      starCount: faker.number.int({ min: 0, max: 1000 }),
      lastCommitDate: faker.date.past().toISOString().split("T")[0],
      platform: faker.helpers.arrayElement(platforms),
      compensation:
        faker.helpers.arrayElement(compensation) === "Monetized"
          ? {
              monetization_type: "Monetized",
              amount: faker.number.int({ min: 0, max: 100 }),
              currency: faker.finance.currencyCode(),
              duration: faker.number.int({ min: 0, max: 100 }),
              frequency: faker.helpers.arrayElement([
                "Per Hour",
                "Per Month",
                "Per Milestone",
                "Per Project",
              ]),
            }
          : {
              monetization_type: "Non-monetized",
            },
      owner: faker.person.firstName(),
      collaborators: faker.helpers.arrayElements(
        [
          faker.person.firstName(),
          faker.person.firstName(),
          faker.person.firstName(),
        ],
        3,
      ),
    });
  }

  return projects;
};

export const projectsArray: Project[] = generateProjects(24);
