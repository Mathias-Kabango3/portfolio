import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
export const ContactSection = () => {
  return (
    <div className="py-14 pt-16" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-50 -z-10"
            style={{
              backgroundImage: `url(${grainImage})`,
            }}></div>
          <h2 className="font-serif text-2xl">
            Let&apos;s create something amazing together
          </h2>
          <p className="text-sm mt-2">
            Ready to bring your next project to life? let&apos;s connect and
            discuss how I can help you achieve your goals{" "}
          </p>
          <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8">
            <span className="font-semibold">
              <a href="mailto:kabangomathias0@gmail.com">Contact Me</a>
            </span>
            <ArrowUpRightIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
