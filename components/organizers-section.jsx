"use client";
import ScrollReveal from "./scroll-reveal";
import { motion } from "framer-motion";
import { UserCircle2 } from "lucide-react";

// Faculty organizers data
const facultyOrganizers = [
  {
    name: "Mr. Adviteeya Kumar Udaya",
    role: "CEO",
    image: "/images/Adviteeya.jpeg",
    linkedin: "#",
  },
  {
    name: "Dr. Sendamarai P",
    role: "Principal",
    image: "/images/Sendamarai.jpg",
    linkedin: "#",
  },
  {
    name: "Dr. HK Govindaraju",
    role: "Dean",
    image: "/images/Govindaraju.jpg",
    linkedin: "#",
  },
  {
    name: "Hemanth D M",
    role: "Faculty Host",
    image: "/images/Hemanth.jpeg",
    linkedin: "#",
  },
  {
    name: "Dr. S J Sugumar",
    role: "Faculty Coordinator",
    image: "/images/Sugumar.jpg",
    linkedin: "#",
  },
  {
    name: "Dr. Abhilash S G",
    role: "Faculty Coordinator",
    image: "/images/Abhilash.jpg",
    linkedin: "#",
  },
];

// Student organizers data - reordered as requested
const studentOrganizers = [
  // Core Team
  {
    name: "Mahendra D M",
    role: "Student Coordinator",
    image: "/images/Mahendra_updated.jpg",
    linkedin: "#",
  },
  {
    name: "Shreya Pal",
    role: "Secretary",
    image: "/images/ShreyaPal_new.jpeg",
    linkedin: "#",
  },
  {
    name: "Pooja A",
    role: "Event Coordinator",
    image: "/images/PoojaA_new.jpeg",
    linkedin: "#",
  },
  {
    name: "Manoj Yadav N R",
    role: "Event Coordinator",
    image: "/images/Manoj.jpg",
    linkedin: "#",
  },
  {
    name: "Mohammed Yusuf",
    role: "Treasurer",
    image: "/images/YUSUF.jpg",
    linkedin: "#",
  },
  {
    name: "Vaishnavi",
    role: "Digital & Marketing Lead",
    image: "/images/Vaishnavi.jpg",
    linkedin: "#",
  },
  {
    name: "Kiran G V",
    role: "Technical Lead",
    image: "/images/Kiran.jpg",
    linkedin: "#",
  },
  {
    name: "Mahantesh S Karadi",
    role: "Technical Co-Lead",
    image: "/images/Mahantesh.jpg",
    linkedin: "#",
  },
  {
    name: "Mudasir Shariff",
    role: "UI/UX Designer",
    image: "/images/Mudasir.jpeg",
    linkedin: "#",
  },

  // AIML Coordinators
  {
    name: "Ashutosh Ranjan",
    role: "AIML Coordinator",
    image: "/images/Ashutosh.jpg",
    linkedin: "#",
  },
  {
    name: "Ganesh Jaishi",
    role: "AIML Coordinator",
    image: "/images/Ganesh.jpg",
    linkedin: "#",
  },

  // IoT Coordinators
  {
    name: "Kishore",
    role: "IoT Coordinator",
    image: "/images/Kishore.jpg",
    linkedin: "#",
  },
  {
    name: "Shreya Ravi Kusur",
    role: "IoT Coordinator",
    image: "/images/ShreyaRavi.jpg",
    linkedin: "#",
  },
  {
    name: "Geeta Shree",
    role: "IoT Coordinator",
    image: "/images/GeetaShree.jpeg",
    linkedin: "#",
  },
  {
    name: "Nihal",
    role: "IoT Coordinator",
    image: "/images/Nihal.jpg",
    linkedin: "#",
  },

  // Cybersecurity Coordinators
  {
    name: "Prajwal C",
    role: "Cybersecurity Coordinator",
    image: "/images/Prajwal.jpeg",
    linkedin: "#",
  },
  {
    name: "Ganavi N",
    role: "Cybersecurity Coordinator",
    image: "/images/Ganavi.jpeg",
    linkedin: "#",
  },
];

// Profile card component
const ProfileCard = ({ name, role, image, index }) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative w-32 h-32 md:w-40 md:h-40 mb-3 group">
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#3CDFFF] shadow-lg shadow-[#3CDFFF]/20 bg-[#1a1f35]">
          {image ? (
            <img
              src={image || "/placeholder.svg"}
              alt={name}
              className="w-full h-full object-cover"
              style={{ imageRendering: "crisp-edges" }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#1a1f35]">
              <UserCircle2 className="w-20 h-20 text-[#3CDFFF]/50" />
            </div>
          )}
        </div>
      </div>
      <h3 className="font-bold text-lg text-white text-center">{name}</h3>
      <div className="bg-[#1a1f35] px-3 py-1 rounded-full border border-[#3CDFFF] mt-1">
        <p className="text-[#3CDFFF] font-bold text-sm text-center">{role}</p>
      </div>
    </motion.div>
  );
};

export default function OrganizersSection() {
  return (
    <section id="organizers" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
            Our <span className="text-[#3CDFFF]">Organizers</span>
          </h2>
          <p className="text-gray-200 text-center max-w-2xl mx-auto mb-12">
            Meet the dedicated team behind Ideathon 2025
          </p>
        </ScrollReveal>

        {/* Faculty Organizers */}
        <ScrollReveal delay={0.2}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-10">
              Faculty Organizers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
              {facultyOrganizers.map((organizer, index) => (
                <ProfileCard key={index} {...organizer} index={index} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Student Organizers */}
        <ScrollReveal delay={0.4}>
          <div>
            <h3 className="text-2xl font-bold text-white text-center mb-10">
              Student Organizers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
              {studentOrganizers.map((organizer, index) => (
                <ProfileCard key={index} {...organizer} index={index} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
