export default {
  expo: {
    name: "emfoco",
    slug: "emfoco",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./src/assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./src/assets/icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true,
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
      }
    },
    android: {
      package: "com.emfoco.notificador",
      adaptiveIcon: {
        foregroundImage: "./src/assets/icon.png",
        backgroundColor: "#ffffff"
      },
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY
        }
      }
    },
    web: {
      favicon: "./src/assets/icon.png"
    },
    extra: {
      eas: {
        projectId: "b467ec16-d6b4-42c9-889b-659c2ada1ecb"
      }
    },
    plugins: [
      [
        "expo-location",
        {
          locationAlwaysAndWhenInUsePermission: "Permita que o aplicativo acesse sua localização para mapear focos de dengue."
        }
      ],
      [
        "expo-image-picker",
        {
          photosPermission: "O aplicativo acessa suas fotos para permitir o envio de imagens dos focos de dengue."
        }
      ]
    ]
  }
};
