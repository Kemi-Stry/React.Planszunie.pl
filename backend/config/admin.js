module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0c7d7cdb5f070b70daccd14f912dbffb'),
  },
});
