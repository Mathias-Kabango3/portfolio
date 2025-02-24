import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8">
            <div className="text-white/40">&copy;2025 All rights reserved</div>
            <nav className="flex flex-col gap-4 md:flex-row">
              <Link
                href="https://github.com/Mathias-Kabango3"
                className="inline-flex items-center gap-1.5 px-4">
                <FaGithub className="md:size-10 size-8 text-emerald-300" />
                <span className="font-semibold">Github</span>
              </Link>
              <Link
                href="https://linkedin.com/in/mathias-kabango"
                className="inline-flex items-center gap-1.5 px-4">
                <FaLinkedinIn className="md:size-10 size-8 text-emerald-300" />
                <span className="font-semibold">LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/kabangomathias/"
                className="inline-flex items-center gap-1.5 px-4">
                <FaInstagram className="size-8 md:size-10 text-emerald-300" />
                <span className="font-semibold">Instagram</span>
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};
