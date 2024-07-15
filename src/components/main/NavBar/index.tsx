'use client';

import { useState } from 'react';

import Image from 'next/image';

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';

import Logo from '../../../assets/images/logo.png';

export default function MainSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: 'About Us',
      href: '/about',
      ariaCurrent: '',
    },
    {
      name: 'Programs',
      href: '/programs',
      ariaCurrent: '',
    },
    {
      name: 'Authorization',
      href: '/authorization',
      ariaCurrent: '',
    },
    {
      name: 'Partners',
      href: '/partners',
      ariaCurrent: '',
    },
  ];

  return (
    <Navbar
      className="bg-white"
      maxWidth="2xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarBrand>
          <Link className="flex flex-row" href="/">
            <Image src={Logo} alt="Logo" width={120} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <Button
          aria-label="Launch App"
          className="bg-[#10407c] border border-[#243474] text-white font-semibold rounded-full font-montserrat mr-4 text-xs shadow-lg"
          as={Link}
          size="sm"
          href="/login"
        >
          Login
        </Button>
      </NavbarContent>

      <NavbarContent className="sm:hidden text-[#10407c]" justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarBrand className="hidden sm:flex">
        <Link className="flex flex-row" href="/">
          <Image src={Logo} alt="Logo" width={120} />
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link
            className="text-[#10407c] text-sm pr-2 font-montserrat font-semibold"
            href="/about"
          >
            About Us
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            href="/programs"
            className="text-[#10407c] text-sm font-montserrat font-semibold pr-2"
            aria-current="page"
          >
            Programs
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className="text-[#10407c] text-sm font-montserrat font-semibold pr-2"
            href="/authorization"
          >
            Authorization
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className="text-[#10407c] text-sm font-montserrat font-semibold pr-2"
            href="/partners"
          >
            Partners
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <Button
          aria-label="Login"
          className="bg-[#10407c] border border-[#243474] text-white font-semibold rounded-full font-montserrat mr-4 text-sm shadow-lg"
          as={Link}
          size="md"
          href="/dashboard"
        >
          Login
        </Button>
      </NavbarContent>

      <NavbarMenu
        className={`bg-white ${isMenuOpen ? 'block' : 'hidden'} overflow-y-auto pt-2 pb-40 w-full`}
      >
        <div className="flex-1 h-5/6">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="my-6">
              <Link
                className="text-[#10407c] text-lg font-montserrat"
                color={'foreground'}
                href={item.href}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>

        <div className="text-[#10407c] text-lg font-montserrat justify-center items-center flex">
          Join the community!
        </div>

        <div className="w-full justify-center items-center flex flex-row">
          <div className="w-2/3 text-[#10407c] text-lg font-montserrat justify-between items-center mt-4 flex flex-row">
            <Link
              className="text-[#10407c] text-lg font-montserrat"
              color={'foreground'}
              href="https://www.instagram.com/"
              size="lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1a14.66 14.66 0 0 0-4.58 0a10.14 10.14 0 0 0-.53-1.1a16 16 0 0 0-4.13 1.3a17.33 17.33 0 0 0-3 11.59a16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83a3.39 3.39 0 0 0 .42-.33a11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84a12.41 12.41 0 0 0 1.08 1.78a16.44 16.44 0 0 0 5.06-2.59a17.22 17.22 0 0 0-3-11.59a16.09 16.09 0 0 0-4.09-1.35M8.68 14.81a1.94 1.94 0 0 1-1.8-2a1.93 1.93 0 0 1 1.8-2a1.93 1.93 0 0 1 1.8 2a1.93 1.93 0 0 1-1.8 2m6.64 0a1.94 1.94 0 0 1-1.8-2a1.93 1.93 0 0 1 1.8-2a1.92 1.92 0 0 1 1.8 2a1.92 1.92 0 0 1-1.8 2"
                />
              </svg>
            </Link>
            <Link
              className="text-[#10407c] text-lg font-montserrat"
              color={'foreground'}
              href="https://www.instagram.com/"
              size="lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008"
                />
                <circle cx="16.806" cy="7.207" r="1.078" fill="currentColor" />
                <path
                  fill="currentColor"
                  d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71c0 2.442 0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419a4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217m-1.218 9.532a5.043 5.043 0 0 1-.311 1.688a2.987 2.987 0 0 1-1.712 1.711a4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311a2.985 2.985 0 0 1-1.719-1.711a5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654c0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311a2.991 2.991 0 0 1 1.712 1.712a5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655c0 2.436 0 2.698-.043 3.654z"
                />
              </svg>
            </Link>
            <Link
              className="text-[#10407c] text-lg font-montserrat"
              color={'foreground'}
              href="https://www.instagram.com/"
              size="lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
              >
                <circle cx="4.983" cy="5.009" r="2.188" fill="currentColor" />
                <path
                  fill="currentColor"
                  d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"
                />
              </svg>
            </Link>
            <Link
              className="text-[#10407c] text-lg font-montserrat"
              color={'foreground'}
              href="https://www.instagram.com/"
              size="lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.633 7.997c.013.175.013.349.013.523c0 5.325-4.053 11.461-11.46 11.461c-2.282 0-4.402-.661-6.186-1.809c.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721a4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062c.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973a4.02 4.02 0 0 1-1.771 2.22a8.073 8.073 0 0 0 2.319-.624a8.645 8.645 0 0 1-2.019 2.083"
                />
              </svg>
            </Link>
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
