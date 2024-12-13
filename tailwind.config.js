module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'white': '#FFF',
        'grey': '#11181C',
        'blue': '#1150CB',
        'orange': '#FF7A00',
        'purple': '#6A8AFF',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      const flexClasses = {
        '.flex-jsb-c': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        '.flex-js-c': {
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        },
        '.flex-jc-c': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.flex-jse-c': {
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        },
        '.flex-je-c': {
          display: 'flex',
          justifyContent: 'e',
          alignItems: 'center',
        },
        // Կարող եք ավելացնել ավելի շատ դասեր ըստ պահանջի
      };

      addComponents(flexClasses);
    },
  ],
};
