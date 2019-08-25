const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Demo(props) {
    const { config: siteConfig, language = '' } = props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;


  return (
    <div className="docMainWrapper wrapper">
        <div className="post">
          <header className="postHeader">
            <h1>DeepNLPF DashBoard Demo Online</h1>
          </header>
          <p>This project is maintained by a dedicated group of people.</p>
        </div>
    </div>
  );
}

module.exports = Demo;