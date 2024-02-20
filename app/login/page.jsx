const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <form className="bg-gray-800 shadow-lg rounded-md  w-3/5 px-8 py-6 ">
        <h2 className="text-3xl mb-3 text-center font-semibold leading-7 text-white">
          Login
        </h2>

        {/* gamail  */}
        <div>
          <label
            for="username"
            className="block capitalize text-md font-medium leading-6 text-white"
          >
            gmail
          </label>
          <input
            type="text"
            className="block flex-1 w-full border-0 bg-gray-900 py-1.5 pl-1 my-2 text-gray-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        {/* password */}
        <div>
          <label
            for="username"
            className="block capitalize text-md font-medium leading-6 text-white"
          >
            password
          </label>
          <input
            type="password"
            className="block flex-1 w-full border-0 bg-gray-900 py-1.5 pl-1 my-2 text-gray-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>

        <button
          type="submit"
          className="rounded-md w-full bg-blue-400 px-3 py-2 text-sm font-semibold text-gray shadow-sm"
        >
          Login
        </button>
        <p className="underline text-blue-600 mt-3">create an account</p>
        <p className="underline text-blue-600 mt-3">forgot password?</p>
      </form>
    </div>
  );
};

export default Login;
