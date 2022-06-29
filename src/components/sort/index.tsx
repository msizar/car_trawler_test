import { FC, useState } from 'react';
import { SORT_TYPES } from '../../models/constants';
import SortTypeEnum from '../../models/sort-types.enum';

import './sortStyle.css';

type SortProps = {
  filter: (sortType: SortTypeEnum) => void;
  defaultSortType?: SortTypeEnum;
};
const Sort: FC<SortProps> = ({ filter, defaultSortType }) => {
  const [sortingType, setSortingType] = useState<SortTypeEnum | undefined>(
    defaultSortType
  );

  const handleChange = (event: any) => {
    setSortingType(event.target.value);
    filter(event.target.value);
  };

  return (
    <form>
      <span className="cardTitle">Sort by: &nbsp;</span>
      <select id="rating-filter" value={sortingType} onChange={handleChange}>
        {SORT_TYPES.map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Sort;

Sort.defaultProps = {
  defaultSortType: SortTypeEnum.LowPrice,
};
