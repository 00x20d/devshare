"use client";
import { Code2, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Share Your Projects",
    description:
      "Showcase your work to a community of developers and get valuable feedback.",
  },
  {
    icon: Users,
    title: "Connect with Peers",
    description:
      "Find like-minded developers and collaborate on exciting projects.",
  },
  {
    icon: Zap,
    title: "Stay Updated",
    description:
      "Keep track of the latest trends and technologies in the development world.",
  },
];

const Features = () => {
  return (
    <section className='py-24 bg-surface'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-white mb-4'>
            Built for Developers
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Everything you need to share your projects and connect with other
            developers.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature) => (
            <div
              key={feature.title}
              className='p-6 rounded-lg bg-background border border-white/10 hover:border-primary/50 transition-all'
            >
              <feature.icon className='w-12 h-12 text-primary mb-4' />
              <h3 className='text-xl font-semibold text-white mb-2'>
                {feature.title}
              </h3>
              <p className='text-gray-400'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
