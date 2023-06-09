import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Footer, Nav } from 'components';
import Typist from 'react-typist';
import { isMobile } from 'react-device-detect';
import { optionsFirst, optionsSecond } from 'data';
import Select from 'react-select';
import clipboard from 'assets/images/clipboard.svg';
import classnames from 'classnames';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: JSON.parse(localStorage.getItem('dark')) || false,
      fastType: JSON.parse(localStorage.getItem('fastType')) || true,
      firstOption: null,
      showSecond: false,
      secondOption: null,
      nb: '',
      usage: '',
      description:'',
      examples:'',
      CONFIG_VARIABLE:'',
      flags:'',
      copied: false
    };
  }
  componentDidMount(){
    if(caches){
      caches.keys().then((names) => {
          names.forEach((name) => {
              caches.delete(name);
              console.log("caches deleted sucessfully!!")
          });
      });
      
     };
  }
  handleToggle = (evt) => {
    const { id } = evt.target;

    this.setState(
      prevState => ({ [id]: !prevState[id] }),
      () => {
        localStorage.setItem(id, this.state[id]);
      }
    );
  };

  onFirstChange = (selectedOption) => {
    if (this.state.secondOption) {
      this.setState({
        firstOption: selectedOption,
        showSecond: true,
        secondOption: null,
        nb: '',
        description:'',
        examples:'',
        CONFIG_VARIABLE:'',
        flags:'',
        usage: ''
      });
    } else if (optionsSecond[selectedOption.value].length === 1) {
      this.setState({ firstOption: selectedOption, showSecond: true });
      this.onSecondChange(optionsSecond[selectedOption.value][0]);
    } else {
      this.setState({ firstOption: selectedOption, showSecond: true });
    }
  };

  onSecondChange = (selectedOption) => {
    if (selectedOption.usage) {
      this.setState({ nb: '', usage: '' }, () => {
        this.setState({
          secondOption: selectedOption,
          nb: selectedOption.nb,
          usage: selectedOption.usage,
          description:selectedOption.description,
          examples:selectedOption.examples,
          CONFIG_VARIABLE:selectedOption.CONFIG_VARIABLE,
          flags:selectedOption.flags,
        });
      });
    } else {
      this.setState({
        secondOption: selectedOption,
        nb: '',
        usage: ''
      });
    }
  };

  onThirdChange = (selectedOption) => {
    this.setState({ nb: '', usage: '' }, () => {
      this.setState({
        nb: selectedOption.nb,
        usage: selectedOption.usage
      });
    });
  };

  onCopy = () => {
    this.setState({ copied: true }, () => {
      if (this.timeout) {
        clearInterval(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.setState({ copied: false });
      }, 1000);
    });
  };

  copyUsage = (data) => {
    const el = document.createElement('textarea');
    el.value = data;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected = document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.onCopy();

    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  };

  render() {
    const {
      dark,
      firstOption,
      secondOption,
      showSecond,
      fastType,
      usage,
      description,
      examples,
      flags,
      CONFIG_VARIABLE
    } = this.state;

    const avgTypingDelay = fastType ? 0 : 50;
    console.log("loaded")
    return (
      <>
      <Helmet>
        <meta property="og:image" content="https://sfexplorer.netlify.app/sfexplorer.png" />
        <meta property="twitter:image:src" content="https://sfexplorer.netlify.app/sfconverter.png" />
      </Helmet>
    
      <div className={classnames('home', { dark })}>
        <div className="container home__container">
          <Nav mode={dark} onToggle={this.handleToggle} fastType={fastType} />
          <div className="content">
            <div className="row">
              <div className="col-12">
                <h2 className="content__title  dark-white text-center">
                  SF <span>Command</span> Explorer
                </h2>
                <p className="content__subtitle dark-grey text-center">
                 Save time and effortlessly discover the precise commands you require, eliminating the need for extensive web searches.
                </p>

                <div className="options">
                  <h4 className="options__title">Select command type:</h4>

                  <Select
                    placeholder="..."
                    className="options-select"
                    classNamePrefix="options-select"
                    isSearchable={true}
                    onChange={this.onFirstChange}
                    value={firstOption}
                    options={optionsFirst}
                  />

                  {showSecond ? (
                    <Select
                      placeholder="..."
                      className="options-select"
                      classNamePrefix="options-select"
                      isSearchable={true}
                      onChange={this.onSecondChange}
                      value={secondOption}
                      options={optionsSecond[firstOption.value]}
                    />
                  ) : null}

                  
                </div>
              </div>
              <div className="col-12 boards">
                <div
                  className={`board__group board__group--1 ${isMobile && !usage ? ' d-none' : ''}`}
                >
                  <h2 className="board__title  dark-white">Usage</h2>
                  <div className="board board--1">
                    <pre>
                      {usage.length ? (
                        <Typist avgTypingDelay={avgTypingDelay} cursor={{ show: false }}>
                          {usage}
                        </Typist>
                      ) : (
                        <div />
                      )}
                    </pre>
                    
                    {usage.length ? (
                      <div className="copy">
                        <img
                          className="copy__image"
                          onClick={()=>this.copyUsage(usage)}
                          src={clipboard}
                          alt="Clipboard"
                        />
                      </div>
                    ) : null}
                  </div>
                
                  {examples && <h2 className="board__title  dark-white margin-top24">Examples</h2>}
                      {examples && examples.map(example=>{
                        return <div key={example.title}>
                          
                            <p className='dark-grey margin-top16'>{example.title}</p>
                            <div className="board board--1">
                              <pre>
                                {example.command.length ? (
                                  <Typist avgTypingDelay={avgTypingDelay} cursor={{ show: false }}>
                                    {example.command}
                                  </Typist>
                                ) : (
                                  <div />
                                )}
                              </pre>
                              
                              {example.command.length ? (
                                <div className="copy">
                                  <img
                                    className="copy__image"
                                    onClick={()=>this.copyUsage(example.command)}
                                    src={clipboard}
                                    alt="Clipboard"
                                  />
                                </div>
                              ) : null}
                            </div>
                        </div>
                      })}
                 {description && <h2 className="board__title  dark-white margin-top24">Description</h2>}
                  {description && <div className='dark-grey'><pre>{description}</pre></div>}
                  {CONFIG_VARIABLE && <h2 className="board__title  dark-white margin-top24">Configuration Variables</h2>}
                  {CONFIG_VARIABLE && CONFIG_VARIABLE.map(item=>{
                    return (
                      <div key={item.name}>
                        <h4 className="board__title  dark-white margin-top24">{item.name}</h4>
                        <div className='dark-grey'><pre>{item.description}</pre></div>
                      </div>
                    )
                  })}
                  
                  {flags && <h2 className="board__title  dark-white margin-top24">Flags</h2>}
                  {flags && <div className='dark-grey'><pre>{flags}</pre></div>}
                  
                </div>
              </div>
            </div>
          </div>
          <Footer dark={dark} />
        </div>
      </div>
      </>
    );
  }
}

export default App;
