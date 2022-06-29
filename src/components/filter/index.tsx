import { FC, useState } from 'react';
import Vendor from '../../models/vendor.model';

type filterProps = {
  filter: (filterByType: Vendor) => void;
  defaultFilterType?: string;
  filterOptions: any;
};
const Filter: FC<filterProps> = ({
  filter,
  defaultFilterType,
  filterOptions,
}) => {
  const [filteringType, setFilteringType] = useState<string | undefined>(
    defaultFilterType
  );

  const handleChange = (event: any) => {
    setFilteringType(event.target.value);
    filter(event.target.value);
  };

  if (!filterOptions) return <></>;
  return (
    <form>
      <span className="cardTitle">filter by vendor: &nbsp;</span>
      <select id="rating-filter" value={filteringType} onChange={handleChange}>
        <option value={''}>All</option>
        {filterOptions.map((vendor: Vendor) => (
          <option value={vendor.code} key={vendor.code}>
            {vendor.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Filter;

Filter.defaultProps = {
  defaultFilterType: '',
};
