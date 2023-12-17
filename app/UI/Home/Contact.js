const Contact = () => {
  return (
    <section className="mx-4  flex  flex-col items-center rounded-md   border-x-2  bg-black p-5 ">
      <h3 className="mb-4 text-center text-3xl font-bold text-white    md:text-[2.048rem]">
        Want to bring me onboard? Lets chat!
      </h3>
      <a
        href="https://wa.me/9284130773"
        className=" my-3 w-3/4  rounded-md bg-green-600 p-3 text-center font-bold md:w-1/3"
      >
        WhatsApp Me
      </a>
      <a
        href="mailto:sahillende07@gmail.com"
        className="secondary-gradient   mt-0 w-3/4 rounded-md p-3 text-center font-bold md:w-1/3"
      >
        Email
      </a>
    </section>
  );
};

export default Contact;
