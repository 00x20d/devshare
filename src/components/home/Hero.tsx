"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-surface to-background' />

      <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8'>
        <h1 className='text-4xl sm:text-6xl font-bold tracking-tight text-white mb-8'>
          Share Your Code.
          <br />
          <span className='text-gradient'>Connect with Developers.</span>
        </h1>

        <p className='mt-6 text-lg text-gray-300 max-w-3xl mx-auto'>
          Join a community of developers sharing projects, getting feedback, and
          collaborating on exciting new ideas.
        </p>

        <div className='mt-10 flex justify-center gap-4'>
          <Link
            href='/auth/sign-up'
            className='bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all'
          >
            Get Started
            <ArrowRight size={20} />
          </Link>

          <Link
            href='/explore'
            className='bg-surface hover:bg-surface-hover text-white px-8 py-3 rounded-lg font-medium border border-white/10 transition-all'
          >
            Explore Projects
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </div>
  );
};

export default Hero;
