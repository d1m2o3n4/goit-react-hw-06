import { useDispatch } from "react-redux";

import { setFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(setFilter(event.target.value.trim().toLowerCase()));
    console.log(event.target.value);
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};
export default SearchBox;
