import { render, screen, fireEvent, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProjectForm from "../../src/components/ProjectForm";

describe("ProjectForm Component", () => {
  it("renders form with all input fields", () => {
    render(<ProjectForm />);

    // Check for essential form elements
    expect(screen.getByLabelText(/Project name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Repository Link/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Project Bio/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/What is your tech stack/i),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("allows user to add tech stack tags", () => {
    render(<ProjectForm />);

    const techInput = screen.getByPlaceholderText(/Separate with spaces/i);
    fireEvent.change(techInput, { target: { value: "React" } });
    fireEvent.keyDown(techInput, { key: " " });

    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("prevents adding more than 5 tech stack tags", () => {
    render(<ProjectForm />);
    const techInput = screen.getByPlaceholderText(/Separate with spaces/i);
    const techStack = ["React", "Node.js", "Express", "MongoDB", "TypeScript"];

    // Simulate entering tech stack tags
    techStack.forEach((tech) => {
      fireEvent.change(techInput, { target: { value: tech } });
      fireEvent.keyDown(techInput, { key: " " });
    });

    // Check that 5 tags were added
    techStack.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });

    // Try to add one more tech stack item
    fireEvent.change(techInput, { target: { value: "Redux" } });
    fireEvent.keyDown(techInput, { key: " " });

    // Verify additional item was not added
    expect(screen.queryByText("Redux")).not.toBeInTheDocument();
  });

  it("removes a tech stack tag when clicked", () => {
    render(<ProjectForm />);

    const input = screen.getByPlaceholderText("Separate with spaces");
    fireEvent.change(input, { target: { value: "React" } });
    fireEvent.keyDown(input, { key: " ", code: "Space" });

    const reactTag = screen.getByText("React");
    expect(reactTag).toBeInTheDocument();

    const removeButton = within(reactTag.parentElement!).getByRole("button");
    fireEvent.click(removeButton);

    expect(screen.queryByText("React")).not.toBeInTheDocument();
  });
});
