module.exports = {
  apps: [
      {
          name: 'leaderboard',
          script: 'npm',
          args: 'start',
          env_production: {
              NODE_ENV: 'production',
          },
      },
  ],
};
