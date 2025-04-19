import type React from 'react';

const Experience: React.FC = () => {
  const experienceData = [
    {
      id: 'exp-1',
      role: 'Machine Learning Engineer & Researcher',
      company: 'AI Research Lab, The Islamia University of Bahawalpur',
      location: 'Bahawalpur, Pakistan',
      period: '2022 - Present',
      description: 'Leading research projects focused on artificial intelligence, including natural language processing and computer vision applications. Working on the development of AI models for academic and industry use-cases. Co-authoring papers in local and international conferences while mentoring undergraduate students.',
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'Hugging Face Transformers']
    },
    {
      id: 'exp-2',
      role: 'Research Assistant',
      company: 'Department of Computer Science, IUB',
      location: 'Bahawalpur, Pakistan',
      period: '2020 - 2022',
      description: 'Assisted in multiple funded research projects involving deep learning and data analytics. Contributed to building ML models for healthcare diagnostics and smart surveillance systems. Managed data pipelines, model evaluation, and technical documentation.',
      technologies: ['Scikit-learn', 'Keras', 'Pandas', 'NumPy', 'Matplotlib', 'Git']
    },
    {
      id: 'exp-3',
      role: 'AI Intern',
      company: 'Innovative Tech Solutions',
      location: 'Lahore, Pakistan',
      period: 'Summer 2019',
      description: 'Worked on a prototype AI chatbot using NLP techniques for Urdu and English language processing. Developed basic models for text classification and intent recognition. Gained hands-on experience in deploying simple models on cloud environments.',
      technologies: ['NLTK', 'Flask', 'TensorFlow', 'Google Cloud Platform', 'HTML/CSS']
    }
  ]
  ;

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="bg-zinc-900 rounded-xl p-6 shadow-lg transition-all hover:shadow-xl hover:translate-y-[-5px]"
            >
              <div className="flex flex-col md:flex-row md:gap-6">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-teal-500">{exp.role}</h3>
                  <p className="text-white font-medium">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.location}</p>
                  <p className="text-gray-400 text-sm mt-2">{exp.period}</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={`${exp.id}-${tech}`}
                        className="px-2 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
