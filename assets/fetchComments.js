function fetchCommentList() {
    var apigClient = window.apigClientFactory.newClient();
    apigClient.commentsGet({}, {}).then((response) => {
        var messages = JSON.parse(response.data.body).Items;
        messages.sort(function (a, b) {
            return (a.serverTime < b.serverTime) ? 1 : ((b.serverTime < a.serverTime) ? -1 : 0);
        });
        this.setState({ messages: [ /* add response to messages */ ] });
    }).then(() => { }).catch((error) => {
        if (error.status === 403) {
            window.alert('Please login first')
        }
    });
}