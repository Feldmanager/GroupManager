let corsOptions = 
    {
        origin: ['http://localhost:3001',
                 'http://10.1.0.19:3001',
                 'http://10.1.0.27:3001',
                 'http://10.1.0.12:3001',
                 'http://10.1.0.17:3001',
                 'http://10.1.0.14:3001',
                 'http://10.1.0.26:3001',
                 'http://10.1.0.119:3000',
                 'http://10.1.0.119:80',
                 'http://10.1.0.119:443',
      ],
        optionsSuccessStatus: 200
      };

module.exports={corsOptions};