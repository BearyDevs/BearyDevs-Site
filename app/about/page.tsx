export default function AboutPage() {
  const startYear = new Date("2020-03-01");
  const currentYear = new Date();
  const yearsOfExperience =
    currentYear.getFullYear() -
    startYear.getFullYear() -
    (currentYear.getMonth() < startYear.getMonth() ? 1 : 0);

  return (
    <div className="animate-[fadeIn_0.5s] text-base transition max-w-[1000px] duration-300 text-gray-400">
      <h1 className="font-bold mb-2">
        {`Let's get to know me!`.toUpperCase()}
      </h1>
      <p className="whitespace-pre-wrap px-2 pt-2 leading-relaxed">{`I am a passionate self-taught developer from Bangkok, Thailand, with over ${yearsOfExperience} years of experience. My journey has been fueled by a love for programming and an eagerness to take on new challenges. I thrive in an environment of continuous learning, always exploring new technologies to sharpen my skills. My commitment to growth and adaptability allows me to approach complex problems with innovative solutions, staying inspired and driven to deliver creative, impactful work in an ever-evolving industry.`}</p>
    </div>
  );
}
