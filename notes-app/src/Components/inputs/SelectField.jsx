const SelectField = ({ value, onChange, display, options, name }) => {
  return (
    <>
      <label htmlFor={name} className="block font-semibold">
        {display ? display : "Title"}
      </label>
      <select
        name={name}
        type="text"
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectField;
