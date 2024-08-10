module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**", // Umożliwia dostęp do wszystkich ścieżek na `res.cloudinary.com`
      },
    ],
    formats: ["image/avif", "image/webp"], // Obsługiwane formaty obrazów
  },
};
