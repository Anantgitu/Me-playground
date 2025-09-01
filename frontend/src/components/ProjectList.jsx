import React from 'react';

const ProjectList = ({ projects }) => {
    const safeProjects = Array.isArray(projects) ? projects : [];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
                Projects ({safeProjects.length})
            </h2>

            {safeProjects.length === 0 ? (
                <div className="text-center text-gray-400 p-8 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
                    No projects match your search.
                </div>
            ) : (
                safeProjects.map((project) => (
                    <div key={project._id} className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700 hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>

                        {Array.isArray(project.skills) && project.skills.length > 0 && (
                            <div className="mb-4">
                                <h4 className="font-medium text-gray-200 mb-2">Technologies Used:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.skills.map((skill, index) => (
                                        <span key={index} className="bg-gray-700 text-gray-200 px-2 py-1 rounded-lg text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="flex gap-2 mt-4">
                            {project.links && project.links.length > 0 && project.links[0] && (
                                <a href={project.links[0]} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition text-sm">
                                    View Link
                                </a>
                            )}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProjectList;
