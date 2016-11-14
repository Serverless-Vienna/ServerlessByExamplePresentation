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

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  // city: require("../assets/city.jpg"),
  // kat: require("../assets/kat.png"),
  // logo: require("../assets/formidable-logo.svg"),
  // markdown: require("../assets/markdown.png"),
  providers: require('../assets/providers.png'),
  blockDiagram: require('../assets/comment-showcase-block-diagram.png')
};

preloader(images);

const theme = createTheme({
  //primary: "#ff4081"
  primary: "#665d60",
  textColor: "black",
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

          <Slide transition={["slide"]}>
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
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Idea
            </Heading>
            Use case should include:
            <List>
              <Appear><ListItem>Third Party authentication (eg. Google)</ListItem></Appear>
              <Appear><ListItem>serverless compute functionality</ListItem></Appear>
              <Appear><ListItem>NoSQL datastore</ListItem></Appear>
              <Appear><ListItem>Realtime communication</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Demo
            </Heading>
            <Link target="_blank" href="http://www.aws.amazon.com">go to http://halupi...</Link>
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

          <Slide transition={["slide"]} notes="">
            <Heading size={2} textColor="headingColor">
              Why Amazon?
            </Heading>
            <List>
              <Appear><ListItem>Largest cloud provider - <a target="target" href="http://www.recode.net/2016/4/28/11586526/aws-cloud-revenue-growth">$8.9 billion revenue (15Q1-16Q1)</a></ListItem></Appear>
              <Appear><ListItem>Well known <a target="_blank" href="http://www.techradar.com/news/internet/cloud-services/battle-of-the-public-cloud-aws-vs-microsoft-vs-google-vs-ibm-1309626">customers (Dropbox, Pinterest, Airbnb, Slack, Persicope, Netflix, Capital One, Tinder, ...)</a></ListItem></Appear>
              <Appear><ListItem>AWS Lambda, NoSQL database</ListItem></Appear>
              <Appear><ListItem><a target="_blank" href="https://aws.amazon.com/free/">Free tier</a></ListItem></Appear>
              <Appear><ListItem><a target="_blank" href="https://aws.amazon.com/about-aws/global-infrastructure/">Global infrastructure</a></ListItem></Appear>
              <Appear><ListItem>Perception as a mature platform</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Building Blocks
            </Heading>
            <Layout>
              <Fill>
                <Image src={images.blockDiagram.replace("/", "")} width="100%" />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Implementation / Configuration
            </Heading>
            <Link target="_blank" href="http://www.aws.amazon.com">go to AWS Dashboard</Link>
          </Slide>

          <Slide transition={["slide"]} notes="DDOS https://aws.amazon.com/blogs/security/how-to-configure-rate-based-blacklisting-with-aws-waf-and-aws-lambda/    https://d0.awsstatic.com/whitepapers/DDoS_White_Paper_June2015.pdf ">
            <Layout>
              <Fill>
                <Heading size={2} textColor="headingColor">
                  Thoughts
                </Heading>
                <List>
                  <Appear><ListItem>Monitoring / Logging</ListItem></Appear>
                  <Appear><ListItem>Hybrid solutions</ListItem></Appear>
                  <Appear><ListItem>DevOps --> DevFins</ListItem></Appear>
                  <Appear><ListItem>DOS --> rate-based BL</ListItem></Appear>
                  <Appear><ListItem>Vendor lock-in</ListItem></Appear>
                </List>
              </Fill>
              <Fill>
                <Heading size={2} textColor="headingColor">
                  Learning
                </Heading>
                <List>
                  <Appear><ListItem>Mental model</ListItem></Appear>
                  <Appear><ListItem>Promotion centric</ListItem></Appear>
                  <Appear><ListItem>Fragmented docs</ListItem></Appear>
                  <Appear><ListItem>Getting things done</ListItem></Appear>
                </List>
              </Fill>
            </Layout>

          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} fit caps textColor="headingColor">
              Thank you
            </Heading>

            <Heading size={1} textColor="textColor">
              Discussion
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}



// As defined by Gartner1
// , “Cloud computing is a style of computing where scalable and elastic ITenabled
// capabilities are delivered as a service to external customers using Internet technologies.”

