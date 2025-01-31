import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpenIcon, DownloadIcon, LinkIcon, SearchIcon, ChevronRightIcon } from "lucide-react";

const Resources = () => {
    const [activeSection, setActiveSection] = useState("all");
    const [hoveredCard, setHoveredCard] = useState(null);

    const resources = {
        studyMaterials: [
            {
                title: "Financial Analysis Fundamentals",
                description: "Complete guide to financial statement analysis with practical examples and industry best practices.",
                type: "PDF",
                downloadLink: "/resources/financial-analysis.pdf",
                size: "2.4 MB",
                lastUpdated: "Jan 15, 2024",
            },
            {
                title: "Business Strategy Framework",
                description: "Strategic planning templates and guides for developing robust business strategies.",
                type: "PDF",
                downloadLink: "/resources/strategy-framework.pdf",
                size: "1.8 MB",
                lastUpdated: "Jan 20, 2024",
            },
        ],
        tools: [
            {
                title: "Data Analytics Suite",
                description: "Powerful collection of data analysis tools for financial modeling and market research.",
                link: "https://analytics.febs.org",
                type: "Web App",
                users: "2.5k+ active users",
                lastUpdated: "Real-time",
            },
            {
                title: "Project Management Kit",
                description: "Comprehensive templates and software for effective project management and tracking.",
                link: "https://pm.febs.org",
                type: "Web App",
                users: "1.8k+ active users",
                lastUpdated: "Real-time",
            },
        ],
        research: [
            {
                title: "Market Analysis 2024",
                description: "In-depth market research report covering emerging trends and industry forecasts.",
                type: "Research Paper",
                downloadLink: "/resources/market-analysis-2024.pdf",
                size: "3.2 MB",
                lastUpdated: "Jan 25, 2024",
            },
            {
                title: "Industry Trends Report",
                description: "Latest insights on market dynamics, competitive landscape, and growth opportunities.",
                type: "Research Paper",
                downloadLink: "/resources/trends-2024.pdf",
                size: "2.8 MB",
                lastUpdated: "Jan 22, 2024",
            },
        ],
    };

    const FilterButton = ({ title, value }) => (
        <Button
            variant={activeSection === value ? "default" : "outline"}
            onClick={() => setActiveSection(value)}
            className={`
                px-6 py-2 transition-all duration-300
                ${activeSection === value 
                    ? "bg-[#41E5BD] hover:bg-[#2CCAA3] text-black shadow-lg shadow-[#41E5BD]/20"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20 hover:shadow-lg hover:shadow-[#41E5BD]/10"
                }
            `}
        >
            {title}
        </Button>
    );

    const ResourceCard = ({ resource, type, index }) => (
        <Card 
            className="group relative overflow-hidden transition-all duration-500 hover:shadow-xl bg-white/10 backdrop-blur-sm border-2 border-white/10 hover:border-[#41E5BD]"
            onMouseEnter={() => setHoveredCard(`${type}-${index}`)}
            onMouseLeave={() => setHoveredCard(null)}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#41E5BD]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-[#41E5BD] transition-colors flex items-center justify-between">
                    {resource.title}
                    <ChevronRightIcon 
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                            hoveredCard === `${type}-${index}` ? "translate-x-1" : "-translate-x-2 opacity-0"
                        }`}
                    />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-white/80 mb-6 text-sm md:text-base leading-relaxed">
                    {resource.description}
                </p>
                <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-white/60">
                        <span>Last updated: {resource.lastUpdated}</span>
                        {resource.size && <span>{resource.size}</span>}
                        {resource.users && <span>{resource.users}</span>}
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium px-3 py-1 bg-[#41E5BD]/10 rounded-full text-[#41E5BD] border border-[#41E5BD]/20">
                            {resource.type}
                        </span>
                        {type === "tool" ? (
                            <Button
                                variant="outline"
                                className="hover:bg-[#41E5BD]/10 hover:text-[#41E5BD] border-[#41E5BD]/20"
                                asChild
                            >
                                <a href={resource.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                    <LinkIcon className="w-4 h-4 mr-2" /> Access Tool
                                </a>
                            </Button>
                        ) : (
                            <Button
                                variant="default"
                                className="bg-[#41E5BD] hover:bg-[#2CCAA3] text-black shadow-lg shadow-[#41E5BD]/20"
                                asChild
                            >
                                <a href={resource.downloadLink} download className="flex items-center">
                                    <DownloadIcon className="w-4 h-4 mr-2" /> Download
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );

    return (
        <div className="min-h-screen relative">
            {/* Lighter gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#025A6A] via-[#00C2CC] to-[#41E5BD]/50" />
            
            {/* Noise texture */}
            <div className="absolute inset-0 bg-[url('/api/placeholder/8/8')] opacity-10" />
            
            {/* Overlay gradient for extra depth */}
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <header className="text-center mb-16 space-y-6">
                        <div className="inline-block">
                            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#41E5BD] to-[#2666B0] bg-clip-text text-transparent">
                                Resources
                            </h1>
                            <div className="h-1 w-full bg-gradient-to-r from-[#41E5BD] to-[#2666B0] rounded-full mt-2 transform origin-left scale-x-0 animate-scale-x" />
                        </div>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Access our comprehensive collection of study materials, tools, and research papers
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <FilterButton title="All Resources" value="all" />
                            <FilterButton title="Study Materials" value="studyMaterials" />
                            <FilterButton title="Tools" value="tools" />
                            <FilterButton title="Research" value="research" />
                        </div>
                    </header>

                    <div className="space-y-16">
                        {(activeSection === "all" || activeSection === "studyMaterials") && (
                            <section className="animate-fade-in">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 bg-[#41E5BD]/10 rounded-lg">
                                        <BookOpenIcon className="w-8 h-8 text-[#41E5BD]" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white">Study Materials</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {resources.studyMaterials.map((resource, index) => (
                                        <ResourceCard 
                                            key={index} 
                                            resource={resource} 
                                            type="studyMaterial" 
                                            index={index} 
                                        />
                                    ))}
                                </div>
                            </section>
                        )}

                        {(activeSection === "all" || activeSection === "tools") && (
                            <section className="animate-fade-in">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 bg-[#41E5BD]/10 rounded-lg">
                                        <LinkIcon className="w-8 h-8 text-[#41E5BD]" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white">Tools</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {resources.tools.map((tool, index) => (
                                        <ResourceCard 
                                            key={index} 
                                            resource={tool} 
                                            type="tool" 
                                            index={index} 
                                        />
                                    ))}
                                </div>
                            </section>
                        )}

                        {(activeSection === "all" || activeSection === "research") && (
                            <section className="animate-fade-in">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 bg-[#41E5BD]/10 rounded-lg">
                                        <SearchIcon className="w-8 h-8 text-[#41E5BD]" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white">Research Papers</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {resources.research.map((paper, index) => (
                                        <ResourceCard 
                                            key={index} 
                                            resource={paper} 
                                            type="researchPaper" 
                                            index={index} 
                                        />
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;