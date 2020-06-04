import React from "react";
import Slider from "@material-ui/core/Slider";

export default class Wykres extends React.Component {

    tablicaMozliwychWartosci = [];

    constructor(props) {
        super(props);
        var tab2d = [];
        for (let i = 0; i < 9; i++) {
            tab2d[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        this.state = {
            sliderValue: 0,
            showPopup: false,
            top: 0,
            left: 100,
            sudokuTab: tab2d,
            x: 0,
            y: 0,
            item: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.closePopUp = this.closePopUp.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(e){
        const xx = this.state.x, yy=this.state.y, valuee = e.currentTarget.innerText;
        console.log(xx, yy, valuee);
        let tab2dd = [];
        for (let i = 0; i < 9; i++) {
            tab2dd[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        for (let k = 0; k < 9; k++){
            for (let j = 0; j < 9; j++){
                tab2dd[k][j] = this.state.sudokuTab[k][j];
            }
        }
        tab2dd[xx][yy] = valuee;
        this.setState({sudokuTab: tab2dd});
    }

    closePopUp() {
        this.setState({showPopup: false});
    }

    handleChange(e, v) {
        this.setState({sliderValue: v});
    }

    handleButtonClick(e) {
        this.setState(
            {
                x : Math.floor(e.currentTarget.id/9),
                y : e.currentTarget.id%9,
                showPopup: true
            }
        );
        console.log(this.state.x);
        console.log(this.state.y);
    }

    autoSolve(e) {
        for(let i=0;i<81;i++){
            this.tablicaMozliwychWartosci[i]=0;//napisz to w cpp.
        }

    }

    render() {
        return (
            <span>
                {
                    this.state.showPopup ?
                        <Cyferki
                            closePopup={this.closePopUp}
                            changeValue={this.changeValue}
                            top={this.state.top}
                            left={this.state.left}
                        />
                        : null
                }
                <div style={{"display": "inline-flex"}}>
                    <div style={{margin: "0 5px", width: "300px"}}>
                        <Slider
                            value={this.sliderValue}
                            onChange={this.handleChange}
                            aria-labelledby="continuous-slider"
                            color="secondary"
                            min={1}
                            max={100}
                        />
                    </div>

                    <div style={{
                        backgroundColor: "black",
                        color: "white",
                        display: "inline-flex",
                        justifyContent: "center",
                        alignsItems: "center",
                        width: "30px",
                        height: "30px",
                        border: "2px solid yellow"
                    }}>
                        {this.state.sliderValue}
                    </div>
                </div>
                <div style={{
                    position: "relative",
                    justifyContent: "center",
                    alignsItems: "center",
                    margin: "3px",
                    padding: "5px"
                }}>
                    <div style={{
                        display: "block",
                        position: "relative",
                        backgroundColor: "#444444",
                        border: "2px solid yellow",
                        margin: "auto",
                        width: "634px",
                        height: "634px"
                    }}>

                    {
                        this.state.sudokuTab.map((item, index) => {
                            return (
                                <div className="duzyKwadrat" key={index}>
                                    {
                                        item.map((itemm, indexx) => {
                                            return (
                                                <div className="malyKwadrat" key={(index) * 9 + (indexx)} id={index*9+indexx}
                                                     onClick={this.handleButtonClick}>
                                                    <p className="znacznikP">
                                                        {itemm}
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }

                    </div>
                </div>
            </span>
        );
    }
}

export class Cyferki extends React.Component {

    render() {
        const okienko = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index,) => {
            return (
                <div className="malyKwadrat" onClick={this.props.changeValue} key={item}>
                    <p className="znacznikP">{item}</p>
                </div>
            )
        });

        return (
            <div style={{
                position: "absolute",
                top: this.props.top,
                left: this.props.left
            }}>
                {okienko}
                <button className="malyKwadrat" onClick={this.props.closePopup}><p className="znacznikP">ok</p></button>
            </div>
        );
    }
}