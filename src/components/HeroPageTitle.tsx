import React from "react";

type HeroPageTitleProps = {
  pageTitle: string;
  subTitle: string;
};

const HeroPageTitle = ({ pageTitle, subTitle }: HeroPageTitleProps) => {
  return (
    <section className="w-full bg-primary/10 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">{pageTitle}</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">{subTitle}</p>
      </div>
    </section>
  );
};

export default HeroPageTitle;
