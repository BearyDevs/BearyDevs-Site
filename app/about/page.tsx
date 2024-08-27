export default function AboutPage() {
  const startYear = new Date("2019-03-01");
  const currentYear = new Date();
  const yearsOfExperience =
    currentYear.getFullYear() -
    startYear.getFullYear() -
    (currentYear.getMonth() < startYear.getMonth() ? 1 : 0);

  return (
    <div className="animate-[fadeIn_0.5s] mobilexll:text-xs transition duration-300 text-gray-400">
      <h1 className="font-bold mb-2">
        {`Let's get to know me!`.toUpperCase()}
      </h1>
      <p>{`I'm a developer from Bangkok, Thailand, with ${yearsOfExperience}+ years of experience in web development.`}</p>
      <p></p>
      <p>{`I've poured all my skills and creativity into my work and have a passion for programming. I'm always on the lookout for new challenges and eager to grow and continuously learn new things.`}</p>
    </div>
  );
}
