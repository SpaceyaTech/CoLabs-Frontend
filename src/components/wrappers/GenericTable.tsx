import { useMutation } from "@tanstack/react-query";
import { Edit, Loader } from "lucide-react";
import { useRef, useState } from "react";

type GenericTableColumn<T extends Record<string, any>> = {
  label: string;
  type: "text" | "number" | "date";
  accessor: string extends keyof T ? string : Extract<keyof T, string>;
};
interface GenericTableProps<T extends Record<string, any>> {
  columns: GenericTableColumn<T>[];
  rows: T[];
  updateItem?: (item: T) => Promise<any>;
  
}

export function GenericTable<T extends Record<string, any>>({
  columns,
  rows,
  updateItem,
}: GenericTableProps<T>) {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  // @ts-expect-error : : The {} type is not assignable to type T but is the best default value 
  const [input, setInput] = useState<T>({});
  const mutation = useMutation({
    mutationFn: (input: T) => {
      return updateItem
        ? updateItem?.(input)
        : new Promise((resolve) => resolve({}));
    },
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutation.mutate(input);
    modalRef.current?.close();
  }
  return (
    <div className="w-full overflow-x-auto">
      <table className="table table-zebra table-lg sticky top-0 w-full">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor}>{column.label}</th>
            ))}
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={row.id + column.accessor}>{row[column.accessor]}</td>
              ))}
              <td>
                <Edit
                  className="size-4"
                  onClick={() => {
                    setInput(row);
                    modalRef.current?.showModal();
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <h1 className="text-2xl font-bold">Update</h1>
          <form
            className="flex w-full flex-col items-center gap-2"
            onSubmit={handleSubmit}
          >
            {columns.map((column) => (
              <div key={column.accessor}>
                <label className="label">
                  <span className="label-text">{column.label}</span>
                </label>
                <input
                  value={input[column.accessor]}
                  onChange={handleChange}
                  id={column.accessor}
                  name={column.accessor}
                  type={column.type}
                  placeholder={`Enter ${column.label}`}
                  className="input input-bordered w-full"
                />
              </div>
            ))}
          </form>

          <div className="modal-action flex w-full items-center justify-center">
            {updateItem && (
              <button type="button" className="btn btn-primary btn-sm btn-wide">
                save{" "}
                {mutation.isPending && (
                  <Loader className="size-4 animate-spin" />
                )}
              </button>
            )}
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error btn-sm">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
