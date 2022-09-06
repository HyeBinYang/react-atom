export const parameters = {
  // actions: { argTypesRegex: "^on[A-Z].*" },
  actions: { argTypesRegex: "^on.*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
