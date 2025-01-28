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
  '.flex-js-e': {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'end',
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
  '.flex-jsa-c': {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  '.flex-je-c': {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
  },
}

module.exports = {
  mode: 'jit',
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'white': '#FFF',
        'black': '#11181C',
        'gray': '#687076',
        'blue': '#1150CB',
        'orange': '#FF7A00',
        'purple': '#6A8AFF',
        'borderColor': '#D7DBDF',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      borderColor: {
        DEFAULT: "#D7DBDF"
      },
    },
  },
  variants: {
    display: ['show'],
  },
  plugins: [
    function ({ addComponents }) {

      addComponents(flexClasses);
    },
  ],
};
