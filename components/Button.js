const Button = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 text-white py-2 px-4 rounded-md mt-8 w-full"
      >
        Send Notification
      </button>
    </>
  );
};

export default Button;
