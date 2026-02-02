function Square({ value, onClick, disabled, isWinning }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-20 h-20
        rounded-xl
        shadow-md
        flex items-center justify-center
        text-4xl font-bold
        transition-all duration-200
        ${isWinning ? "bg-green-300 hover:bg-green-400" : "bg-white hover:bg-gray-100 hover:scale-105"}
        ${disabled ? "cursor-not-allowed opacity-70" : ""}
      `}
    >
      {value}
    </button>
  );
}

export default Square;
