import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiQiita } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-zinc-700 text-gray-100 mt-20">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-200">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/works" className="hover:text-blue-400 transition-colors">
                  Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-200">SNS</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ryuno3"
                target="_blank"
                rel="Github"
                className="hover:text-blue-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://twitter.com/ryuno3_dev"
                target="_blank"
                rel="X(旧Twitter)"
                className="hover:text-blue-400 transition-colors"
              >
                <FaXTwitter size={24} />
              </a>
              <a
                href="https://Qiita.com/ryuno3"
                target="_blank"
                rel="Qiita"
                className="hover:text-blue-400 transition-colors"
              >
                <SiQiita size={28} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-200">お問い合わせ</h3>
            <p className="text-gray-300">お気軽にご連絡ください</p>
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
              お問い合わせフォームへ
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-600 mt-8 pt-8 text-center">
          <small className="text-gray-400">
            &copy; {new Date().getFullYear()} Portfolio by Ryunosuke. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
