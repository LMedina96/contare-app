import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const SideNavBar = () => {

    const [itemSelected, setItemSelected] = useState(null)

    const handleItemSelected = (index) => {
        setItemSelected(index)
    }

    const listItem = [
        'carbon:dashboard',
        'mdi:finance',
        'ph:calculator'
    ]

    return (
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-xl shadow-md">
            <ul className='my-1'>

                {
                    listItem.map((item, index) => (
                        <li key={index}>
                            <button
                                className={`p-4 hover:bg-gray-200 active:bg-gray-300 ${itemSelected === index ? 'bg-gray-300' : ''}`}
                                onClick={() => handleItemSelected(index)}
                            >
                                <Icon icon={item} width="24" height="24" />
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default SideNavBar;