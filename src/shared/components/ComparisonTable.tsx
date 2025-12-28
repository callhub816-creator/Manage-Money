import React from 'react';

interface ComparisonTableProps {
  columns: string[];
  rows: (string | number | boolean)[][];
  title?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ columns, rows, title }) => (
  <div className="w-full overflow-x-auto">
    {title && <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>}
    <table className="w-full border-collapse border border-slate-300 rounded-lg overflow-hidden">
      <thead className="bg-slate-100">
        <tr>
          {columns.map((col, idx) => (
            <th
              key={idx}
              className="px-6 py-3 text-left font-semibold text-slate-900 border border-slate-300"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIdx) => (
          <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
            {row.map((cell, cellIdx) => (
              <td
                key={cellIdx}
                className="px-6 py-3 text-slate-700 border border-slate-300 text-sm"
              >
                {typeof cell === 'boolean' ? (cell ? '✓' : '✗') : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ComparisonTable;
