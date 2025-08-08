const InputField = ({title, onChange, display, name}) => {
    return <>
        <label htmlFor={name} className="block font-semibold">
        {display ? display : "Title"}
      </label>
      <input
        name={name}
        type="text"
        className="w-full p-2 border rounded-lg"
        value={title}
        onChange={onChange}
      />
    </>;
}
 
export default InputField;