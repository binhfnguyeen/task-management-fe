import Link from "next/link";
import { Globe, ChevronDown } from "lucide-react";
import { Logo } from "./logo";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const columnClass = "group cursor-pointer p-4 rounded-lg transition-colors duration-300 hover:bg-white/10";

  return (
    <footer className="bg-[#172b4d] text-white pt-10 pb-6">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
          <div className="col-span-1 p-4">
            <div className="flex items-center gap-2 font-bold text-2xl mb-4">
               <Logo />
            </div>
            <Link href="/login" className="block text-white font-semibold hover:underline mb-4">
              Log In
            </Link>
          </div>

          <div className={columnClass}>
            <h3 className="font-bold mb-4">About Trello</h3>
            <ul className="space-y-2 text-sm text-gray-300 group-hover:text-white">
              <li>
                <Link href="#">What's behind the boards</Link>
              </li>
            </ul>
          </div>

          <div className={columnClass}>
            <h3 className="font-bold mb-4">Jobs</h3>
            <ul className="space-y-2 text-sm text-gray-300 group-hover:text-white">
              <li>
                <Link href="#">Learn about open roles on the Trello team.</Link>
              </li>
            </ul>
          </div>

          <div className={columnClass}>
            <h3 className="font-bold mb-4">Apps</h3>
            <ul className="space-y-2 text-sm text-gray-300 group-hover:text-white">
              <li>
                <Link href="#">Download the Trello App for your Desktop or Mobile devices.</Link>
              </li>
            </ul>
          </div>

          <div className={columnClass}>
            <h3 className="font-bold mb-4">Contact us</h3>
            <ul className="space-y-2 text-sm text-gray-300 group-hover:text-white">
              <li>
                <Link href="#">Need anything? Get in touch and we can help.</Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-600 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors p-2 rounded hover:bg-white/10">
            <Globe className="h-4 w-4" />
            <span className="font-medium">Tiếng Việt</span>
            <ChevronDown className="h-3 w-3" />
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms</Link>
            <span>Copyright © 2024 Atlassian</span>
          </div>

          <div className="flex gap-4">
            <FaInstagram className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
            <FaFacebook className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
            <FaLinkedin className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
            <FaTwitter className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
            <FaYoutube className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}