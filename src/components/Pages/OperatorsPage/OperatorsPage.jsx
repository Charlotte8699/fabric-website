import React from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import FooterContainer from '../../../components/FooterContainer/FooterContainer';
import HeaderOperators from '../../../components/HeaderOperators/HeaderOperators';
import TileContainerOperatorsIntro from '../../../components/TileContainerOperatorsIntro/TileContainerOperatorsIntro';
import TileContainerOperatorsReferences from '../../../components/TileContainerOperatorsReferences/TileContainerOperatorsReferences';
import PerformanceSection from '../../../components/PerformanceSection/PerformanceSection';
import Dropdown from '../../../components/Dropdown/Dropdown';
import '../Page.css';

class OperatorsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fabricVersion: '2.1 (Latest version)'
        }

        this.onSelect =  this.onSelect.bind(this);
    }

    onSelect(e) {
        this.setState({
            fabricVersion: e.target.innerHTML
        });
    }

    render() {
        let fabricOptions = [
            {
                id: 0,
                title: '2.1 (Latest version)',
                selected: false,
                key: 'fabricVersion'
            },
            {
              id: 1,
              title: '2.0',
              selected: false,
              key: 'fabricVersion'
            },
            {
              id: 2,
              title: '1.4',
              selected: false,
              key: 'fabricVersion'
            }
        ]


        return (
            <>
                <HeaderOperators />
                <div className='page-container'>
                    <PageTitle
                        titleName={'Getting started'} 
                        titleSubheading={'First time trying Fabric? Start here!'} />
                    <TileContainerOperatorsIntro />
                    <PageTitle
                        titleName={'References'} 
                        titleSubheading={'The most common reference information for Fabric \
                        operators: keep these resources handy! Commands may vary by version \
                        - if you’re not sure what version to use, check Releases on GitHub \
                        for further information.'} />
                    <Dropdown 
                        currentValue={this.state.fabricVersion}
                        title='Select Fabric version' 
                        list={fabricOptions}
                        onSelect={this.onSelect}
                        />
                    <TileContainerOperatorsReferences fabricVersion={this.state.fabricVersion}/>
                    <PerformanceSection />
                    <FooterContainer />
                </div>
            </>
        );
    }
}

export default OperatorsPage;