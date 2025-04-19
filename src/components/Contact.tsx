import type React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">
          I have got just what you need. Let's talk.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="text-teal-500" size={20} />
                <a href="tel:+12345678901" className="text-gray-300 hover:text-white transition-colors">
                  +1 (234) 567-8901
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-teal-500" size={20} />
                <a href="mailto:alex.morgan@example.com" className="text-gray-300 hover:text-white transition-colors">
                  engr.saeed@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="text-teal-500" size={20} />
                <span className="text-gray-300">Faisalabad, Pakistan</span>
              </div>
            </div>

            <p className="text-gray-400 mb-8">
              Feel free to reach out for collaboration, speaking opportunities, or just to say hi!
              I'm currently open to challenging ML Engineering roles and consulting projects.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                </svg>
                <span className="sr-only">GitHub</span>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 bg-zinc-800 rounded-md border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 bg-zinc-800 rounded-md border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 bg-zinc-800 rounded-md border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <textarea
                  rows={5}
                  placeholder="Message"
                  className="w-full px-4 py-2 bg-zinc-800 rounded-md border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
