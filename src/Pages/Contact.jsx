function Contact() {
  return (
    <section className="h-screen px-6 bg-gradient-to-b from-white via-black to-black flex flex-col text-white">

      {/* Top Section */}
      <div className="pt-16">
        <h1 className="text-left text-5xl lg:text-7xl font-bold text-black">
          Let's Collaborate
        </h1>
      </div>

      {/* Middle Section */}
      <div className="flex-grow flex items-center justify-center">
        <a
            href="mailto:syedhaziq457@gmail.com"
            className="text-2xl lg:text-5xl text-center hover:text-gray-300 transition-colors"
          >
            syedhaziq457@gmail.com
        </a>

      </div>

      {/* Bottom Section */}
      <div className="flex w-full pb-6">
        <a href="https://github.com/M1nkyLab" className="w-full text-4xl text-center py-4 hover:text-gray-300 transition-colors">
          Github
        </a>

        <a href="https://www.linkedin.com/in/syed-farhan-haziq-886a41345/" className="w-full text-4xl text-center py-4 hover:text-gray-300 transition-colors">
          Linkedin
        </a>

        <a href="https://drive.google.com/file/d/1lO_urLcf8hncYzfpGd6YhFTMPetTYiJQ/view?usp=sharing" className="w-full text-4xl text-center py-4 hover:text-gray-300 transition-colors">
          Resume
        </a>
      </div>

    </section>
  );
}

export default Contact;