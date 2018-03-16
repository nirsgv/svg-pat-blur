import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Layer from '../../components/Layer'


const mapStateToProps = state => (

    {
        layers: state.layers.layers,
        layerCount: state.layers.layerCount,
//try to remove this line
        t: state.layers.layers[state.layers.chosenLayerIdx],
    });


    const Layers = ({layers=[]}) => (
console.log(layers),
<div className="layers">
    <ul className="layers">
        {
         layers.map((item, index, array) => {
             return (
                     <li key={index}>
                         <Layer layerId={item.id} layerProps={item.stl} />
                     </li>
                    )
                }
            )
        }
    </ul>
</div>
);




const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layers);

