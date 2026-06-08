"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Building, Cloud, Cog, Headphones, Mail, Shield, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLarge"
        background="aurora"
        cardStyle="inset"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Innovations",
          id: "#features",
        },
        {
          name: "Gallery",
          id: "#products",
        },
        {
          name: "Impact",
          id: "#metrics",
        },
        {
          name: "Insights",
          id: "#blog",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Inventify3d"
      button={{
        text: "Get in Touch",
        href: "#contact",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "canvas-reveal",
      }}
      title="Technology Today Innovation Tomorrow"
      description="Explore the cutting edge of what's possible. Inventify3d showcases breakthrough innovations reshaping industries and reimagining human potential."
      buttons={[
        {
          text: "Enter the Gallery",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/neon-robot-vacuum-cleaner_23-2151349235.jpg"
      imageAlt="3D holographic device"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/serious-beautiful-middle-aged-business-woman_1262-3072.jpg",
          alt: "Serious Beautiful Middle-aged Business Woman",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-positive-businesswoman_1098-3531.jpg",
          alt: "Close-up of positive businesswoman",
        },
        {
          src: "http://img.b2bpic.net/free-photo/blond-business-woman-blue-shirt_23-2148095792.jpg",
          alt: "Blond business woman in blue shirt",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smile-woman-talking-phone-looking-camera_23-2148317284.jpg",
          alt: "Smile woman talking at phone and looking at camera",
        },
        {
          src: "http://img.b2bpic.net/free-photo/male-graphic-designer-using-digital-tablet_1170-1092.jpg",
          alt: "Male graphic designer using digital tablet",
        },
      ]}
      avatarText="Join 500+ Innovators"
      marqueeItems={[
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/woman-glasses-augmented-reality-blue-social-media-cover_53876-97072.jpg",
          alt: "Woman in glasses augmented reality blue social media cover",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/person-using-ar-technology-perform-their-occupation_23-2151137357.jpg",
          alt: "Person using ar technology to perform their occupation",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/managing-smart-speakers-concept_23-2150170103.jpg",
          alt: "Managing smart speakers concept",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/gradient-code-logo-template_23-2148824103.jpg",
          alt: "Gradient code logo template",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/abstract-logo-3d_1017-1094.jpg",
          alt: "Abstract logo in 3d",
        },
      ]}
      marqueeSpeed={40}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Innovating the Future of Technology",
        },
        {
          type: "text",
          content: "Driven by a vision for tomorrow, Inventify3d leads the charge in technological advancements.",
        },
      ]}
      buttons={[
        {
          text: "Learn About Our Vision",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Cog,
          title: "Advanced AI Integration",
          description: "Harness the power of artificial intelligence to drive smarter decisions and automate complex tasks with unparalleled efficiency.",
        },
        {
          icon: Headphones,
          title: "Immersive XR Solutions",
          description: "Step into new realities with our cutting-edge Augmented and Virtual Reality technologies, creating engaging digital experiences.",
        },
        {
          icon: Building,
          title: "Precision Robotics",
          description: "From automation to intricate assembly, our robotic solutions redefine precision and productivity across various industries.",
        },
        {
          icon: Cloud,
          title: "Scalable Cloud Platforms",
          description: "Leverage robust, secure, and scalable cloud infrastructure designed to support your evolving business needs and foster growth.",
        },
        {
          icon: Shield,
          title: "Next-Gen Cybersecurity",
          description: "Protect your digital assets with our advanced cybersecurity solutions, offering unparalleled defense against evolving threats.",
        },
      ]}
      title="Redefining Technological Capabilities"
      description="At Inventify3d, we are constantly pushing the boundaries of what's possible, integrating state-of-the-art technologies to deliver transformative solutions."
      tag="Our Expertise"
      tagIcon={Sparkles}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      carouselMode="buttons"
      products={[
        {
          id: "P001",
          name: "Quantum AI Processor",
          price: "$2,500",
          variant: "Standard",
          imageSrc: "http://img.b2bpic.net/free-photo/view-vacuum-cleaner-robot-flat-surface-floor_23-2151736726.jpg",
          imageAlt: "futuristic smart home hub",
        },
        {
          id: "P002",
          name: "HoloLens AR Headset",
          price: "$3,200",
          variant: "Pro Edition",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-virtual-reality-glasses-smart-technology_53876-97055.jpg",
          imageAlt: "advanced AR headset render",
        },
        {
          id: "P003",
          name: "Modular Robotics Kit",
          price: "$1,800",
          variant: "Developer",
          imageSrc: "http://img.b2bpic.net/free-photo/view-tiny-music-boxes-collection_23-2150545638.jpg",
          imageAlt: "modular robot kit",
        },
        {
          id: "P004",
          name: "Bio-Sensor Health Patch",
          price: "$450",
          variant: "Wearable",
          imageSrc: "http://img.b2bpic.net/free-photo/love-neon-lights-composition_23-2149171568.jpg",
          imageAlt: "bio-sensor patch render",
        },
        {
          id: "P005",
          name: "Urban Delivery Drone",
          price: "$4,100",
          variant: "Autonomous",
          imageSrc: "http://img.b2bpic.net/free-photo/delivery-robot-futuristic-environment_23-2151189253.jpg",
          imageAlt: "compact urban drone",
        },
        {
          id: "P006",
          name: "Transparent Touch Tablet",
          price: "$2,999",
          variant: "Interactive",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-shapes-glowing-with-bright-holographic-colors_23-2151037275.jpg",
          imageAlt: "transparent touchscreen tablet",
        },
      ]}
      title="Explore Our Innovation Gallery"
      description="Dive into our showcase of breakthrough products and conceptual designs that are shaping the technological landscape."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      carouselMode="buttons"
      metrics={[
        {
          id: "M001",
          value: "25",
        },
      ]}
      title="Our Impact and Achievements"
      description="Driven by innovation, our work consistently delivers measurable impact and sets new benchmarks in the technology sector."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "GlobalTech",
        "InnovateCorp",
        "FutureWorks",
        "DataStream",
        "RoboDynamics",
        "Visionary AI",
        "Quantum Labs",
      ]}
      title="Trusted by Industry Leaders"
      description="Our innovations are embraced by leading organizations worldwide, driving their success and defining the future of technology."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "T001",
          name: "Alice Chen",
          date: "October 2023",
          title: "Revolutionary AI Solutions",
          quote: "Inventify3d's AI integration transformed our operations. The efficiency gains are truly revolutionary, exceeding all expectations. A game-changer!",
          tag: "AI Tech",
          avatarSrc: "http://img.b2bpic.net/free-photo/beauty-style-fashion-age-concept-close-up-portrait-positive-elegant-60-year-old-female-with-gray-hair-wrinkled-face-posing-against-white-brick-wall_344912-1854.jpg",
          avatarAlt: "Alice Chen",
          imageSrc: "http://img.b2bpic.net/free-photo/glowing-green-pink-led-bulb-background_23-2148055466.jpg",
          imageAlt: "Abstract AI pattern",
        },
        {
          id: "T002",
          name: "Marcus Blake",
          date: "November 2023",
          title: "Unmatched AR Experiences",
          quote: "The AR headset from Inventify3d provides an unparalleled immersive experience. It's intuitive, powerful, and has redefined our training modules.",
          tag: "XR Solutions",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-attractive-male-model-color-flash-light_158595-5105.jpg",
          avatarAlt: "Marcus Blake",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-network-communications-design-with-connecting-lines-dots_1048-13581.jpg",
          imageAlt: "Abstract AR network",
        },
        {
          id: "T003",
          name: "Sophia Lee",
          date: "December 2023",
          title: "Precision in Robotics",
          quote: "Their robotics kit is incredibly versatile and precise. It allowed our team to prototype complex solutions faster than ever before. Highly recommended.",
          tag: "Robotics",
          avatarSrc: "http://img.b2bpic.net/free-photo/happy-smiling-man-winter-sweater-is-posing-photographer-studio_613910-13711.jpg",
          avatarAlt: "Sophia Lee",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-data-center-providing-cloud-services-enabling-businesses-access-computing-resources-storage-demand-internet-server-room-infrastructure-3d-render-animation_482257-65963.jpg",
          imageAlt: "Abstract server room",
        },
        {
          id: "T004",
          name: "David Kim",
          date: "January 2024",
          title: "Forward-Thinking Health Tech",
          quote: "The bio-sensor patch is a marvel of miniaturization and accuracy. Inventify3d is truly at the forefront of health technology.",
          tag: "BioTech",
          avatarSrc: "http://img.b2bpic.net/free-photo/confident-businessman-smiling-outside-office-building_107420-74332.jpg",
          avatarAlt: "David Kim",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-blue-wave-background-with-smooth-gradient-soft-vertical-lines_474888-8023.jpg",
          imageAlt: "Abstract light beams",
        },
        {
          id: "T005",
          name: "Elena Rodriguez",
          date: "February 2024",
          title: "Excellence in Innovation",
          quote: "Inventify3d consistently delivers beyond expectations. Their commitment to innovation and quality is evident in every solution they provide.",
          tag: "Innovation",
          avatarSrc: "http://img.b2bpic.net/free-photo/people-doing-voguing-dance-moves-indoors_23-2151099016.jpg",
          avatarAlt: "Elena Rodriguez",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-flowing-twisted-strands_1048-12150.jpg",
          imageAlt: "Abstract microchip pattern",
        },
      ]}
      title="What Our Partners Say"
      description="Hear directly from industry leaders and innovators who have experienced the transformative power of Inventify3d's technology."
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      carouselMode="buttons"
      title="Insights and Innovation"
      description="Stay ahead with our latest articles, thought leadership, and deep dives into the technologies shaping tomorrow."
      blogs={[
        {
          id: "B001",
          category: "AI & Future",
          title: "The Dawn of Sentient AI: Opportunities and Ethics",
          excerpt: "Exploring the profound implications of advanced AI becoming truly sentient and the ethical frameworks required for its development.",
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-city-skyline-illuminated-by-night-lights-generated-by-ai_188544-26026.jpg",
          imageAlt: "Futuristic city skyline",
          authorName: "John Doe",
          authorAvatar: "http://img.b2bpic.net/free-photo/front-view-smiley-man-blue-blouse-posing_23-2148422234.jpg",
          date: "March 15, 2024",
        },
        {
          id: "B002",
          category: "Quantum Computing",
          title: "Unlocking New Frontiers with Quantum Algorithms",
          excerpt: "Delving into how quantum computing is set to revolutionize data processing, cryptography, and complex problem-solving.",
          imageSrc: "http://img.b2bpic.net/free-photo/glowing-spiral-dark_1048-11997.jpg",
          imageAlt: "Abstract quantum computing visualization",
          authorName: "Jane Smith",
          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-scientist-analyzing-liquid-sample-microscope-tray-laboratory-research-dna-genetic-lab-worker-with-safety-glasses-using-optical-glass-tool-scientific-development_482257-37316.jpg",
          date: "March 20, 2024",
        },
        {
          id: "B003",
          category: "Human-Tech Interaction",
          title: "The Evolution of Intuitive Interfaces in 3D Environments",
          excerpt: "A look at the next generation of user interfaces, focusing on gesture control, haptics, and adaptive learning in immersive 3D spaces.",
          imageSrc: "http://img.b2bpic.net/free-vector/modern-mindmap-with-neon-style_23-2147675849.jpg",
          imageAlt: "Hand interacting with holographic interface",
          authorName: "Mark Johnson",
          authorAvatar: "http://img.b2bpic.net/free-photo/business-executives-shaking-hands-near-lift_107420-65783.jpg",
          date: "March 25, 2024",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "animated-grid",
      }}
      tag="Connect"
      title="Join the Future of Innovation"
      description="Be the first to receive updates on our latest breakthroughs, exclusive insights, and invitations to our tech showcases."
      tagIcon={Mail}
      inputPlaceholder="Enter your email"
      buttonText="Subscribe Now"
      termsText="By subscribing, you agree to our Privacy Policy and to receive marketing communications from Inventify3d."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=rxnl9q"
      logoAlt="Inventify3d Logo"
      logoText="Inventify3d"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Press",
              href: "#",
            },
          ],
        },
        {
          title: "Products",
          items: [
            {
              label: "AI Solutions",
              href: "#features",
            },
            {
              label: "XR Technologies",
              href: "#features",
            },
            {
              label: "Robotics",
              href: "#features",
            },
            {
              label: "Gallery",
              href: "#products",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Blog",
              href: "#blog",
            },
            {
              label: "Support",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Inventify3d. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
