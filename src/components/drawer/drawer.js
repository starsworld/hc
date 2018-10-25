import React, {Component} from 'react'
import * as mocks from '../../common/mocks'
import './drawer.less'
import './a.css'

export default class Drawer extends Component {

    state = {
        menuList: mocks.getMenuList()
    }

    render() {
        return (
            <div className='fish-grids'>
                {this.state.menuList.map((item, key) => (
                    <div className='fish-grid' key={key}>
                        <img className='fish-grid_icon' alt={item.name} src={require('../../image/5.png')} />
                        <div className='fish-grid_label'>{item.name}</div>
                    </div>
                ))}
            </div>
        )
    }
}