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
        <small>{siteConfig.tagline}</small>
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
        <div className="inner">
        <h1>DeepNLPF Repository</h1>
          <PromoSection>
            Here you will find all external tool plugins built by us and third parties to use on DeepNLPF.
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

    const Repository = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Did not find what you were looking for? Create your plugin now and help DeeoNLPF grow.',
            image: `${baseUrl}img/wiki.png`,
            imageAlign: 'top',
            title: 'Wiki Plugin',
            // http://localhost:3000/site/docs/en/pluginsnlp
            imageLink: siteConfig.baseUrl+'docs/en/wikiplugin',
          },
          {
            content: 'Choose from the best natural language processing tools and add them to your analysis pipeline.',
            image: `${baseUrl}img/tools.png`,
            imageAlign: 'top',
            title: 'Tools NLP',
            imageLink: siteConfig.baseUrl+'docs/en/pluginsnlp',
          },
          {
            content: 'Use semantic dictionaries in your pipeline and better results.',
            image: `${baseUrl}img/dictionary.png`,
            imageAlign: 'top',
            title: 'Semantic Dictionary',
            imageLink: siteConfig.baseUrl+'docs/en/pluginsdic',
          },
          {
            content: 'Save and explore your datasets through a database.',
            image: `${baseUrl}img/database.png`,
            imageAlign: 'top',
            title: 'DataBase',
            imageLink: siteConfig.baseUrl+'docs/en/pluginsdb',
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
          <Repository />
        </div>
      </div>
    );
  }
}

module.exports = Index;