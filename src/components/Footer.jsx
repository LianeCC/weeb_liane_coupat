import { SiYoutube, SiFacebook, SiX, SiInstagram, SiLinkedin, } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-white text-black">

      <div className="max-w-[1280px] mx-auto mt-10 py-16 flex flex-col md:flex-row md:flex-wrap md:justify-between pl-[80px] gap-20 sm:gap-10 md:gap-10">
        
        <div className="w-full md:w-1/6 text-left">
          <h5>weeb</h5>
        </div>

        <div className="w-full md:w-1/6 text-left">
          <h6 className="text-slate-400 mb-6">PRODUCT</h6>
          <ul className="space-y-6 text-[#0F172A]">
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Browse</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/6 text-left">
          <h6 className="text-slate-400 mb-6">SOLUTIONS</h6>
          <ul className="space-y-6 text-[#0F172A]">
            <li><a href="#">Brainstorming</a></li>
            <li><a href="#">Ideation</a></li>
            <li><a href="#">Wireframing</a></li>
            <li><a href="#">Research</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/6 text-left">
          <h6 className="text-slate-400 mb-6">RESSOURCES</h6>
          <ul className="space-y-6 text-[#0F172A]">
            <li><a href="#">Help center</a></li>
            <li><a href="articles">Blog</a></li>
            <li><a href="#">Tutorials</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/6 text-left">
          <h6 className="text-slate-400 mb-6">COMPANY</h6>
          <ul className="space-y-6 text-[#0F172A]">
            <li><a href="#">About</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#E2E8F0] py-10 px-6 flex flex-col md:flex-row items-center md:items-center justify-between gap-12 md:gap-0 max-w-[1280px] mx-auto">
        <p className="text-sm">@ 2025 Weeb, Inc. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#"><SiYoutube size={20} className="text-black" /></a>
          <a href="#"><SiFacebook size={20} className="text-black" /></a>
          <a href="#"><SiX size={20} className="text-black" /></a>
          <a href="#"><SiInstagram size={20} className="text-black" /></a>
          <a href="#"><SiLinkedin size={20} className="text-black" /></a>
        </div>
      </div>

    </footer>
  );
}
