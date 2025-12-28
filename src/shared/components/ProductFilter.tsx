import React from 'react';

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full font-semibold transition-all ${
      isActive
        ? 'bg-blue-600 text-white shadow-md'
        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
    }`}
  >
    {label}
  </button>
);

interface ProductFilterProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({
  filters,
  activeFilter,
  onFilterChange,
}) => (
  <div className="flex flex-wrap gap-3 justify-center">
    <FilterButton
      label="All"
      isActive={activeFilter === 'all'}
      onClick={() => onFilterChange('all')}
    />
    {filters.map((filter) => (
      <FilterButton
        key={filter}
        label={filter}
        isActive={activeFilter === filter}
        onClick={() => onFilterChange(filter)}
      />
    ))}
  </div>
);

export default ProductFilter;
