import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import { FilterContainer, Input, Select } from "./styles";

interface FilterBarProps {
  onFilterChange: (filters: Record<string, string>) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("");
  const [date, setDate] = useState("newest");
  const [inventory, setInventory] = useState("available");

  const debouncedFilterChange = debounce((value: string) => {
    onFilterChange({ filter: value, date, inventory });
  }, 500);

  useEffect(() => {
    debouncedFilterChange(filter);
  }, [filter, date, inventory]);

  return (
    <FilterContainer>
      <Input
        type="text"
        placeholder="Search products..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <Select onChange={(e) => setDate(e.target.value)} value={date}>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </Select>

      <Select onChange={(e) => setInventory(e.target.value)} value={inventory}>
        <option value="available">Available</option>
        <option value="out_of_stock">Out of Stock</option>
      </Select>
    </FilterContainer>
  );
};

export default FilterBar;
