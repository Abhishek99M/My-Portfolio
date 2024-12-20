import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
return (
<section className="py-20 w-full">
    <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
    <ItemLayout
        className={
        " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
        }
    >
        <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
        Architect of Enchantment
        </h2>
        <p className="font-light  text-xs sm:text-sm md:text-base   ">
        My journey in web development is powered by an array of mystical
        tools and languages, with JavaScript casting the core of my
        enchantments. I use frameworks like React.js and Next.js with
        precision, crafting seamless portals (websites) that connect 
        users across the digital universe. I am always eager to explore new 
        technologies and push the boundaries of web development.
        Whether it&apos;s optimizing performance or improving user experience, 
        I am committed to delivering top tier solutions. The ancient arts of the
        Jamstack empower me to create fast, secure, and dynamic experiences,
        while my design skills ensure every creation is not only functional
        but visually captivating. Join me as I continue to explore new 
        technologies to shape the future of the web.
        </p>
    </ItemLayout>

    <ItemLayout
        className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
    >
        <p className="font-light  text-xs sm:text-sm md:text-base">
        Proficient in React.js and JavaScript, with Experience in Web Technologies &amp; Data Science Projects. 
        </p>
    </ItemLayout>

    <ItemLayout
        className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
    >
        <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
        0-1 {" "}
        <sub className="font-semibold text-base">years of experience</sub>
        </p>
    </ItemLayout>

    <ItemLayout
        className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
        <img
        className="w-full h-auto"
        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Abhishek99M&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
        alt="Abhishek99M"
        loading="lazy"
        />
        
    </ItemLayout>
    
    <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
        <img
        className="w-full h-auto"
        src={`https://github-readme-stats.vercel.app/api/?username=Abhishek99M&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
        alt="Abhishek99M"
        loading="lazy"
        />
    </ItemLayout>
    
    <ItemLayout className={"col-span-full"}>
        <img
        className="w-full h-auto"
        src={`https://skillicons.dev/icons?i=java,py,aws,github,html,ai,js,linkedin,mysql,nextjs,react,tailwind,vscode,css,nodejs`}
        alt="Abhishek99M"
        loading="lazy"
        />
    </ItemLayout>

    <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
        <img className="w-full h-auto" src={"https://github-readme-streak-stats.herokuapp.com?user=Abhishek99M&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"} 
        alt="Abhishek99M" loading="lazy"
        />
    </ItemLayout>

    <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
        <Link
        href="https://github.com/Abhishek99M/Weather_APP"
        target="_blank"
        className="w-full"
        >
        <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api/pin/?username=Abhishek99M&repo=Weather_APP&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
            alt="Abhishek99M"
            loading="lazy"
        />
        </Link>
    </ItemLayout>
    </div>
</section>
);
};

export default AboutDetails;
