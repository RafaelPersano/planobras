
import React from 'react';

interface ProjectManagerProps {
    projects: any[];
    selectedProjectId: number | null;
    onSelectProject: (id: number) => void;
    onNewProject: () => void;
}

const ProjectManager: React.FC<ProjectManagerProps> = ({ projects, selectedProjectId, onSelectProject, onNewProject }) => {
    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 bg-white border border-slate-200 rounded-2xl shadow-lg mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                    <h2 className="text-xl font-bold text-slate-800">Gerenciador de Projetos</h2>
                    <p className="text-slate-500 text-sm">Selecione um projeto para ver os detalhes ou crie um novo.</p>
                </div>
                <div className="flex items-center gap-4 w-full sm:w-auto">
                    <select
                        value={selectedProjectId || ''}
                        onChange={(e) => onSelectProject(Number(e.target.value))}
                        className="block w-full flex-grow pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        disabled={projects.length === 0}
                    >
                        <option value="" disabled>
                            {projects.length > 0 ? 'Selecione um projeto...' : 'Nenhum projeto encontrado'}
                        </option>
                        {projects.map(p => (
                            <option key={p.id} value={p.id}>{p.project_name || `Projeto #${p.id}`}</option>
                        ))}
                    </select>
                    <button
                        onClick={onNewProject}
                        className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-sm hover:bg-blue-700 transition-colors whitespace-nowrap"
                    >
                        + Novo Projeto
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectManager;
