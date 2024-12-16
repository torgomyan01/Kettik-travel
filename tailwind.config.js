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
  variants: {
    display: ['show'],
  },
  plugins: [
    function ({ addComponents }) {
      const flexClasses = {
        '.flex-jsb-c': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        '.flex-jsb-s': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
        },
        '.flex-js-c': {
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        },
        '.flex-js-s': {
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'start',
        },
        '.flex-jc-c': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.flex-jc-s': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
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
