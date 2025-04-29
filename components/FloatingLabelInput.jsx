const FloatingLabelInput = ({ label, type = "text" , id, ...props }) => {
    return (
      <div className="relative z-10 w-60 xl:w-80 mb-5 group">
        <input type={type} name={label} id={id} {...props} className="block py-2.5 px-0 w-full text-sm text-neutral11 bg-transparent border-0 border-b-1 border-neutral6 focus:outline-none focus:ring-0 focus:border-primary peer appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" placeholder=" " required />
        <label htmlFor={id} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>
    </div>
    );
  };
  
  export default FloatingLabelInput;
  