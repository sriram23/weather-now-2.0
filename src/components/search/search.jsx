import debounce from "lodash.debounce";
import "./search.scss";
const Search = ({ onValueChange }) => {
  return (
    <div className="search-container">
      <input
        placeholder="Search for a location"
        onChange={debounce((e) => onValueChange(e.target.value), 1000)}
      ></input>
    </div>
  );
};
export default Search;
