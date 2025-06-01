
const WELCOME_TEXT = {
    title: "Welcome to The King's Library",
    subtitle: "a fan-made tribute to the master of modern horror and suspense — Stephen King.",
    description: "This website is built by and for fans who have been captivated by King's incredible storytelling, unforgettable characters, and the chilling, imaginative worlds he creates. From the eerie streets of Derry to the desolate wastelands of the Dark Tower, our goal is to explore, celebrate, and connect over everything Stephen King."
};

const About = () => {
    return (
        <section className="max-w-screen-2xl mx-auto px-4 py-6">
            <header className="mb-6">
                <h1 className="text-3xl font-bold mb-2">
                    {WELCOME_TEXT.title}
                    <span className="block text-xl font-normal mt-2">
                        {WELCOME_TEXT.subtitle}
                    </span>
                </h1>
            </header>
            <article className="prose lg:prose-xl">
                <p className="text-gray-700 leading-relaxed">
                    {WELCOME_TEXT.description}
                </p>
            </article>
        </section>
    );
};
export default About;