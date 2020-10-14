let corsOptions = 
    {
        origin: [
            "http://40.118.47.110",
            "http://www.feldmanager.com",
            "https://40.118.47.110",
            "https://www.feldmanager.com",
            "https://www.feldmanager.com:3001",
            "https://40.118.47.110:3001",
            "https://www.feldmanager.com:3002",
            "https://40.118.47.110:3002",
            "https://www.feldmanager.com:3003",
            "https://40.118.47.110:3003",
            "https://www.feldmanager.com:3004",
            "https://40.118.47.110:3004"
        ],
        optionsSuccessStatus: 200
      };

module.exports={corsOptions};
