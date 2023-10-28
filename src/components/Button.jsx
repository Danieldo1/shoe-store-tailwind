const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center border-2 gap-2 px-7 py-4 font-montserrat text-lg leading-none
      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` :
      ' bg-coral-red text-white border-coral-red'} rounded-full w-full' }`}
    >
      {label}

      {iconUrl && (
        <img
          src={iconUrl}
          alt="icon url"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
