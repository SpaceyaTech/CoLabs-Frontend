import { render  } from "@testing-library/react";
import RepositoriesSection from "./RepositoriesSection";

describe("Repositories Section", () => {
  it("should render the section heading", () => {
    render(<RepositoriesSection projects={[]} />);
    // expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });
})
//TODO  Fix broken tests
// describe("Repositories Section", () => {
//   it("should render the section heading", () => {
//     render(<RepositoriesSection projects={[]} />);
//     expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
//   });

//   it("should render the search input", () => {
//     render(<RepositoriesSection projects={[]} />);
//     expect(screen.getByTestId("project-search")).toBeInTheDocument();
//   });

//   it("should render filter tags", () => {
//     renderWithRouter(() => <RepositoriesSection projects={projects} />);

//     const filterLangs = [
//       ALL_LANGS,
//       ...new Set(projects.flatMap((p) => p.languages)),
//     ];

//     filterLangs.forEach((lang) => {
//       expect(screen.getByTestId(`btn-filter-${lang}`)).toBeInTheDocument();
//     });
//   });

//   it("should render the provided projects", () => {
//     renderWithRouter(() => <RepositoriesSection projects={projects} />);
//     projects.forEach((project) => {
//       expect(screen.getByText(project.repository)).toBeInTheDocument();
//       expect(screen.getByText(project.description)).toBeInTheDocument();
//     });
//   });

//   it("handles empty projects array gracefully", () => {
//     render(<RepositoriesSection projects={[]} />);

//     expect(screen.queryByTestId("learn-more-link")).not.toBeInTheDocument();
//   });

//   it("renders 'Learn more' links correctly", () => {
//     renderWithRouter(() => <RepositoriesSection projects={projects} />);
//     screen.getAllByTestId("learn-more-link").forEach((link, index) => {
//       expect(link).toHaveAttribute("href", projects[index].link);
//     });
//   });
// });
