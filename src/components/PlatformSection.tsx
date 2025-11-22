export const PlatformSection = () => {
  return (
    <section className="py-20 px-4 bg-navy text-navy-foreground">
      <div className="container mx-auto max-w-4xl text-center space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold animate-fade-in">
          A platform for you to get the lab test faster.
        </h2>
        <p className="text-lg md:text-xl text-navy-foreground/80 leading-relaxed animate-fade-in [animation-delay:200ms]">
          Our app has two main features: the ability to book a licensed medical 
          professional to come to you and perform a lab test, and the ability for 
          medical professionals to accept requests and earn money on their own schedule. 
          Here's how it works:
        </p>
      </div>
    </section>
  );
};
