function initMQTT() {
    const mqttClient = new AWSMqtt({
      accessKeyId: APPCONFIG.AWS.IOT.USER.ACCESS_KEY,
      secretAccessKey: APPCONFIG.AWS.IOT.USER.SECRET_KEY,
      endpointAddress: APPCONFIG.AWS.IOT.ENDPOINT,
      region: APPCONFIG.AWS.REGION
    });

    mqttClient.on('connect', () => { 
      mqttClient.subscribe(APPCONFIG.AWS.IOT.TOPIC);
    });

    mqttClient.on('message', (topic, message) => {
        message = JSON.parse(message);
        this.setState({
            messages: [ /* add response to messages */ ]
        });
    });

    return mqttClient;
  }