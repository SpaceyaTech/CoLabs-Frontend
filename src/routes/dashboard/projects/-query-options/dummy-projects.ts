import { faker } from "@faker-js/faker";

const projectType = ["private", "public"] as const 
const platforms = ["web", "mobile", "desktop"] as const
const compensation =["Non-monetized", "Monetized"] as const
export type Project = {
  id: string;
  name: string;
  description: string;
  type: typeof projectType[number];
  platform: typeof platforms[number];
  compensation: typeof compensation[number];
  languages: string[];
  issuesCount: number;
  link: string;
  forksCount: number;
  starCount: number;
  lastCommitDate: string;
  ownner:string;
};

export const generateProjects = (count: number): Project[] => {
  const projects: Project[] = [];

  // Ensure faker is properly imported and initialized
  if (!faker.datatype) {
    throw new Error(
      "faker.datatype is not available. Please ensure faker is installed and imported correctly.",
    );
  }
  const programing_langs = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "Swift",
    "Kotlin",
    "Dart",
    "Vue",
    "Rails",
  ];

  for (let i = 0; i < count; i++) {
    projects.push({
      id: faker.string.uuid(), // Assuming faker is working correctly
      name: faker.commerce.productName(),
      type: faker.helpers.arrayElement(projectType),
      description: faker.lorem.sentence(),
      languages: faker.helpers.arrayElements(programing_langs, 3),
      issuesCount: faker.number.int({ min: 0, max: 100 }),
      link: faker.internet.url(),
      forksCount: faker.number.int({ min: 0, max: 100 }),
      starCount: faker.number.int({ min: 0, max: 1000 }),
      lastCommitDate: faker.date.past().toISOString().split("T")[0],
      platform: faker.helpers.arrayElement(platforms),
      compensation: faker.helpers.arrayElement(compensation),
      ownner:faker.person.firstName()
    });
  }

  return projects;
};

export const projectsArray: Project[] = generateProjects(24);
