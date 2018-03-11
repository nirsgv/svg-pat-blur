import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Layer from '../../components/Layer'


const mapStateToProps = state => ({
    layers: state.layers.layers,
    layerCount: state.layers.layerCount
});


    const Layers = (props) => (

<div className="layers">
    <ul className="layers">
        {
         props.layers.map((item, index, array) => {
             return (
                     <li key={index}>
                         <Layer layerId={props.layerId} layerProps={item}/>
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

