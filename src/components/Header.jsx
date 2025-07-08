import { Link } from "react-router-dom"
import Button from "./Button"

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
        <div className="flex items-center gap-8">
        <h5>weeb</h5>
        <Link to="/" className="text-white text-lg font-semibold hover:underline">About us</Link>
          <Link to="/contact" className="text-white hover:underline">Contact</Link>
          </div>
          <div className="flex items-center gap-10">
          <Link to="/login" className="text-white hover:underline">Log In</Link>
          <Button to="/" className="text-[16px] py-[6px] px-[32px] hover:underline">
            Join Now
          </Button>
        </div>
      </nav>
    </header>
  )
}
