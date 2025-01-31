module.exports = {
  assets: ['./src/app/assets/fonts'],
  dependencies: {
    appcenter: {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
      },
    },
    'appcenter-analytics': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
      },
    },
    'appcenter-crashes': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
      },
    },
  },
};
