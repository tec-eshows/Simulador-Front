module.exports = {
    swcMinify: true,
    images: {
      domains: ["s3.us-east-2.amazonaws.com"],
    },

    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  }