import { Card } from "./DocPrimitives";

/**
 * Reusable semantic token table for Typography, Spacing, Palette-style docs.
 * Uses native <table> for screen reader navigation (WCAG 1.3.1).
 */
export function TokenTable({ caption, columns, rows, getRowKey = (row) => row.token || row.id, embedded = false }) {
  const table = (
    <div className="overflow-x-auto max-w-full -mx-1 px-1">
      <table className="w-full min-w-[560px] border-collapse">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="border-b border-[#F2F4F6] bg-[#FAFBFC]">
              {columns.map((col) => (
                <th
                  key={col.id}
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-semibold text-[#8B95A1]"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={getRowKey(row)}
                className="border-b border-[#F2F4F6] last:border-b-0 hover:bg-[#FAFBFC] transition"
              >
                {columns.map((col) => (
                  <td key={col.id} className="px-6 py-5 align-middle text-[15px] text-[#2F3A47]">
                    {col.render ? col.render(row, rowIndex) : row[col.id]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );

  if (embedded) return table;

  return <Card>{table}</Card>;
}

export function ContrastTable({ caption, columns, rows }) {
  return (
    <TokenTable caption={caption} columns={columns} rows={rows} getRowKey={(row) => row.level} />
  );
}
