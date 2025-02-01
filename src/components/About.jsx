import { useEffect, useState } from 'react';

const AboutSection = () => {
  // Counting animation logic
  const [count, setCount] = useState({ experience: 0, clients: 0, projects: 0 });
  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount.experience < 10) return { ...prevCount, experience: prevCount.experience + 1 };
        clearInterval(interval1);
        return prevCount;
      });
    }, 100);

    const interval2 = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount.clients < 200) return { ...prevCount, clients: prevCount.clients + 10 };
        clearInterval(interval2);
        return prevCount;
      });
    }, 50);

    const interval3 = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount.projects < 50) return { ...prevCount, projects: prevCount.projects + 2 };
        clearInterval(interval3);
        return prevCount;
      });
    }, 200);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <section className="bg-gray-50 text-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-indigo-600 mb-8">About Us</h2>

        {/* About Us Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              At <span className='font-bold'>Digital Skill House</span>, we are passionate about delivering innovative and
              reliable software solutions that drive business success. Our team of experts is
              committed to providing world-class development, design, and digital transformation
              services that help our clients achieve their goals efficiently and effectively.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With over 10 years of experience in the industry, we have built a reputation for
              excellence by consistently exceeding client expectations and offering creative
              solutions that bring lasting results. Whether you're a startup or an established
              enterprise, we are here to help you scale and succeed.
            </p>

            {/* Key Data Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-semibold text-indigo-600">
                  {count.experience}+
                </div>
                <p className="text-gray-500">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-indigo-600">
                  {count.clients}+
                </div>
                <p className="text-gray-500">Clients Served</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-indigo-600">
                  {count.projects}+
                </div>
                <p className="text-gray-500">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-indigo-600 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700">
            Our mission is to provide top-tier software solutions that not only meet but exceed
            our clients' expectations. We strive to be a reliable partner, delivering solutions
            that drive real results for businesses of all sizes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
