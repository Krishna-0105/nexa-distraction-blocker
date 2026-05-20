function SessionCategories({
  selectedCategory,
  setSelectedCategory,
}) {

  const categories = [
    {
      name: "Study",
      icon: "📘",
    },
    {
      name: "Work",
      icon: "💻",
    },
    {
      name: "Deep Work",
      icon: "🧠",
    },
    {
      name: "Reading",
      icon: "📖",
    },
    {
      name: "Walk",
      icon: "🚶",
    },
  ];

  return (

    <div className="grid grid-cols-2 gap-2 sm:gap-3">

      {categories.map((category, index) => (

        <button
          key={index}
          onClick={() => setSelectedCategory(category.name)}
          className={`p-3 sm:p-4 h-[90px] sm:h-[100px] rounded-2xl border transition-all duration-300 text-left ${
            selectedCategory === category.name
              ? "bg-[#119b61] border-[#119b61] text-white shadow-lg scale-[1.02]"
              : "bg-[#f8fbf9] border-[#e6ece8] text-[#1f2937] hover:border-[#119b61]"
          }`}
        >

          <div className="text-lg sm:text-xl">
            {category.icon}
          </div>

          <p className="mt-1 font-semibold text-xs sm:text-sm">
            {category.name}
          </p>

        </button>

      ))}

    </div>

  );

}

export default SessionCategories;