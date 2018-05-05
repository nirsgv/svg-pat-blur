import React from 'react';
import Layers from './containers/layers';
import Legend from './containers/legend';
import Slider from './components/Slider';
import Popup from './components/popup';
import Incrementor from './components/Incrementor';
import DigitIncrementor from './components/DigitIncrementor';
import ChooseFilter from './components/ChooseFilter';
import LayerQuanityControl from './components/LayerQuanityControl';
import './App.css';
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const mapStateToProps = state => (
    {
    layers: state.layers.layers,
    layerCount: state.layers.layerCount,
    count: state.counter.count,
    opacityAmount: state.ranger.opacityAmount,
    filtersData: state.filters,
    chosenFilter: state.filters.chosenFilter,
    chosenLayerId: state.layers.chosenLayerId,
    chosenLayerIdx: state.layers.chosenLayerIdx,
    isBksSelectionOn: state.bkgSelectionPopup.open,
    });
const App = (props) => {
    const {
        count,
        opacityAmount,
        layers,
        filtersData,
        chosenFilter,
        chosenLayerId,
        chosenLayerIdx,
    } = props;
    console.log(layers);
    const chosenLayerIdxe = chosenLayerIdx ? chosenLayerIdx : 0;
    return (
        <div className="App">
            <main id="layers-wrp">
                <Layers />
            </main>
            <aside id="legend-wrp">
                <Legend />
            </aside>
            <aside id="quanity-control-wrp">
                <LayerQuanityControl />
            </aside>
            <section id="input-wrp">
                <Slider id="slider-wrp"/>
            </section>
            <aside id="filter-select-wrp">
                <ChooseFilter />
            </aside>
            <section id="layer-controls-wrp">
                <Incrementor id="incrementor-wrp"/>
                <DigitIncrementor id="digit-incrementor-wrp"
                                  chosenFilter={chosenFilter}
                                  chosenLayerId={chosenLayerId}
                                  chosenLayerIdx={chosenLayerIdxe}
                                  filtersData={filtersData}
                                  layers={layers}
                />
            </section>
            <header className="App-header">
                <h1 className="App-title">{count} {opacityAmount}</h1>
                <h1 className="App-title">{opacityAmount}</h1>
            </header>
            <div id="content">
                <div className="item five">

                </div>
                {props.isBksSelectionOn && <Popup />}
            </div>
        </div>)
};

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about-us')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

