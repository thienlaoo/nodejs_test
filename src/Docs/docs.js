export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Test Task for SapientPro',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3000/',
      },
    ],
  },
  apis: ['src/server.js'],
};