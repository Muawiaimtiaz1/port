import type React from 'react';

const Skills: React.FC = () => {
  const skillsData = [
    {
      id: 'cat-1',
      category: 'Programming Languages',
      skills: [
        { id: 'skill-1-1', name: 'Python', icon: '/images/python-icon.png', proficiency: 95 },
        { id: 'skill-1-2', name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', proficiency: 80 },
        { id: 'skill-1-3', name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', proficiency: 75 },
        { id: 'skill-1-4', name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', proficiency: 85 },
      ]
    },
    {
      id: 'cat-2',
      category: 'Machine Learning & Deep Learning',
      skills: [
        { id: 'skill-2-1', name: 'TensorFlow', icon: '/images/tensorflow-icon.png', proficiency: 90 },
        { id: 'skill-2-2', name: 'PyTorch', icon: '/images/pytorch-icon.png', proficiency: 95 },
        { id: 'skill-2-3', name: 'Scikit-Learn', icon: '/images/scikit-icon.png', proficiency: 90 },
        { id: 'skill-2-4', name: 'Keras', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg', proficiency: 85 },
      ]
    },
    {
      id: 'cat-3',
      category: 'Cloud & MLOps',
      skills: [
        { id: 'skill-3-1', name: 'AWS', icon: '/images/aws-icon.png', proficiency: 80 },
        { id: 'skill-3-2', name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', proficiency: 85 },
        { id: 'skill-3-3', name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', proficiency: 75 },
        { id: 'skill-3-4', name: 'MLflow', icon: 'https://raw.githubusercontent.com/mlflow/mlflow/master/mlflow/server/js/src/assets/mlflow-logo.svg', proficiency: 80 },
      ]
    },
    {
      id: 'cat-4',
      category: 'Data Processing & Visualization',
      skills: [
        { id: 'skill-4-1', name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', proficiency: 95 },
        { id: 'skill-4-2', name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', proficiency: 95 },
        { id: 'skill-4-3', name: 'Matplotlib', icon: 'https://matplotlib.org/stable/_static/logo2_compressed.svg', proficiency: 90 },
        { id: 'skill-4-4', name: 'Tableau', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg', proficiency: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Skills & Technologies
        </h2>

        <div className="space-y-10">
          {skillsData.map((category) => (
            <div key={category.id} className="bg-zinc-900 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-teal-500 mb-6">{category.category}</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill) => (
                  <div key={skill.id} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-3 p-2">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="max-w-full max-h-full"
                      />
                    </div>
                    <span className="text-gray-300 font-medium">{skill.name}</span>

                    <div className="w-full h-2 bg-zinc-800 rounded-full mt-2 overflow-hidden">
                      <div
                        className="h-full bg-teal-500 rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                    <span className="text-gray-400 text-xs mt-1">{skill.proficiency}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
