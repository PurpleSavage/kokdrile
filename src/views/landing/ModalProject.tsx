import { ProjectsCommunityI } from "@/const/communityProjects";
import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

interface ModalProjectProps {
  selectedProject: ProjectsCommunityI;
  setSelectedProject: (project: ProjectsCommunityI | null) => void;
}

function ModalProject({
  selectedProject,
  setSelectedProject,
}: ModalProjectProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setSelectedProject(null)}
      />

      {/* Modal Content */}
      <div className="relative bg-black/90 backdrop-blur-md rounded-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
        >
          <CgClose className="w-5 h-5 text-white" />
        </button>

        {/* Modal Header */}
        <div className="p-6 pb-0">
          <div className="flex items-start gap-4 mb-4">
            <Image
              src={selectedProject.avatar || "/placeholder.svg"}
              alt={selectedProject.author}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full bg-gray-600"
            />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-white text-2xl font-bold">
                  {selectedProject.title}
                </h2>
                {selectedProject.featured && (
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-white/70 text-sm mb-2">
                by {selectedProject.author}
              </p>
              <div className="flex items-center gap-4 text-sm text-white/60">
                <div className="flex items-center gap-1">
                  <BiHeart className="w-4 h-4" />
                  <span>{selectedProject.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BsEye className="w-4 h-4" />
                  <span>{selectedProject.views}</span>
                </div>
                <span>{selectedProject.createdAt}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Image */}
        <div className="px-6 mb-6">
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={780}
              height={440}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="px-6 pb-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Description */}
            <div className="md:col-span-2">
              <h3 className="text-white font-semibold mb-3">Description</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                {selectedProject.description}
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-medium mb-2">Category</h4>
                <span className="text-white/70 text-sm">
                  {selectedProject.category}
                </span>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-medium mb-2">Community Stats</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Remixes</span>
                    <span className="text-white">
                      {selectedProject.remixes}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Likes</span>
                    <span className="text-white">{selectedProject.likes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Views</span>
                    <span className="text-white">{selectedProject.views}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
                  <FaExternalLinkAlt className="w-4 h-4" />
                  View Project
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-4 rounded-xl transition-colors border border-white/20 flex items-center justify-center gap-2">
                  <FaGithub className="w-4 h-4" />
                  Remix This
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalProject;