// AWS Whitepaper
// Cloud computing enables organizations to obtain a flexible, secure, and cost-effective IT infrastructure, in much the
// same way that national electric grids enable homes and organizations to plug into a centrally managed, efficient, and
// cost-effective energy source. When freed from creating their own electricity, organizations were able to focus on the
// core competencies of their business and the needs of their customers. 

// These capabilities include compute power, storage, databases, messaging, and other building block services that run
// business applications

// AWS is readily distinguished from other vendors in the traditional IT computing landscape because it is:
// - Flexible. AWS enables organizations to use the programming models, operating systems, databases, and
// architectures with which they are already familiar. In addition, this flexibility helps organizations mix and match
// architectures in order to serve their diverse business needs.

// - Cost-effective. With AWS, organizations pay only for what they use, without up-front or long-term
// commitments.

// - Scalable and elastic. Organizations can quickly add and subtract AWS resources to their applications in order to
// meet customer demand and manage costs.

// - Secure. In order to provide end-to-end security and end-to-end privacy, AWS builds services in accordance with
// security best practices, provides the appropriate security features in those services, and documents how to use
// those features.

// - Experienced. When using AWS, organizations can leverage Amazon’s more than fifteen years of experience
// delivering large-scale, global infrastructure in a reliable, secure fashion.




//           <Slide transition={["slide"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
//             <CodePane
//               lang="jsx"
//               source={require("raw!../assets/deck.example")}
//               margin="20px auto"
//               />
//           </Slide>

//           <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
//             <Appear fid="1">
//               <Heading size={1} caps fit textColor="primary">
//                 Full Width
//               </Heading>
//             </Appear>
//             <Appear fid="2">
//               <Heading size={1} caps fit textColor="tertiary">
//                 Adjustable Darkness
//               </Heading>
//             </Appear>
//             <Appear fid="3">
//               <Heading size={1} caps fit textColor="primary">
//                 Background Imagery
//               </Heading>
//             </Appear>
//           </Slide>

//           <Slide transition={["zoom", "fade"]} bgColor="primary">
//             <Heading caps fit>Flexible Layouts</Heading>
//             <Layout>
//               <Fill>
//                 <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
//                   Left
//                 </Heading>
//               </Fill>
//               <Fill>
//                 <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
//                   Right
//                 </Heading>
//               </Fill>
//             </Layout>
//           </Slide>

//           <Slide transition={["slide"]} bgColor="black">
//             <BlockQuote>
//               <Quote>Wonderfully formatted quotes</Quote>
//               <Cite>Ken Wheeler</Cite>
//             </BlockQuote>
//           </Slide>

//           <Slide transition={["spin", "zoom"]} bgColor="tertiary">
//             <Heading caps fit size={1} textColor="primary">
//               Inline Markdown
//             </Heading>
//             <Markdown>
//               {`
// ![Markdown Logo](${images.markdown.replace("/", "")})

// You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
// * Lists too!
// * With ~~strikethrough~~ and _italic_
// * And lets not forget **bold**
//               `}
//             </Markdown>
//           </Slide>

//           <Slide transition={["slide", "spin"]} bgColor="primary">
//             <Heading caps fit size={1} textColor="tertiary">
//               Smooth
//             </Heading>
//             <Heading caps fit size={1} textColor="secondary">
//               Combinable Transitions
//             </Heading>
//           </Slide>

//           <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
//             <List>
//               <Appear><ListItem>Inline style based theme system</ListItem></Appear>
//               <Appear><ListItem>Autofit text</ListItem></Appear>
//               <Appear><ListItem>Flexbox layout system</ListItem></Appear>
//               <Appear><ListItem>React-Router navigation</ListItem></Appear>
//               <Appear><ListItem>PDF export</ListItem></Appear>
//               <Appear><ListItem>And...</ListItem></Appear>
//             </List>
//           </Slide>

//           <Slide transition={["slide"]} bgColor="primary">
//             <Heading size={1} caps fit textColor="tertiary">
//               Your presentations are interactive
//             </Heading>
//             <Interactive />
//           </Slide>
//           <Slide transition={["spin", "slide"]} bgColor="tertiary">
//             <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
//               Made with love in Seattle by
//             </Heading>
//             <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo} /></Link>
//           </Slide>