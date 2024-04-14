const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  borderColorHover,
  backgroundColorHover,
  textColorHover
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        hover:${borderColorHover} hover:${backgroundColorHover} hover:${textColorHover}
        ${
          backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white hover:bg-coral-red-hover transition-colors"
        } rounded-full ${fullWidth && "w-full"} 
        
      `}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button;