import type React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projectsData = [
    {
      id: 'proj-1',
      title: 'Natural Language Processing Toolkit',
      description: 'An end-to-end NLP library for preprocessing, training, and deploying language models. Features include text classification, named entity recognition, sentiment analysis, and language generation.',
      image: 'https://cdn.sanity.io/images/xbn4zmfs/production/4e71637150747076accb322e2181e922daf53747-800x600.png',
      tags: ['NLP', 'PyTorch', 'HuggingFace', 'Python', 'REST API'],
      githubLink: 'https://github.com',
      demoLink: '#'
    },
    {
      id: 'proj-2',
      title: 'Computer Vision for Medical Imaging',
      description: 'Deep learning framework for medical image analysis, including segmentation, classification, and anomaly detection. Deployed in research hospitals with 96% accuracy in detecting abnormalities.',
      image: 'https://cdn.sanity.io/images/xbn4zmfs/production/531ef67826d0970f42dfbccc06a99054f4afc557-1200x1200.png',
      tags: ['Computer Vision', 'TensorFlow', 'Medical AI', 'CNN', 'Transfer Learning'],
      githubLink: 'https://github.com',
      demoLink: '#'
    },
    {
      id: 'proj-3',
      title: 'MLOps Optimization Pipeline',
      description: 'Automated MLOps pipeline for continuous training, evaluation, and deployment of ML models. Includes feature stores, model versioning, A/B testing, and monitoring systems.',
      image: 'https://cdn.sanity.io/images/xbn4zmfs/production/f74dbc6eb29149f30e5241925000cd050ff4594f-1200x630.png',
      tags: ['MLOps', 'Kubernetes', 'Docker', 'AWS', 'CI/CD', 'Monitoring'],
      githubLink: 'https://github.com',
      demoLink: '#'
    },
    {
      id: 'proj-4',
      title: 'Recommender System for E-commerce',
      description: 'Hybrid recommender system combining collaborative filtering and content-based approaches. Deployed to a live e-commerce platform resulting in 34% increase in click-through rates.',
      image: 'https://cdn.sanity.io/images/xbn4zmfs/production/9f1b82d9d18153797327bf1ee51ffb34bddad0f3-1503x2001.png',
      tags: ['Recommender Systems', 'Python', 'PyTorch', 'Implicit Feedback', 'FastAPI'],
      githubLink: 'https://github.com',
      demoLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Recent Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:translate-y-[-5px]"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              <div className="p-4">
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="px-2 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-500 hover:text-teal-400 transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-500 hover:text-teal-400 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
