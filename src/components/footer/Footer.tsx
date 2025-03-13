import React from "react";

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Documentation"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers"],
    },
    {
      title: "Resources",
      links: ["Community", "Help Center", "Status"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security"],
    },
  ];

  return (
    <>
      <div className="border-y border-gray-700 p-8  text-white">
        <div className="grid grid-cols-4 gap-8">
          {footerLinks.map((item, index) => (
            <div key={index}>
              <h3 className="font-bold mb-2 text-sm md:text-md">
                {item.title}
              </h3>
              <ul className="space-y-1">
                {item.links.map((link, i) => (
                  <li
                    key={i}
                    className="text-gray-400 text-sm md:text-md hover:text-white cursor-pointer tex-wrap"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center py-6 text-[var(--secondary-text-color)] text-sm">
        © {new Date().getFullYear()} CodeReview AI. All right reserved
      </div>
    </>
  );
};

export default Footer;
