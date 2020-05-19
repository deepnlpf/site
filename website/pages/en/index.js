/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * 
 * Example button
 *  <Button href="#try"> Zip</Button>
 *  <Button href={docUrl('doc1.html')}>Github Code</Button>
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const translate = require('../../server/translate.js').translate;

class HomeSplash extends React.Component {
        render() {
                const { siteConfig, language = '' } = this.props;
                const { baseUrl, docsUrl } = siteConfig;
                const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>
          <translate>
            A Framework for Integrating Linguistic Analysis and Semantic Annotation of Text Documents.
          </translate>
        </small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/octopussy3.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
          <Button href="https://github.com/deepnlpf">Github Repo</Button>
          <Button href="docs/en/install">Install</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: (
              <translate>
                DeepNLPF provides a component for integrating and customizing linguistic analysis. When building Plugins, you can add any PLN tool, regardless of the programming language in which it was created.
              </translate>
            ),
            image: `${baseUrl}img/pipeline.png`,
            imageAlign: 'top',
            title: (
              <translate>
                Custom Pipeline
              </translate>
            ),
          },
          {
            content: (
              <translate>
                DeepNLPF includes parallel processing strategies and multithreads to ensure maximum performance. Through the approach taken it is possible to process extremely large texts.
              </translate>
            ),
            image: `${baseUrl}img/parallell-pipeline.svg`,
            imageAlign: 'top',
            title: (
              <translate>
                Parallel Processing
              </translate>
            ),
          },
        ]}
      </Block>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Features</h2>
        <MarkdownBlock>
          ```Multiprocessing Pathos Framework``` ```Faster Parallel Ray``` ```DashBoard``` ```Plugins```
          ```Bot Notification``` ```API RESTFul``` ```CLI Commands``` ```Output Format Jsona and XML``` 
          ```Suport Database JSON and XML``` ``` Data Statistics ```
        </MarkdownBlock>
      </div>
    );

    const Boost = () => (
      <Block id="try">
        {[
          {
            content: (
              <translate>
                DeepNLPF has two approaches to optimize execution. By default we use [Multiprocessing Pathos Framework](https://pypi.org/project/pathos/), but if you prefer you can choose to use [Faster Parallel Ray](https://ray.io/) 10x [fast as the first one](https://towardsdatascience.com/10x-faster-parallel-python-without-python-multiprocessing-e5017c93cce1).
              </translate>
            ),
            image: `${baseUrl}img/boost.png`,
            imageAlign: 'left',
            imageAlt: 'Learn how to use this Boost',
            imageLink: siteConfig.baseUrl + 'docs/en/guide#custom-boost',
            title: (
              <translate>
                Boost CPU and GPU
              </translate>
            ),
          },
        ]}
      </Block>
    );

    const DashBoard = () => (
      <Block background="light">
        {[
          {
            content: (
              <translate>
                DeepNLPF contains a DashBoard that allows you to view and process textual data without writing any lines of code and with few settings, choosing from various linguistic analyzes coming from a number of successful PLN tools.
              </translate>
            ),
            image: `${baseUrl}img/dashboard.png`,
            imageAlign: 'right',
            imageAlt: 'Learn how to use DashBoard',
            imageLink: siteConfig.baseUrl + 'docs/en/dashboard',
            title: 'DashBoard',
          },
        ]}
      </Block>
    );

    const Plugins = () => (
      <Block id="try">
        {[
          {
            content: (
              <translate>
                DeepNLPF has a flexible plugin architecture, allowing the integration of various third party PLN tools, regardless of the programming language in which it was built, it can be integrated into the analysis pipeline.
              </translate>
            ),
            image: `${baseUrl}img/plugins22.png`,
            imageAlign: 'left',
            imageAlt: 'Learn how to use this Plugin',
            imageLink: siteConfig.baseUrl + '/en/repository',
            title: 'Plugin in Play',
          },
        ]}
      </Block>
    );

    const API = () => (
      <Block background="light"> 
        {[
          {
            content: (
              <translate>
                DeepNLPF has a very simple solution for you to use natural language processing in your web, mobile or desktop application reducing the computational cost. Using the API we have provided you make this hard work for us and consume only the results of the analysis that interests you.
              </translate>
            ),
            image: `${baseUrl}img/api.svg`,
            imageAlign: 'right',
            imageAlt: 'Learn how to use this API RESTFul',
            imageLink: siteConfig.baseUrl + 'docs/en/api',
            title: 'API RESTFul',
          },
        ]}
      </Block>
    );

    const BotNotification = () => (
      <Block id="try">
        {[
          {
            content: (
              <translate>
                You don't have to spend hours shipping the computer waiting for your dataset to finish processing. BotNotification is responsible for keeping you informed about everything that happens during processing, you are the one who chooses the best way that it can do this, either through (Telegram, Email, Desktop Notifications or even by voice). What's up! liked? Take your time to relax, let BotNotification take care of everything for you.
              </translate>
            ),
            image: `${baseUrl}img/bot_notification.png`,
            imageAlign: 'left',
            imageAlt: 'Learn how to use this BotNotification',
            imageLink: siteConfig.baseUrl + 'docs/en/notifications',
            title: 'BotNotification',
          },
        ]}
      </Block>
    );

    const CommandsLine = () => (
      <Block background="light"> 
        {[
          {
            content: (
              <translate>
                Install plugins and pipeline with our command line interface.
              </translate>
            ),
            image: `${baseUrl}img/cli.png`,
            imageAlign: 'right',
            imageAlt: 'Learn how to use this CLI',
            imageLink: siteConfig.baseUrl + 'docs/en/cli',
            title: 'Command Line',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <Boost />
          <DashBoard />
          <Plugins />
          <API />
          <BotNotification />
          <CommandsLine />
        </div>
      </div>
    );
  }
}

module.exports = Index;