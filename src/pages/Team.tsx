import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card.js';
import { Button } from '@/components/ui/button.js';
import { LinkedinIcon, TwitterIcon, MailIcon, GithubIcon, ExternalLinkIcon } from 'lucide-react';

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const team = {
    leadership: [
      {
        name: "Aryush Tripathi",
        role: "Secretary",
        image: "assets/images/Aryush Bhaiya.png",
        bio: "Secretary of Finance Economics and Business Society(FEBS) @ IIT BBS | Business Consulting | Data Science",
        linkedin: "https://www.linkedin.com/in/aryush-tripathi-780a28262/",
        twitter: "https://twitter.com/janesmith",
        email: "jane@febs.org"
      },
      // {
      //   name: "Alex Johnson",
      //   role: "Vice President",
      //   image: "/avatars/alex-johnson.jpg",
      //   bio: "MBA from Harvard Business School, Former Tech Lead at Google",
      //   linkedin: "https://linkedin.com/in/alexj",
      //   twitter: "https://twitter.com/alexj",
      //   email: "alex@febs.org"
      // }
    ],
    coreTeam: [
      {
        name: "Divyanshu Dubey",
        role: "Data Science Club Head",
        image: "assets/images/Divyanshu Dubey Bhaiya.png",
        bio: "Building FEBS| Finance | Data Science and Machine Learning Enthusiast | Business Enthusiast |Electrical Engineer | Indian Institute of Technology Bhubaneswar",
        github: "https://github.com/sarahchen",
        linkedin: "https://www.linkedin.com/in/divyanshu-dubey-121261290/"
      },
      {
        name: "Aditya Raj",
        role: "Web Developer",
        image: "assets/images/Aditya Raj Bhaiya.png",
        bio: "Full Stack Web Developer(MERN)|| Graphics Designer|| Video Editor|| Member of FEBS , WEBnD |society of IITBBS",
        linkedin: "https://www.linkedin.com/in/aditya-raj-b13b491b7/"
      },
      {
        name: "Kushagra Tiwari",
        role: "Finance Club Head",
        image: "assets/images/Kushagra Tiwari Bhaiya.png",
        bio: "Finance head @FEBS || Machine learning || IIT Bhubaneswar '28",
        github: "https://github.com/lisakumar",
        linkedin: "https://www.linkedin.com/in/kushagra-tiwari-28a989291/"
      }
    ],
    advisors: [
      {
        name: "Kumar Saurabh",
        role: "Society Advisor",
        image: "assets/images/Kumar Saurabh Bhaiya.png",
        bio: "CSE'26 @IIT Bhubaneswar | Contingent Leader @Inter IIT Tech Meet 13.0 | Internship Coordinator @Career Development Cell | Ex-Secretary, FEBS",
        linkedin: "https://www.linkedin.com/in/india-kumar-saurabh/"
      },
      // {
      //   name: "Emma Thompson",
      //   role: "Industry Advisor",
      //   image: "/avatars/emma-thompson.jpg",
      //   bio: "CEO of TechVentures Inc.",
      //   linkedin: "https://linkedin.com/in/emmat"
      // }
    ]
  };

  const SocialLink = ({ href, icon: Icon, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
      aria-label={label}
    >
      <Icon size={20} />
    </a>
  );

  const MemberCard = ({ member, type }) => (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur animate-card">
      <CardHeader className="p-0 relative">
        <img 
          src={member.image} 
          alt={member.name}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            type === 'leadership' ? 'h-72' : 'h-48'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
        <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
        <p className="text-gray-600 mb-6">{member.bio}</p>
        <div className="flex gap-4">
          {member.linkedin && (
            <SocialLink href={member.linkedin} icon={LinkedinIcon} label="LinkedIn Profile" />
          )}
          {member.twitter && (
            <SocialLink href={member.twitter} icon={TwitterIcon} label="Twitter Profile" />
          )}
          {member.github && (
            <SocialLink href={member.github} icon={GithubIcon} label="GitHub Profile" />
          )}
          {member.email && (
            <SocialLink href={`mailto:${member.email}`} icon={MailIcon} label="Email" />
          )}
        </div>
      </CardContent>
    </Card>
  );

  const AdvisorCard = ({ advisor }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur animate-card">
      <CardContent className="p-8 flex gap-6 items-start">
        <img 
          src={advisor.image} 
          alt={advisor.name}
          className="w-24 h-24 rounded-full object-cover ring-2 ring-offset-2 ring-blue-100 transition-transform duration-300 group-hover:scale-105"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">{advisor.name}</h3>
          <p className="text-blue-600 font-semibold mb-3">{advisor.role}</p>
          <p className="text-gray-600 mb-4">{advisor.bio}</p>
          {advisor.linkedin && (
            <a
              href={advisor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <LinkedinIcon size={20} />
              <span>View Profile</span>
              <ExternalLinkIcon size={16} />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSIjNjM2MUM2IiAvPjwvc3ZnPg==')] bg-repeat" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent" />
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A diverse group of professionals dedicated to fostering excellence in business and science
            </p>
          </div>
        </header>

        {/* Filter Buttons */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex justify-center gap-4 flex-wrap">
            {['all', 'leadership', 'core team', 'advisors'].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="capitalize"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 pb-24">
          {/* Leadership Section */}
          {(activeFilter === 'all' || activeFilter === 'leadership') && (
            <section className="mb-20 animate-section">
              <h2 className="text-3xl font-bold text-center mb-12">Leadership</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {team.leadership.map((member, index) => (
                  <MemberCard 
                    key={member.name} 
                    member={member} 
                    type="leadership"
                  />
                ))}
              </div>
            </section>
          )}

          {/* Core Team Section */}
          {(activeFilter === 'all' || activeFilter === 'core team') && (
            <section className="mb-20 animate-section">
              <h2 className="text-3xl font-bold text-center mb-12">Core Team</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {team.coreTeam.map((member, index) => (
                  <MemberCard 
                    key={member.name} 
                    member={member} 
                    type="core"
                  />
                ))}
              </div>
            </section>
          )}

          {/* Advisors Section */}
          {(activeFilter === 'all' || activeFilter === 'advisors') && (
            <section className="animate-section">
              <h2 className="text-3xl font-bold text-center mb-12">Board of Advisors</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {team.advisors.map((advisor, index) => (
                  <AdvisorCard 
                    key={advisor.name} 
                    advisor={advisor}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-section {
          opacity: 1;
        }

        .animate-card {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Team;