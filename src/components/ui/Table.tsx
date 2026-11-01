import { TableHTMLAttributes, forwardRef, ReactNode } from 'react';

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  headers: string[];
  children: ReactNode;
}

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className = '', headers, children, ...props }, ref) => {
    return (
      <div className="w-full overflow-x-auto">
        <table
          ref={ref}
          className={`w-full border-collapse font-[family-name:var(--font-dm-sans)] ${className}`}
          {...props}
        >
          <thead>
            <tr className="border-b-2 border-foreground">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="text-left py-3 px-4 font-bold text-sm uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    );
  }
);

Table.displayName = 'Table';

interface TableRowProps {
  children: ReactNode;
  className?: string;
}

const TableRow = ({ children, className = '' }: TableRowProps) => {
  return (
    <tr className={`border-b border-foreground/20 ${className}`}>
      {children}
    </tr>
  );
};

interface TableCellProps {
  children: ReactNode;
  className?: string;
}

const TableCell = ({ children, className = '' }: TableCellProps) => {
  return (
    <td className={`py-3 px-4 ${className}`}>
      {children}
    </td>
  );
};

export { Table, TableRow, TableCell };
