
export function initialize(app) {
  app.inject ('route:application', 'deepLinks', 'service:deep-links');
}

export default {
  initialize,
};
