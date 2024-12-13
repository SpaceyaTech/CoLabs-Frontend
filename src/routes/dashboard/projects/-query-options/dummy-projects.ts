import { faker } from "@faker-js/faker";

export type Project = {
  id: string;
  name: string;
  description: string;
  languages: string[];
  issuesCount: number;
  link: string;
  forksCount: number;
  starCount: number;
  lastCommitDate: string;
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
      description: faker.lorem.sentence(),
    //  RANDOM programing lanuages
      languages: faker.helpers.arrayElements(programing_langs, 3),
      issuesCount: faker.number.int({ min: 0, max: 100 }),
      link: faker.internet.url(),
      forksCount: faker.number.int({ min: 0, max: 100 }),
      starCount: faker.number.int({ min: 0, max: 1000 }),
      lastCommitDate: faker.date.past().toISOString().split("T")[0],
    });
  }

  return projects;
};

export const projectsArray: Project[] = generateProjects(24);
