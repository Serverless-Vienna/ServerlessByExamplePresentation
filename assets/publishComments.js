function publishMessage(comment, postCommentDone) {
      var apigClient = window.apigClientFactory.newClient({
          accessKey: AWS.config.credentials.accessKeyId,
          secretKey: AWS.config.credentials.secretAccessKey,
          sessionToken: AWS.config.credentials.sessionToken
      });
      apigClient.commentsPost({}, {
          uuid: AwsUtil.guid(),
          clientTime: new Date().toJSON(),
          sender: this.state.email,
          value: comment
      }).then((response) => {
          postCommentDone(true);
      }).then(() => {
      }).catch((error) => {
          if (error.status === 403) {
              window.alert('Please login first')
          }
          window.alert("Send failed. Please try again later.");
          postCommentDone(false);
      });
  }