const config = {
  printWidth: 100,
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  importOrder: [
    "^react$",
    "",
    "^next(.*)$",
    "",
    "<TYPES>",
    "",
    "<BUILTIN_MODULES>",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/(.*)$",
    "",
    "^[./]",
  ],
  tailwindFunctions: ["clsx", "twMerge", "cn"],
};

export default config;
