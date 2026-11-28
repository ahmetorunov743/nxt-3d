/* =====================================================================
   NXT — PROJECT DATA
   ---------------------------------------------------------------------
   One object = one project. To add a real project, copy any object,
   change the fields and drop the photos into assets/images/.
   No other code needs to change.

   Fields:
     id          unique number or string
     side        "left" | "right"  — which drum shows the project
     title       string OR { en, ru, ar }
     location    string OR { en, ru, ar }  (Dubai district)
     workType    fitout | renovation | marble | tile | parquet | metal | glass
                 (labels are translated in i18n.js -> "work.<key>")
     year        number
     area        number, square metres
     description string OR { en, ru, ar }
     images      array of paths; the first one is the main photo / card cover
     before      optional: photos of the space BEFORE the works (shown with a "Before" badge)

   ===================================================================== */
window.NXT_PROJECTS = [
  /* ---------- REAL PROJECTS ---------- */
  {
    id: "bathroom-01",
    side: "left",
    title: { en: "Bathroom with a Glass Shower", ru: "Ванная со стеклянной душевой", ar: "حمام مع كابينة دش زجاجية" },
    location: { en: "Dubai", ru: "Дубай", ar: "دبي" },
    workType: "fitout",
    year: null,
    area: null,
    description: {
      en: "Turnkey bathroom: a walk-in shower behind a black-framed glass enclosure, large-format stone-look porcelain on the walls, built-in niches with warm LED lighting and a floating vanity.",
      ru: "Ванная под ключ: душевая зона за стеклянным ограждением в чёрном профиле, крупноформатный керамогранит под камень, встроенные ниши с тёплой подсветкой и подвесная тумба.",
      ar: "حمام متكامل: منطقة دش خلف حاجز زجاجي بإطار أسود، وبورسلان كبير الحجم بمظهر الحجر، ورفوف مدمجة بإضاءة دافئة، ووحدة مغسلة معلّقة."
    },
    scope: [
      { en: "Frameless-look glass shower enclosure with black profiles and hinged door", ru: "Стеклянное ограждение душа в чёрном профиле с распашной дверью", ar: "حاجز دش زجاجي بإطار أسود وباب مفصلي" },
      { en: "Large-format stone-look porcelain on walls and floor", ru: "Крупноформатный керамогранит под камень на стенах и полу", ar: "بورسلان كبير الحجم بمظهر الحجر للجدران والأرضية" },
      { en: "Built-in shelving niches and a shower bench", ru: "Встроенные ниши-полки и скамья в душевой", ar: "رفوف مدمجة ومقعد في منطقة الدش" },
      { en: "Linear floor drain and concealed black mixers", ru: "Линейный трап и скрытые смесители в чёрном цвете", ar: "مصرف أرضي خطي وخلاطات سوداء مخفية" },
      { en: "Warm LED lighting in niches and around the mirror", ru: "Тёплая LED-подсветка ниш и зеркала", ar: "إضاءة LED دافئة للرفوف وحول المرآة" },
      { en: "Wall-hung WC and floating vanity", ru: "Подвесной унитаз и подвесная тумба", ar: "مرحاض معلّق ووحدة مغسلة معلّقة" }
    ],
    images: ["assets/images/bathroom-glass-01.jpg"],
    before: ["assets/images/bathroom-glass-01-before.webp"]
  }
];
