import {
  Youtube,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-[1440px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div>
          <h5 className="text-xl font-bold">weeb</h5>
        </div>

        {/* Columns */}
        <div>
          <h6 className="text-slate-400 font-semibold mb-3">PRODUCT</h6>
          <ul className="space-y-1 text-[#0F172A]">
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Browse</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        <div>
          <h6 className="text-slate-400 font-semibold mb-3">SOLUTIONS</h6>
          <ul className="space-y-1 text-[#0F172A]">
            <li><a href="#">Brainstorming</a></li>
            <li><a href="#">Ideation</a></li>
            <li><a href="#">Wireframing</a></li>
            <li><a href="#">Research</a></li>
          </ul>
        </div>

        <div>
          <h6 className="text-slate-400 font-semibold mb-3">RESOURCES</h6>
          <ul className="space-y-1 text-[#0F172A]">
            <li><a href="#">Help center</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Tutorials</a></li>
          </ul>
        </div>

        <div>
          <h6 className="text-slate-400 font-semibold mb-3">COMPANY</h6>
          <ul className="space-y-1 text-[#0F172A]">
            <li><a href="#">About</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-400 py-6 px-6 flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto">
        <p className="text-sm">@ 2025 Weeb, Inc. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#"><Youtube size={20} className="text-black" /></a>
          <a href="#"><Facebook size={20} className="text-black" /></a>
          <a href="#"><Twitter size={20} className="text-black" /></a>
          <a href="#"><Instagram size={20} className="text-black" /></a>
          <a href="#"><Linkedin size={20} className="text-black" /></a>
        </div>
      </div>
    </footer>
  );
}
