"use client";
import { projects, ProjectsCommunityI } from "@/const/communityProjects";
import { stringToColor } from "@/lib/stringToColor";
import Image from "next/image";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ModalProject from "./ModalProject";
import style from "@/views/css/community_section.module.css";

function CommunitySection() {
  const [activeFilter, setActiveFilter] = useState("Popular");
  const [selectedProject, setSelectedProject] =
    useState<ProjectsCommunityI | null>(null);
  const filters = [
    "Discover",
    "Internal Tools",
    "Website",
    "Personal",
    "Consumer App",
    "B2B App",
    "Prototype",
  ];

  return (
    <div className={`relative px-6 py-52 ${style.bg_container_gradient}`}>
      <div className={`mx-auto w-4/5 z-10`}>
        {/* Community Section Container */}
        <div className="bg-[#1c1c1c] backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-white text-2xl font-semibold">
              From the Community
            </h2>
            <button className="text-white/70 hover:text-white text-sm font-medium transition-colors">
              View All
            </button>
          </div>

          {/* Filter Dropdown and Tabs */}
          <div className="flex items-center gap-6 mb-8">
            {/* Popular Dropdown */}
            <div className="relative">
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/20 transition-colors">
                <span className="text-sm font-medium">{activeFilter}</span>
                <BiChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                    activeFilter === filter
                      ? "bg-white/20 text-white border border-white/30"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white/5 hover:bg-white/10 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={265}
                    height={150}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Project Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-white font-medium text-sm truncate flex-1">
                      {project.title}
                    </h3>
                    <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.avatar ? (
                      <Image
                        src={project.avatar}
                        alt={project.author}
                        className="w-5 h-5 rounded-full bg-gray-600"
                        width={20}
                        height={20}
                      />
                    ) : (
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{
                          backgroundColor: stringToColor(project.author),
                        }}
                      >
                        {project.author.charAt(0).toUpperCase()}
                      </div>
                    )}

                    <span className="text-white/70 text-xs">
                      {project.remixes}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedProject && (
        <ModalProject
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
    </div>
  );
}
export default CommunitySection;
