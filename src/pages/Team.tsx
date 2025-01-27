import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card.js';
import { Button } from '@/components/ui/button.js';
import { LinkedinIcon, TwitterIcon, MailIcon, GithubIcon, ExternalLinkIcon } from 'lucide-react';
import { LucideProps } from 'lucide-react';

type TeamMember = {
    name: string;
    role: string;
    image: string;
    bio: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
};

type Advisor = {
    name: string;
    role: string;
    image: string;
    bio: string;
    linkedin?: string;
};

type Team = {
    executiveTeam: TeamMember[];
    managerialTeam: TeamMember[];
    advisory: Advisor[];
    societyMembers: TeamMember[];
};

const Team: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('executive team');

    const team: Team = {
        executiveTeam: [
            {
                name: "Aryush Tripathi",
                role: "Secretary",
                image: "assets/images/Aryush Bhaiya.png",
                bio: "Secretary of Finance Economics and Business Society(FEBS) @ IIT BBS | Business Consulting | Data Science",
                linkedin: "https://www.linkedin.com/in/aryush-tripathi-780a28262/",
                twitter: "https://twitter.com/janesmith",
                email: "jane@febs.org"
            }
        ],
        managerialTeam: [
            {
                name: "Aman Gupta",
                role: "Public Relation and Outreach Head",
                image: "https://drive.google.com/open?id=13LiAVCW4JE45rDdlGSksSjmKqwuXpZr-",
                bio: "Public Relation and Outreach Head | Year: 2nd year | IIT Bhubaneswar",
                linkedin: "https://www.linkedin.com/in/aman-gupta-1a5622215"
            }
        ],
        advisory: [
            {
                name: "Kumar Saurabh",
                role: "Society Advisor",
                image: "assets/images/Kumar Saurabh Bhaiya.png",
                bio: "CSE'26 @IIT Bhubaneswar | Contingent Leader @Inter IIT Tech Meet 13.0 | Internship Coordinator @Career Development Cell | Ex-Secretary, FEBS",
                linkedin: "https://www.linkedin.com/in/india-kumar-saurabh/"
            }
        ],
        societyMembers: [
            {
                name: "Aditya Kumar Giri",
                role: "Team Coordinator",
                image: "https://drive.google.com/open?id=1WgtMn815sI_5b6dfEoCGEw4NSaqcTQmg",
                bio: "Team Coordinator | Year: 2nd year | IIT Bhubaneswar",
                linkedin: "https://www.linkedin.com/in/aditya-giri-79884a291"
            }
        ]
    };

    const colorPalette = {
        primary: '#2ecc71',
        secondary: '#3498db',
        tertiary: '#1abc9c',
        text: '#ffffff',
        background: '#000000',
        buttonHover: '#27ae60'
    };

    
    
    const SocialLink: React.FC<{ href: string; icon: React.FC<LucideProps>; label: string }> = ({ href, icon: Icon, label }) => (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-full text-white hover:bg-white/20 transition-colors"
            aria-label={label}
        >
            <Icon size={20} />
        </a>
    );

    const MemberCard: React.FC<{ member: TeamMember; type: string }> = ({ member, type }) => (
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-emerald-400 to-blue-500">
            <CardHeader className="p-0 relative">
                <img 
                    src={member.image} 
                    alt={member.name} 
                    className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                        type === 'executive team' ? 'h-72' : 'h-48'
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardHeader>
            <CardContent className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-emerald-200 font-semibold mb-3">{member.role}</p>
                <p className="mb-6">{member.bio}</p>
                <div className="flex gap-4">
                    {member.linkedin && <SocialLink href={member.linkedin} icon={LinkedinIcon} label="LinkedIn Profile" />}
                    {member.twitter && <SocialLink href={member.twitter} icon={TwitterIcon} label="Twitter Profile" />}
                    {member.email && <SocialLink href={`mailto:${member.email}`} icon={MailIcon} label="Email" />}
                </div>
            </CardContent>
        </Card>
    );

    const AdvisorCard: React.FC<{ advisor: Advisor }> = ({ advisor }) => (
        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-teal-400 to-blue-500">
            <CardContent className="p-8 flex gap-6 items-start text-white">
                <img 
                    src={advisor.image} 
                    alt={advisor.name} 
                    className="w-24 h-24 rounded-full object-cover ring-2 ring-offset-2 ring-emerald-200 transition-transform duration-300 group-hover:scale-105"
                />
                <div>
                    <h3 className="text-xl font-bold mb-2">{advisor.name}</h3>
                    <p className="text-emerald-200 font-semibold mb-3">{advisor.role}</p>
                    <p className="mb-4">{advisor.bio}</p>
                    {advisor.linkedin && (
                        <a 
                            href={advisor.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-emerald-200 hover:text-white"
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
        <div className="min-h-screen bg-black">
            <header className="py-24 text-center relative">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-6 text-white">Meet Our Team</h1>
                    <p className="text-xl max-w-2xl mx-auto leading-relaxed text-gray-300">
                        A diverse group of professionals dedicated to fostering excellence in business and science
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 mb-12">
                <div className="flex justify-center gap-4 flex-wrap">
                    {['executive team', 'managerial team', 'advisory', 'society members'].map((filter) => (
                        <Button
                            key={filter}
                            variant={activeFilter === filter ? "default" : "outline"}
                            onClick={() => setActiveFilter(filter)}
                            className={`capitalize ${
                                activeFilter === filter 
                                    ? 'bg-gradient-to-r from-emerald-400 to-blue-500 text-white border-none' 
                                    : 'text-white border-emerald-400 hover:bg-emerald-400/20'
                            }`}
                        >
                            {filter}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 pb-24">
                {activeFilter === 'executive team' && (
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">Executive Team</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {team.executiveTeam.map((member) => (
                                <MemberCard key={member.name} member={member} type="executive team" />
                            ))}
                        </div>
                    </section>
                )}

                {activeFilter === 'managerial team' && (
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">Managerial Team</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {team.managerialTeam.map((member) => (
                                <MemberCard key={member.name} member={member} type="managerial team" />
                            ))}
                        </div>
                    </section>
                )}

                {activeFilter === 'advisory' && (
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">Advisory</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {team.advisory.map((advisor) => (
                                <AdvisorCard key={advisor.name} advisor={advisor} />
                            ))}
                        </div>
                    </section>
                )}

                {activeFilter === 'society members' && (
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">Society Members</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {team.societyMembers.map((member) => (
                                <MemberCard key={member.name} member={member} type="society members" />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default Team;
