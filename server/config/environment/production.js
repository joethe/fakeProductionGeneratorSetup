'use strict';

// Production specific configuration
// =================================
module.exports = {
  //// Server IP
  //ip:       process.env.OPENSHIFT_NODEJS_IP ||
  //          process.env.IP ||
  //          undefined,
  //
  //// Server port
  //port:     process.env.OPENSHIFT_NODEJS_PORT ||
  //          process.env.PORT ||
  //          8080,

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://3601Lab:SoftwareDevelopment@acrylic/softwareDev/?authSource=admin'
  }
};
