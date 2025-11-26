function Contact() {
  return (
    <section className="h-[70vh] px-6 py-16 bg-black">
        <h1 className="text-left text-5xl lg:text-7xl font-bold mb-10">
            Let's Collaborate
        </h1>

        <div>
          <a href="mailto: syedhaziq457@gmail.com" className="block w-full h-65 text-center text-2xl lg:text-5xl py-17">syedhaziq457@gmail.com</a>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full">
            <a href="https://github.com/M1nkyLab" className="block w-full h-65 text-center border border-white py-4 hover:bg-gray-100 transition">Github</a>
          </div>

          <div className="w-full">
            <a href="https://www.linkedin.com/in/syed-farhan-haziq-886a41345/" className=" block w-full h-65 text-center border border-white py-4 hover:bg-gray-100 transition">Linkedin</a>
          </div>

          <div className="w-full">
            <a href="./Syed_Haziq_Resume.pdf" className="block w-full h-65 text-center border border-white py-4 hover:bg-gray-100 transition cursor-pointer">Resume</a>
          </div>
          
        </div>
    </section>
  );
}

export default Contact;
