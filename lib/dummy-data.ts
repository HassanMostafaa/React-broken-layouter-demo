import { BasicCard, ImageCard } from './types';

export const cardData: BasicCard[] = [
  {
    id: 'design-principles',
    title: 'Modern Design Principles',
    description: 'Simple, clean, effective.',
    ctaText: 'Learn More',
  },
  {
    id: 'component-arch',
    title: 'Component Architecture',
    description:
      'Understanding component-based development and its impact on building scalable applications. Dive deep into the world of reusable components, state management, and component lifecycle. Learn best practices for creating maintainable and efficient component hierarchies that scale with your application. Explore advanced patterns and techniques used by industry experts to build robust and flexible component architectures that stand the test of time and evolving requirements.',
    ctaText: 'Explore',
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    description:
      "Learn essential techniques for optimizing web application performance. This comprehensive guide covers everything from code splitting and lazy loading to image optimization and caching strategies. Understand how to measure, analyze, and improve your application's performance to provide the best possible user experience. Deep dive into browser rendering, network optimization, and advanced debugging techniques.",
    ctaText: 'Optimize Now',
  },
  {
    id: 'responsive',
    title: 'Responsive Layouts',
    description: 'Create fluid designs that adapt.',
    ctaText: 'Get Started',
  },
  {
    id: 'accessibility',
    title: 'Accessibility Standards',
    description: 'Make web accessible for everyone.',
    ctaText: 'Make Accessible',
  },
  {
    id: 'state-mgmt',
    title: 'State Management',
    description:
      'Explore advanced state management techniques for complex applications. From local component state to global application state, understand when and how to implement different state management solutions. Master the art of managing application state across multiple components and learn how to handle complex data flows efficiently.',
    ctaText: 'Manage State',
  },
];

export const cardWithImageData: ImageCard[] = [
  {
    id: 'nature-design',
    title: 'Nature-Inspired Design',
    description: 'Biophilic design principles.',
    imageUrl:
      'https://images.unsplash.com/photo-1741866987680-5e3d7f052b87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ctaText: 'Discover',
  },
  {
    id: 'urban-arch',
    title: 'Urban Architecture',
    description:
      'Exploring how urban architecture principles can be applied to digital design systems. Discover how the principles of city planning and architectural design translate into creating structured and intuitive digital spaces. Learn to build digital environments that guide users naturally through complex information hierarchies while maintaining visual harmony and functional efficiency. Understanding the relationship between physical and digital architecture opens new perspectives on user experience design.',
    imageUrl:
      'https://images.unsplash.com/photo-1682686581362-796145f0e123?auto=format&fit=crop&w=800&q=80',
    ctaText: 'Read More',
  },
  {
    id: 'minimalist',
    title: 'Minimalist Approach',
    description: 'Less is more in design.',
    imageUrl:
      'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80',
    ctaText: 'View Details',
  },
  {
    id: 'color-theory',
    title: 'Digital Color Theory',
    description:
      'Master the art and science of color in digital design. From understanding color psychology to creating effective color schemes for different contexts, this comprehensive guide covers everything you need to know about working with color in the digital realm. Learn about color accessibility, emotional impact, and how to create color systems that scale across entire applications. Explore the science behind color perception and how it influences user behavior and engagement in digital interfaces.',
    imageUrl:
      'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&w=800&q=80',
    ctaText: 'Explore Colors',
  },
  {
    id: 'interactive',
    title: 'Interactive Patterns',
    description: 'Create engaging experiences.',
    imageUrl:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
    ctaText: 'Learn Patterns',
  },
  {
    id: 'design-systems',
    title: 'Design Systems',
    description:
      'Learn how to create and maintain comprehensive design systems that scale. From establishing visual languages to documenting component libraries, understand the principles behind successful design systems. Explore real-world examples of how design systems help teams create consistent, efficient, and maintainable digital products across multiple platforms and applications. Master the art of creating flexible yet consistent design tokens and components that can adapt to various brand requirements while maintaining system integrity.',
    imageUrl:
      'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80',
    ctaText: 'Build Systems',
  },
].sort(() => Math.random() - 0.5);
