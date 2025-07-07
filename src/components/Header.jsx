import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="w-full flex justify-center bg-[#0f1729] py-6">
      <nav
        className="w-[1000px] h-[96px] flex justify-between items-center px-6 rounded-[20px]"
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
          boxShadow:
            "0px 0px 15px 0px #00000012, 0px 25px 50px -12px #00000040",
        }}
      >
        <Link to="/" className="text-white text-lg font-semibold hover:underline">Accueil</Link>
        <div className="flex gap-6">
          <Link to="/contact" className="text-white hover:underline">Contact</Link>
          <Link to="/login" className="text-white hover:underline">Connexion</Link>
        </div>
      </nav>
    </header>
  )
}
