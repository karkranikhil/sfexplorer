import React, { Component } from 'react';
import { Footer, Nav } from 'components';
import Typist from 'react-typist';
import { isMobile } from 'react-device-detect';
import { optionsFirstConverter, optionsSecondConverter } from 'data';
import Select from 'react-select';
import clipboard from 'assets/images/clipboard.svg';
import classnames from 'classnames';
class Converter extends Component {
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
    } else if (optionsSecondConverter[selectedOption.value].length === 1) {
      this.setState({ firstOption: selectedOption, showSecond: true });
      this.onSecondChange(optionsSecondConverter[selectedOption.value][0]);
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
      usage
    } = this.state;
    console.log("this.state", this.state)
    const avgTypingDelay = fastType ? 0 : 50;

    return (
      <div className={classnames('home', { dark })}>
        <div className="container home__container">
          <Nav mode={dark} onToggle={this.handleToggle} fastType={fastType} isConverter={true}/>
          <div className="content static">
            <div className="row">
              <div className="col-12">
                <h2 className="content__title  dark-white text-center">
                  <span>SFDX</span> to <span>SF</span> Command Convertor
                </h2>
                <p className="content__subtitle dark-grey text-center pb-3">
                 Save time and effortlessly Convert SFDX command to SFDX, eliminating the need for extensive web searches.
                </p>

                <div className='row mt-24'>
                <div className="col-12 boards">
                <div
                  className={`board__group board__group--1 ${isMobile && !usage ? ' d-none' : ''}`}
                >
                  <h2 className="board__title  dark-white font20">To install sf with npm, run this command:</h2>
                  <div className="board board--1 board static">
                    <pre>
                    <Typist avgTypingDelay={avgTypingDelay} cursor={{ show: false }}>
                        npm install --global @salesforce/cli@latest
                    </Typist>
                    </pre>
                    
                    <div className="copy">
                        <img
                          className="copy__image"
                          onClick={()=>this.copyUsage("npm install --global @salesforce/cli@latest")}
                          src={clipboard}
                          alt="Clipboard"
                        />
                      </div>
                  </div>
                  
                </div>
              </div>
                </div>
                <div className="options">
                  <h4 className="options__title">Select SFDX command type:</h4>

                  <Select
                    label="Select SFDX command type"
                    placeholder="..."
                    className="options-select"
                    classNamePrefix="options-select"
                    isSearchable={true}
                    onChange={this.onFirstChange}
                    value={firstOption}
                    options={optionsFirstConverter}
                  />

                  {showSecond ? (
                     <>
                     <h2 className="board__title  dark-white">Select SFDX command:</h2>
                    <Select
                      placeholder="..."
                      className="options-select"
                      classNamePrefix="options-select"
                      isSearchable={true}
                      onChange={this.onSecondChange}
                      value={secondOption}
                      options={optionsSecondConverter[firstOption.value]}
                    /></>
                  ) : null}

                  
                </div>
              </div>
              <div className="col-12 boards">
                <div
                  className={`board__group board__group--1 ${isMobile && !usage ? ' d-none' : ''}`}
                >
                  <h2 className="board__title  dark-white">SF Command</h2>
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
                  
                </div>
              </div>
            </div>
          </div>
          <Footer dark={dark} />
        </div>
      </div>
    );
  }
}

export default Converter;
