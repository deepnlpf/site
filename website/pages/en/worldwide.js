const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const translate = require('../../server/translate.js').translate;


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
            <h1>DeepNLPF in the World</h1>
          </header>
          <p>
            <div align="center">
              <div id="regions_div"></div>
                <h1 id="api_counter"></h1>
                <h4>Total API Calls</h4>
                <p>
                  <b><a>DeepNLPF</a> does not collect or share personal
                    information.</b> When you use <a>DeepNLPF service</a>, we do not log
                  (store) information about you or your IP address, but we only
                  detect the country from which the request comes for statistical
                  purposes.
                </p>
                <p>
                  This product includes GeoLite2 data created by MaxMind, available
                  from <a href="http://www.maxmind.com">http://www.maxmind.com</a>.
                </p>
              </div>
            </p>
        </div>
    </div>
  );
}

module.exports = Demo;