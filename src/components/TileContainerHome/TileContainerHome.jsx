import React from 'react';
import './TileContainerHome.css';
import InteractiveTile from '../InteractiveTile/InteractiveTile';

class TileContainerHome extends React.Component {

    render () {

        return (

            <div className='tile-container-home'> 
                <InteractiveTile 
                    heading={'Operators'} 
                    description={'Operators create and maintain Fabric networks. They \
                    also deploy smart contracts created by developers.'} 
                    link={'/operators'}/>
                <InteractiveTile
                    heading={'Developers'}
                    description={'Developers create smart contracts which define the \
                    use cases of Fabric networks, or client applications that transact \
                    on Fabric networks.'} 
                    link={'/developers'}/>
                <InteractiveTile
                    heading={'Community & Contributors'}
                    description={'Contribute to the Fabric codebase, or join the \
                    discussion with other users.'} 
                    link={'/communitycontributors'}/>
            </div>
        )
    }
}

export default TileContainerHome;