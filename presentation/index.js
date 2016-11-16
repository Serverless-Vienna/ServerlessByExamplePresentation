// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/serverless.css");


const images = {
  providers: require('../assets/providers.png'),
  blockDiagram: require('../assets/comment-showcase-block-diagram.png'),
  screen_apiGW_CORS: require('../assets/screen_apiGW_CORS.png'),
  screen_apiGW_methodExecutionGET: require('../assets/screen_apiGW_methodExecutionGET.png'),
  screen_apiGW_methodExecutionPOST: require('../assets/screen_apiGW_methodExecutionPOST.png'),
  screen_aws_services: require('../assets/screen_aws_services.png'),
  screen_aws_services_used: require('../assets/screen_aws_services_used.png'),
  screen_iam_identityProviders: require('../assets/screen_iam_identityProviders.png'),
  screen_iam_roleMgmt: require('../assets/screen_iam_roleMgmt.png'),
  screen_iot_mqttClient: require('../assets/screen_iot_mqttClient.png'),
  screen_iot_resources: require('../assets/screen_iot_resources.png')
};

preloader(images);

const theme = createTheme({
  //primary: "#ff4081"
  primary: "#665d60",
  textColor: "white",
  headingColor: "white"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} textColor="headingColor">
              Serverless
            </Heading>

            <Heading size={2}>
              by
            </Heading>

            <Heading size={1} fit caps lineHeight={1} textColor="headingColor">
              Example
            </Heading>

            <Text textSize="1.5em" margin="20px 0px 0px" bold>Gerald Weber</Text>
          </Slide>

          {/* <Slide transition={["slide"]} notes="Agenda">
            <Heading size={2} textColor="headingColor">
              Content
            </Heading>
            <List>
              <Appear><ListItem>Idea</ListItem></Appear>
              <Appear><ListItem>Demo</ListItem></Appear>
              <Appear><ListItem>Providers</ListItem></Appear>
              <Appear><ListItem>Why Amazon?</ListItem></Appear>
              <Appear><ListItem>Building Blocks</ListItem></Appear>
              <Appear><ListItem>Implementation / Configuration</ListItem></Appear>
              <Appear><ListItem>Thoughts &amp; Learnings</ListItem></Appear>
              <Appear><ListItem>Discussion</ListItem></Appear>
            </List>
          </Slide>*/}

          <Slide transition={["slide"]} notes="serverless tier: replace HTTP app-server with serverless tech" >
            <Heading size={2} textColor="headingColor">
              Idea
            </Heading>
            Use case should include:
            <List>
              <Appear><ListItem>Third Party authentication (eg. Google)</ListItem></Appear>
              <Appear><ListItem>Serverless tier</ListItem></Appear>
              <Appear><ListItem>NoSQL datastore</ListItem></Appear>
              <Appear><ListItem>Realtime communication</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Demo
            </Heading>
            <Link target="_blank" href="http://www.aws.amazon.com">go to http://serverless-vienna.holupi.com</Link>
          </Slide>

          <Slide transition={["slide"]} notes="pythonAnywhere: Host, run, and code Python in the cloud!, webhooks: All you need is code. No Provisioning, No deployment. Slack extension with webtasks., IBM Bluemix OpenWhisk = AWS Lambda, hook.io: Open-source Hosting for Webhooks and Microservices., Iron.io: Iron.io is a serverless app platform empowering Enterprise to reliably scale their Docker-based jobs on any cloud, public, private, or on-premises., PubNub: APIs for developers building secure realtime Mobile, Web, and IoT Applications">
            <Heading size={2} textColor="headingColor">
              Providers
            </Heading>
            <Layout>
              <Fill>
                <Image src={images.providers.replace("/", "")} width="100%" />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} notes="wanted to see how far we can go with AWS">
            <Heading size={2} textColor="headingColor">
              Why Amazon?
            </Heading>
            <List>
              <Appear><ListItem>Leading cloud provider</ListItem></Appear>
              <Appear><ListItem>Free tier</ListItem></Appear>
              <Appear><ListItem>Serverless pioneer</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} notes="short description of the blocks in the displayed order">
            <Heading size={2} textColor="headingColor">
              Building Blocks
            </Heading>
            <Layout>
              <Fill>
                <Image src={images.blockDiagram.replace("/", "")} width="100%" />
              </Fill>
            </Layout>
            {/* IAM Identiy Provider vs. Cognito: Federated Identities: Identity Pool for google authentication 
              IAM > Roles > commentsRole: 2 Policies for access to Lambda DynamoDB
              commentsRole + Trusted Relationship AWS_IAM  */}
          </Slide>

          <Slide transition={["slide"]} notes="TODO: Screenshots from AWS, Code: initMQTT, publishComment, getComments; Code vereinfachen">
            <Heading size={2} textColor="headingColor">
              AWS #1
            </Heading>

            <Image src={images.screen_aws_services.replace("/", "")} width="90%" />
          </Slide>


          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS #2
            </Heading>
            <Image src={images.screen_aws_services_used.replace("/", "")} width="90%" />
          </Slide>


          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS #3
            </Heading>
            <Image src={images.screen_apiGW_methodExecutionGET.replace("/", "")} width="100%" />
          </Slide>


          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS #4
            </Heading>
            <Image src={images.screen_apiGW_methodExecutionPOST.replace("/", "")} width="100%" />
          </Slide>



          <Slide transition={["slide"]} notes="CORS Cross Origin Resource Sharing">
            <Heading size={2} textColor="headingColor">
              AWS #5
            </Heading>
            <Image src={images.screen_apiGW_CORS.replace("/", "")} width="100%" />
          </Slide>



          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS #6
            </Heading>
            <Image src={images.screen_iam_identityProviders.replace("/", "")} width="100%" />
          </Slide>



          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS #7
            </Heading>
            <Image src={images.screen_iam_roleMgmt.replace("/", "")} width="100%" />
          </Slide>


          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS #8
            </Heading>
            <Image src={images.screen_iot_resources.replace("/", "")} width="100%" />
          </Slide>


          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS #9
            </Heading>
            <Image src={images.screen_iot_mqttClient.replace("/", "")} width="100%" />
          </Slide>


          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Lambda #1
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/lambda.js")}
              margin="20px auto"
              />
          </Slide>


          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Code #1
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/initMQTT.js")}
              margin="20px auto"
              />
          </Slide>


          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Code #2
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/fetchComments.js")}
              margin="20px auto"
              />
          </Slide>


          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Code #3
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/publishComments.js")}
              margin="20px auto"
              />
          </Slide>


          <Slide transition={["slide"]} notes="Developer experience: Tooling, testing, deployment; More CLI: , eg. export CLI; Frontend optimization: Optimistic,async, non-blocking;    https://d0.awsstatic.com/whitepapers/DDoS_White_Paper_June2015.pdf ">
            <Heading size={2} textColor="headingColor">
              Thoughts
            </Heading>
            <List>
              <Appear><ListItem>Improve security</ListItem></Appear>
              <Appear><ListItem>Frontend optimization</ListItem></Appear>
              <Appear><ListItem>Monitoring / Logging</ListItem></Appear>
              <Appear><ListItem>Vendor lock-in</ListItem></Appear>
              <Appear><ListItem>More CLI</ListItem></Appear>
              <Appear><ListItem>Developer experience</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} notes="Developer experience: Tooling, testing, deployment; More CLI: , eg. export CLI; Frontend optimization: Optimistic,async, non-blocking;    https://d0.awsstatic.com/whitepapers/DDoS_White_Paper_June2015.pdf ">
            <Heading size={2} textColor="headingColor" note="Getting things done: Deployment if endpoints are correct, it works; No Cors: does not provide CORS Headers when an error occurs, Authorization: where and who is sometimes not clear,">
              Learnings
            </Heading>
            <List>
              <Appear><ListItem>Orchestration</ListItem></Appear>
              <Appear><ListItem>Fragmented and complete docs</ListItem></Appear>
              <Appear><ListItem>Getting things done</ListItem></Appear>
              <Appear><ListItem>No CORS headers on internal error</ListItem></Appear>
              <Appear><ListItem>Roles/Policies - powerful but cumbersome</ListItem></Appear>
              <Appear><ListItem>Online editors</ListItem></Appear>
            </List>
          </Slide>

      <Slide transition={["slide"]}>
        <Heading size={2} fit caps textColor="headingColor">
          Thank you
            </Heading>

        <Heading size={1} textColor="textColor">
          Discussion
            </Heading>
      </Slide>

        </Deck >
      </Spectacle >
    );
  }
}
