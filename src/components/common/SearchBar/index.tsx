import { RiSearchLine } from '@remixicon/react';
import { TextInput } from '@tremor/react';

const SearchBar = () => (
  <div className="w-1/2 rounded-lg border border-solid border-gray-100">
    <TextInput icon={RiSearchLine} placeholder="Search..." />
  </div>
);

export default SearchBar;
