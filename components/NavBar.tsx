import Link from "next/link";
import Image from "next/image";
import { JetBrains_Mono } from "next/font/google";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoShareSocialOutline } from "react-icons/io5";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function NavBar() {
    return (
        <div id="navbar" className={`w-full bg-neutral h-28 flex justify-between items-center ${jetBrainsMono.className} px-2 sm:px-36 fixed top-0`}>
          <div className="dropdown dropdown-right block sm:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost m-1"><RxHamburgerMenu size={24} /></div>
            <ul tabIndex={0} className="dropdown-content flex flex-col gap-2 menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
              <li><Link className="text-2xl" href="/">home</Link></li>
              <li><Link className="text-2xl" href="/projects">projects</Link></li>
              <li><Link className="text-2xl" href="/blog">blog</Link></li>
            </ul>
          </div>
          <div id="pages-links" className="items-center gap-40 hidden sm:flex">
            <Link className="text-2xl" href="/">home</Link>
            <Link className="text-2xl" href="/projects">projects</Link>
            <Link className="text-2xl" href="/blog">blog</Link>
          </div>
          <div className="dropdown dropdown-left block sm:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost m-1"><IoShareSocialOutline size={24} /></div>
            <ul tabIndex={0} className="dropdown-content flex flex-col gap-2 menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
              <li><Link href={process.env.NEXT_PUBLIC_MEDIUM_URL??""} target="_blank"><Image src={"/Medium-Icon.svg"} alt={"Medium Icon"} width={24} height={24} /> Medium</Link></li>
              <li><Link href={process.env.NEXT_PUBLIC_GITHUB_URL??""} target="_blank"><Image src={"/GitHub-Icon.svg"} alt={"GitHub Icon"} width={24} height={24} /> Github</Link></li>
              <li><Link href={process.env.NEXT_PUBLIC_TWITTER_URL??""} target="_blank"><Image src={"/X-Icon.svg"} alt={"Twitter Icon"} width={24} height={24} /> X</Link></li>
            </ul>
          </div>
          <div id="social-links" className="sm:flex items-center gap-24 hidden">
            <Link href={process.env.NEXT_PUBLIC_MEDIUM_URL??""} target="_blank"><Image src={"/Medium-Icon.svg"} alt={"Medium Icon"} width={24} height={24} /></Link>
            <Link href={process.env.NEXT_PUBLIC_GITHUB_URL??""} target="_blank"><Image src={"/GitHub-Icon.svg"} alt={"GitHub Icon"} width={24} height={24} /></Link>
            <Link href={process.env.NEXT_PUBLIC_TWITTER_URL??""} target="_blank"><Image src={"/X-Icon.svg"} alt={"Twitter Icon"} width={24} height={24} /></Link>
          </div>
        </div>
    )
}