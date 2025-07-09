import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className="flex flex-col items-center w-full mx-auto max-w-[880px] gap-8 py-16 px-4 text-center">
      <h1>Se connecter</h1>

      <form className="space-y-10">
        <div>
          <label></label>
          <input
            type="email"
            placeholder="Email"
            className="w-full text-center text-secondary placeholder-secondary px-4 py-2 bg-transparent border-b border-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:placeholder-transparent focus:border-secondary transition"/>
        </div>
        <div>
          <label></label>
          <input
            type="password"
            placeholder="Password"
            className="w-full text-center text-secondary placeholder-secondary px-4 py-2 bg-transparent border-b border-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:placeholder-transparent focus:border-secondary transition"/>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-secondary hover:bg-tertiary font-medium px-10 py-4 rounded-[8px]"
          >
            Se connecter
          </button>
        </div>
      </form>

      
      <div className="text-center mt-6">
        <Link to="/forgot-password" className="text-sm hover:text-tertiary">
          Mot de passe oublié ?
        </Link>
      </div>
    
      <div className="text-center mt-4 text-sm">
        Vous n'avez pas de compte ? Vous pouvez en {" "}
        <Link to="/signup" className="py-2 border-b hover:text-tertiary hover:border-tertiary font-semibold">
          créer un
        </Link>
      </div>
    </div>
  );
}
