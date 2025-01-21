import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card.js';
import { Button } from '@/components/ui/button.js';
import { BookOpenIcon, DownloadIcon, LinkIcon, SearchIcon, ChevronDownIcon } from 'lucide-react';

const Resources = () => {
  const [activeSection, setActiveSection] = useState('all');
  
  const resources = {
    studyMaterials: [
      {
        title: "Financial Analysis Fundamentals",
        description: "Complete guide to financial statement analysis",
        type: "PDF",
        downloadLink: "/resources/financial-analysis.pdf"
      },
      {
        title: "Business Strategy Framework",
        description: "Strategic planning templates and guides",
        type: "PDF",
        downloadLink: "/resources/strategy-framework.pdf"
      }
    ],
    tools: [
      {
        title: "Data Analytics Suite",
        description: "Collection of data analysis tools",
        link: "https://analytics.febs.org",
        type: "Web App"
      },
      {
        title: "Project Management Kit",
        description: "Templates and software for project management",
        link: "https://pm.febs.org",
        type: "Web App"
      }
    ],
    research: [
      {
        title: "Market Analysis 2024",
        description: "Comprehensive market research report",
        type: "Research Paper",
        downloadLink: "/resources/market-analysis-2024.pdf"
      },
      {
        title: "Industry Trends Report",
        description: "Latest trends and insights",
        type: "Research Paper",
        downloadLink: "/resources/trends-2024.pdf"
      }
    ]
  };

  const FilterButton = ({ title, value }) => (
    <Button
      variant={activeSection === value ? "default" : "outline"}
      onClick={() => setActiveSection(value)}
      className="px-6 py-2"
    >
      {title}
    </Button>
  );

  const ResourceCard = ({ resource, type }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-2 hover:border-blue-500">
      <CardHeader>
        <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
          {resource.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-6 text-sm md:text-base">{resource.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-600">
            {resource.type}
          </span>
          {type === 'tool' ? (
            <Button variant="outline" className="hover:bg-blue-50 hover:text-blue-600" asChild>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                <LinkIcon className="w-4 h-4 mr-2" />
                Access Tool
              </a>
            </Button>
          ) : (
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href={resource.downloadLink} download>
                <DownloadIcon className="w-4 h-4 mr-2" />
                Download
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
            {(activeSection === 'all' || activeSection === 'studyMaterials') && (
              <section className="animate-fade-in">
                <div className="flex items-center gap-3 mb-8">
                  <BookOpenIcon className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold">Study Materials</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {resources.studyMaterials.map((resource, index) => (
                    <ResourceCard key={index} resource={resource} type="studyMaterial" />
                  ))}
                </div>
              </section>
            )}

            {(activeSection === 'all' || activeSection === 'tools') && (
              <section className="animate-fade-in">
                <div className="flex items-center gap-3 mb-8">
                  <LinkIcon className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold">Tools</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {resources.tools.map((tool, index) => (
                    <ResourceCard key={index} resource={tool} type="tool" />
                  ))}
                </div>
              </section>
            )}

            {(activeSection === 'all' || activeSection === 'research') && (
              <section className="animate-fade-in">
                <div className="flex items-center gap-3 mb-8">
                  <SearchIcon className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold">Research Papers</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {resources.research.map((paper, index) => (
                    <ResourceCard key={index} resource={paper} type="researchPaper" />
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